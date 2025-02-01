import { PutObjectCommand, DeleteObjectCommand, CreateBucketCommand, 
  PutBucketPolicyCommand, PutBucketCorsCommand, PutPublicAccessBlockCommand } from '@aws-sdk/client-s3';
import { db } from '../config/firebase.js';
import s3Client from '../config/s3.js';
import busboy from 'busboy';

const uploadTrack = async (req, res) => {
  try {
    console.log('Starting file upload process');
    
    const fields = {};
    const fileData = {};
    let uploadComplete = false;
    
    req.pipe(busboy({ headers: req.headers }))
      .on('field', (fieldname, value) => {
        console.log('Field:', fieldname, value);
        fields[fieldname] = value;
      })
      .on('file', (fieldname, file, filename, encoding, mimetype) => {
        console.log('File [' + fieldname + ']: filename: ' + filename);
        
        const chunks = [];
        
        file.on('data', (data) => {
          console.log('File [' + fieldname + '] got ' + data.length + ' bytes');
          chunks.push(data);
        });
        
        file.on('end', () => {
          console.log('File [' + fieldname + '] Finished');
          fileData[fieldname] = {
            data: Buffer.concat(chunks),
            filename: filename,
            mimetype: mimetype
          };
        });
      })
      .on('finish', async () => {
        if (uploadComplete) return;
        uploadComplete = true;
        
        try {
          console.log('Processing completed files');
          
          if (!fileData.file) {
            return res.status(400).json({ error: 'No audio file uploaded' });
          }

          const userId = req.user.uid;
          const userBucketName = `${process.env.AWS_BUCKET_NAME}-${userId.toLowerCase().replace(/[^a-z0-9-]/g, '-')}`;

          try {
            await s3Client.send(new CreateBucketCommand({
              Bucket: userBucketName,
              CreateBucketConfiguration: {
                LocationConstraint: process.env.AWS_REGION
              }
            }));

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
                    Action: ['s3:GetObject'],
                    Resource: [`arn:aws:s3:::${userBucketName}/*`]
                  }]
                })
              }))
            ]);
          } catch (error) {
            if (error.Code !== 'BucketAlreadyOwnedByYou' && 
                error.Code !== 'BucketAlreadyExists') {
              throw error;
            }
          }

          const audioKey = `tracks/${Date.now()}-${fileData.file.filename}`;
          await s3Client.send(new PutObjectCommand({
            Bucket: userBucketName,
            Key: audioKey,
            Body: fileData.file.data,
            ContentType: fileData.file.mimetype
          }));

          const documentData = {
            title: fields.title || fileData.file.filename,
            audioUrl: `https://${userBucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${audioKey}`,
            createdAt: new Date().toISOString(),
            coverUrl: null
          };

          if (fileData.coverImage) {
            const coverKey = `covers/${Date.now()}-${fileData.coverImage.filename}`;
            await s3Client.send(new PutObjectCommand({
              Bucket: userBucketName,
              Key: coverKey,
              Body: fileData.coverImage.data,
              ContentType: fileData.coverImage.mimetype
            }));
            documentData.coverUrl = `https://${userBucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${coverKey}`;
          }

          const trackRef = await db.collection('users')
            .doc(userId)
            .collection('tracks')
            .add(documentData);

          res.status(201).json({ 
            message: 'Track uploaded successfully',
            trackId: trackRef.id
          });
          
        } catch (error) {
          console.error('Error processing upload:', error);
          res.status(500).json({ 
            error: 'Failed to process upload',
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
          });
        }
      });
      
  } catch (error) {
    console.error('Upload error:', error);
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