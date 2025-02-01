import { PutObjectCommand, DeleteObjectCommand, CreateBucketCommand, 
  PutBucketPolicyCommand, PutBucketCorsCommand, PutPublicAccessBlockCommand } from '@aws-sdk/client-s3';
import { db } from '../config/firebase.js';
import s3Client from '../config/s3.js';

const uploadTrack = async (req, res) => {
  try {
    console.log('==== Upload Request Details ====');
    console.log('Headers:', {
      'content-type': req.headers['content-type'],
      'content-length': req.headers['content-length']
    });
    console.log('Body:', req.body);
    console.log('Files present:', !!req.files);
    
    // Detailed file logging
    if (req.files) {
      console.log('Files structure:', JSON.stringify(req.files, null, 2));
    }

    if (!req.files || !req.files.file) {
      return res.status(400).json({ 
        error: 'No file uploaded',
        details: {
          filesReceived: req.files ? Object.keys(req.files) : 'none',
          contentType: req.headers['content-type']
        }
      });
    }

    const file = req.files.file;
    console.log('File details:', {
      name: file.name,
      size: file.size,
      type: file.mimetype,
      md5: file.md5
    });

    // Validate file size
    if (file.size > 50 * 1024 * 1024) {
      return res.status(413).json({
        error: 'File too large',
        maxSize: '50MB'
      });
    }

    const userId = req.user.uid;
    const userBucketName = `${process.env.AWS_BUCKET_NAME}-${userId.toLowerCase().replace(/[^a-z0-9-]/g, '-')}`;

    try {
      console.log('Configuring bucket:', userBucketName);

      try {
        await s3Client.send(new CreateBucketCommand({
          Bucket: userBucketName,
          CreateBucketConfiguration: {
            LocationConstraint: process.env.AWS_REGION
          }
        }));

        // Configure bucket after creation
        await Promise.all([
          s3Client.send(new PutPublicAccessBlockCommand({
            Bucket: userBucketName,
            PublicAccessBlockConfiguration: {
              BlockPublicAcls: false,
              BlockPublicPolicy: false,
              IgnorePublicAcls: false,
              RestrictPublicBuckets: false
            }
          })),
          s3Client.send(new PutBucketPolicyCommand({
            Bucket: userBucketName,
            Policy: JSON.stringify({
              Version: '2012-10-17',
              Statement: [{
                Sid: 'PublicReadGetObject',
                Effect: 'Allow',
                Principal: '*',
                Action: [
                  's3:GetObject',
                  's3:GetObjectVersion',
                  's3:GetObjectTagging'
                ],
                Resource: [`arn:aws:s3:::${userBucketName}/*`]
              }]
            })
          })),
          s3Client.send(new PutBucketCorsCommand({
            Bucket: userBucketName,
            CORSConfiguration: {
              CORSRules: [{
                AllowedHeaders: ["*"],
                AllowedMethods: ["GET", "PUT", "POST", "DELETE", "HEAD"],
                AllowedOrigins: ["*"],
                ExposeHeaders: ["ETag"],
                MaxAgeSeconds: 3000
              }]
            }
          }))
        ]);
      } catch (error) {
        // Only ignore if bucket already exists
        if (error.Code !== 'BucketAlreadyOwnedByYou' && 
            error.Code !== 'BucketAlreadyExists') {
          throw error;
        }
      }

      const title = req.body.title || file.name;
      const audioKey = `tracks/${Date.now()}-${file.name}`;
      
      console.log('Uploading file to S3:', {
        bucket: userBucketName,
        key: audioKey,
        size: file.size
      });

      await s3Client.send(new PutObjectCommand({
        Bucket: userBucketName,
        Key: audioKey,
        Body: file.data,
        ContentType: file.mimetype,
        ContentDisposition: 'inline',
        CacheControl: 'public, max-age=31536000'
      }));

      const documentData = {
        title,
        audioUrl: `https://${userBucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${audioKey}`,
        createdAt: new Date().toISOString(),
        coverUrl: null 
      };

      if (req.files.coverImage) {
        const coverImage = req.files.coverImage;
        console.log('Processing cover image:', {
          name: coverImage.name,
          size: coverImage.size,
          type: coverImage.mimetype
        });

        // Validate cover image size
        if (coverImage.size > 5 * 1024 * 1024) {
          return res.status(413).json({
            error: 'Cover image too large',
            maxSize: '5MB'
          });
        }

        const coverKey = `covers/${Date.now()}-${coverImage.name}`;
        await s3Client.send(new PutObjectCommand({
          Bucket: userBucketName,
          Key: coverKey,
          Body: coverImage.data,
          ContentType: coverImage.mimetype,
          CacheControl: 'public, max-age=31536000'
        }));

        documentData.coverUrl = `https://${userBucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${coverKey}`;
      }

      console.log('Saving to Firebase:', documentData);

      const trackRef = await db.collection('users')
        .doc(userId)
        .collection('tracks')
        .add(documentData);

      console.log('Upload completed successfully:', {
        trackId: trackRef.id,
        audioUrl: documentData.audioUrl
      });

      res.status(201).json({ 
        message: 'Track uploaded successfully',
        trackId: trackRef.id,
        track: {
          id: trackRef.id,
          ...documentData
        }
      });

    } catch (error) {
      console.error('Error during file processing:', error);
      throw error;
    }

  } catch (error) {
    console.error('Upload error:', {
      message: error.message,
      code: error.code,
      stack: error.stack
    });

    res.status(500).json({ 
      error: 'Failed to upload track',
      details: process.env.NODE_ENV === 'development' ? {
        message: error.message,
        code: error.code
      } : undefined
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
      // Delete audio file
      const audioUrl = new URL(data.audioUrl);
      const audioKey = decodeURIComponent(audioUrl.pathname.substring(1));
      console.log('Deleting audio file:', audioKey);

      await s3Client.send(new DeleteObjectCommand({
        Bucket: userBucketName,
        Key: audioKey
      }));

      // Delete cover image if exists
      if (data.coverUrl) {
        const coverUrl = new URL(data.coverUrl);
        const coverKey = decodeURIComponent(coverUrl.pathname.substring(1));
        console.log('Deleting cover image:', coverKey);

        await s3Client.send(new DeleteObjectCommand({
          Bucket: userBucketName,
          Key: coverKey
        }));
      }

      // Delete document from Firestore
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