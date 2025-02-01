import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import busboy from 'connect-busboy';
import trackRoutes from './routes/trackRoutes.js';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({
  origin: ['https://patrick-fo.github.io', 'http://localhost:5173'],
  methods: ['GET', 'POST', 'DELETE', 'OPTIONS', 'PUT'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Content-Range', 'X-Content-Range'],
  credentials: true
}));

app.use(busboy({
  highWaterMark: 2 * 1024 * 1024, // Set 2MiB buffer
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB limit
    files: 2 // Allow up to 2 files (mp3 and cover image)
  }
}));

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

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