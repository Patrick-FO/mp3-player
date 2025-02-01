import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import trackRoutes from './routes/trackRoutes.js';
import fileUpload from 'express-fileupload';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

// CORS configuration
app.use(cors({
  origin: ['https://patrick-fo.github.io', 'http://localhost:5173'],
  methods: ['GET', 'POST', 'DELETE', 'OPTIONS', 'PUT'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Create temp directory if it doesn't exist
const tempDir = path.join(__dirname, 'temp');
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

// File Upload configuration
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: tempDir,
  createParentPath: true,
  limits: {
    fileSize: 50 * 1024 * 1024,    // 50MB max file size
    parts: 3                        // Max number of parts (file, title, cover)
  },
  abortOnLimit: true,
  debug: process.env.NODE_ENV === 'development',
  uploadTimeout: 0,                 // No timeout
  parseNested: true
}));

// Basic request logging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  if (req.files) {
    console.log('Files:', Object.keys(req.files).map(key => ({
      fieldname: key,
      filename: req.files[key].name,
      size: req.files[key].size,
      mimetype: req.files[key].mimetype
    })));
  }
  next();
});

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'MP3 Player API is running',
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

app.use('/api/tracks', trackRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error('Error:', {
    message: err.message,
    stack: err.stack,
    timestamp: new Date().toISOString()
  });

  // Clean up any temp files if there was an error
  if (req.files) {
    Object.values(req.files).forEach(file => {
      if (file.tempFilePath && fs.existsSync(file.tempFilePath)) {
        fs.unlinkSync(file.tempFilePath);
      }
    });
  }

  if (err.code === 'LIMIT_FILE_SIZE') {
    return res.status(413).json({
      error: 'File too large',
      maxSize: '50MB'
    });
  }

  if (err.message && err.message.includes('Unexpected end of form')) {
    return res.status(400).json({
      error: 'Upload interrupted or invalid form data'
    });
  }

  res.status(500).json({
    error: err.message || 'Internal Server Error',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Node environment:', process.env.NODE_ENV || 'development');
});