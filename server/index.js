import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import trackRoutes from './routes/trackRoutes.js';
import fileUpload from 'express-fileupload';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({
  origin: ['https://patrick-fo.github.io', 'http://localhost:5173'],
  methods: ['GET', 'POST', 'DELETE', 'OPTIONS', 'PUT'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Content-Range', 'X-Content-Range'],
  maxAge: 3600,
  preflightContinue: false
}));

app.use(fileUpload({
  limits: { 
    fileSize: 50 * 1024 * 1024, // 50MB
  },
  useTempFiles: false, // Change to false to handle in memory
  debug: true,
  parseNested: true,
  abortOnLimit: true,
  uploadTimeout: 0, // Remove timeout
  preserveExtension: true,
  createParentPath: true,
  defParamCharset: 'utf8',
  responseOnLimit: "File size limit has been reached",
  safeFileNames: /[&$+,,/:;=?@<>\[\]\{\}\\|\^~%'"\s]/g, // More strict filename sanitization
}));

app.use((error, req, res, next) => {
  console.error('Middleware Error:', error);
  if (error.code === 'LIMIT_FILE_SIZE') {
    return res.status(413).json({
      error: 'File too large',
      maxSize: '50MB'
    });
  }
  if (error.message && error.message.includes('Unexpected end of form')) {
    return res.status(400).json({
      error: 'Upload failed - connection interrupted or invalid form data'
    });
  }
  next(error);
});

app.options('*', cors());

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  if (req.files) {
    console.log('Files in request:', Object.keys(req.files).map(key => ({
      fieldname: key,
      filename: req.files[key].name,
      size: req.files[key].size,
      mimetype: req.files[key].mimetype
    })));
  }
  next();
});

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ 
    message: 'MP3 Player API is running',
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

app.use('/api/tracks', trackRoutes);

app.use((err, req, res, next) => {
  console.error('Error:', {
    message: err.message,
    stack: err.stack,
    timestamp: new Date().toISOString()
  });

  res.status(500).json({
    error: err.message || 'Internal Server Error',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Node environment:', process.env.NODE_ENV || 'development');
});