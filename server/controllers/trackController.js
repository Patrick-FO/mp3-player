import { PutObjectCommand, DeleteObjectCommand, CreateBucketCommand, 
  PutBucketPolicyCommand, PutBucketCorsCommand, PutPublicAccessBlockCommand } from '@aws-sdk/client-s3';
import { db } from '../config/firebase.js';
import s3Client from '../config/s3.js';

const uploadTrack = async (req, res) => {
  
  try {
    console.log('Upload request received');
    console.log('Headers:', req.headers);
    console.log('Files:', req.files ? Object.keys(req.files) : 'No files');

    if (!req.files || !req.files.file) {
      console.log('No files found in request');
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const userId = req.user.uid;
    const userBucketName = `${process.env.AWS_BUCKET_NAME}-${userId.toLowerCase().replace(/[^a-z0-9-]/g, '-')}`;

    try {
      console.log('Configuring bucket:', userBucketName);

      await s3Client.send(new CreateBucketCommand({
        Bucket: userBucketName,
        CreateBucketConfiguration: {
          LocationConstraint: process.env.AWS_REGION
        }
      }));

      await s3Client.send(new PutPublicAccessBlockCommand({
        Bucket: userBucketName,
        PublicAccessBlockConfiguration: {
          BlockPublicAcls: false,
          BlockPublicPolicy: false,
          IgnorePublicAcls: false,
          RestrictPublicBuckets: false
        }
      }));

      const bucketPolicy = {
        Version: '2012-10-17',
        Statement: [
          {
            Sid: 'PublicReadGetObject',
            Effect: 'Allow',
            Principal: '*',
            Action: [
              's3:GetObject',
              's3:GetObjectVersion',
              's3:GetObjectTagging'
            ],
            Resource: [
              `arn:aws:s3:::${userBucketName}/*`
            ]
          }
        ]
      };

      await s3Client.send(new PutBucketPolicyCommand({
        Bucket: userBucketName,
        Policy: JSON.stringify(bucketPolicy)
      }));

      const corsRules = {
        CORSRules: [
          {
            AllowedHeaders: ["*"],
            AllowedMethods: ["GET", "PUT", "POST", "DELETE", "HEAD"],
            AllowedOrigins: ["*"],
            ExposeHeaders: ["ETag"],
            MaxAgeSeconds: 3000
          }
        ]
      };

      await s3Client.send(new PutBucketCorsCommand({
        Bucket: userBucketName,
        CORSConfiguration: corsRules
      }));

    } catch (error) {
      if (error.Code !== 'BucketAlreadyOwnedByYou' && 
          error.Code !== 'BucketAlreadyExists') {
        console.error('Bucket configuration error:', error);
        throw error;
      }
    }

    const { file } = req.files;
    const title = req.body.title || file.name;
    
    try {
      console.log('Uploading file:', {
        name: file.name,
        size: file.size,
        type: file.mimetype
      });

      const audioKey = `tracks/${Date.now()}-${file.name}`;
      await s3Client.send(new PutObjectCommand({
        Bucket: userBucketName,
        Key: audioKey,
        Body: file.data,
        ContentType: file.mimetype
      }));

      const documentData = {
        title,
        audioUrl: `https://${userBucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${audioKey}`,
        createdAt: new Date().toISOString(),
        coverUrl: null 
      };

      if (req.files.coverImage) {
        console.log('Uploading cover image:', {
          name: req.files.coverImage.name,
          size: req.files.coverImage.size,
          type: req.files.coverImage.mimetype
        });

        const coverKey = `covers/${Date.now()}-${req.files.coverImage.name}`;
        await s3Client.send(new PutObjectCommand({
          Bucket: userBucketName,
          Key: coverKey,
          Body: req.files.coverImage.data,
          ContentType: req.files.coverImage.mimetype
        }));
        documentData.coverUrl = `https://${userBucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${coverKey}`;
      }

      const trackRef = await db.collection('users')
        .doc(userId)
        .collection('tracks')
        .add(documentData);

      console.log('Track saved successfully:', {
        trackId: trackRef.id,
        documentData
      });

      res.status(201).json({ 
        message: 'Track uploaded successfully',
        trackId: trackRef.id
      });
    } catch (error) {
      console.error('Error during file upload or Firebase save:', error);
      throw error;
    }
  } catch (error) {
    console.error('Error in uploadTrack:', error);
    res.status(500).json({ 
      error: 'Failed to upload track',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

const getTracks = async (req, res) => {
  try {
    console.log('Fetching tracks for user:', req.user?.uid);
    
    const tracksSnapshot = await db.collection('users')
      .doc(req.user.uid)
      .collection('tracks')
      .orderBy('createdAt', 'desc')
      .get();

    const tracks = [];
    
    tracksSnapshot.forEach((doc) => {
      tracks.push({
        id: doc.id,
        ...doc.data()
      });
    });

    console.log(`Retrieved ${tracks.length} tracks`);
    res.json(tracks);
  } catch (error) {
    console.error('Error getting tracks:', error);
    res.status(500).json({ 
      error: error.message,
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
};

const deleteTrack = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.uid;
    const userBucketName = `${process.env.AWS_BUCKET_NAME}-${userId.toLowerCase().replace(/[^a-z0-9-]/g, '-')}`;

    console.log('Deleting track:', { trackId: id, userId });

    const trackDoc = await db.collection('users')
      .doc(userId)
      .collection('tracks')
      .doc(id)
      .get();

    if (!trackDoc.exists) {
      return res.status(404).json({ error: 'Track not found' });
    }

    const data = trackDoc.data();
    console.log('Track data:', data);

    try {
      const audioUrl = new URL(data.audioUrl);
      const audioKey = decodeURIComponent(audioUrl.pathname.substring(1));
      console.log('Deleting audio file:', audioKey);

      await s3Client.send(new DeleteObjectCommand({
        Bucket: userBucketName,
        Key: audioKey
      }));

      if (data.coverUrl) {
        const coverUrl = new URL(data.coverUrl);
        const coverKey = decodeURIComponent(coverUrl.pathname.substring(1));
        console.log('Deleting cover image:', coverKey);

        await s3Client.send(new DeleteObjectCommand({
          Bucket: userBucketName,
          Key: coverKey
        }));
      }

      await db.collection('users')
        .doc(userId)
        .collection('tracks')
        .doc(id)
        .delete();

      console.log('Track deleted successfully');
      res.json({ 
        message: 'Track deleted successfully',
        trackId: id
      });
    } catch (error) {
      console.error('Error during deletion:', error);
      throw error;
    }
  } catch (error) {
    console.error('Error in deleteTrack:', error);
    res.status(500).json({ 
      error: 'Failed to delete track',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

export { uploadTrack, getTracks, deleteTrack };