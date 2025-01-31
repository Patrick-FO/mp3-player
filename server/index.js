import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import trackRoutes from './routes/trackRoutes.js';
import fileUpload from 'express-fileupload';
import os from 'os';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 8080;

console.log('Starting server setup...');

app.use(cors({
  origin: ['https://patrick-fo.github.io', 'http://localhost:5173'], 
  methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
  credentials: true,
  optionsSuccessStatus: 200
}));

// Enhanced file upload configuration
app.use(fileUpload({
  createParentPath: true,
  limits: {
    fileSize: 50 * 1024 * 1024 // 50MB
  },
  useTempFiles: true,
  tempFileDir: path.join(os.tmpdir(), 'uploads'),
  abortOnLimit: true,
  parseNested: true,
  debug: true,
  safeFileNames: true,
  preserveExtension: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  if (req.files) {
    console.log('Files received:', Object.keys(req.files));
    Object.keys(req.files).forEach(key => {
      console.log(`File ${key}:`, {
        name: req.files[key].name,
        size: req.files[key].size,
        mimetype: req.files[key].mimetype
      });
    });
  }
  next();
});

// Health check route
app.get('/', (req, res) => {
  res.json({ 
    message: 'MP3 Player API is running',
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

// Track routes
app.use('/api/tracks', trackRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error details:', {
    message: err.message,
    stack: err.stack,
    timestamp: new Date().toISOString()
  });

  res.status(500).json({
    error: err.message || 'Internal Server Error',
    details: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Temp directory:', path.join(os.tmpdir(), 'uploads'));
  console.log('Environment:', process.env.NODE_ENV || 'development');
});