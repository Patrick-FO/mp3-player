import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import trackRoutes from './routes/trackRoutes.js';
import fileUpload from 'express-fileupload';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({
  origin: ['https://patrick-fo.github.io', 'http://localhost:5173'],
  methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
  credentials: true,
  optionsSuccessStatus: 200
}));

app.use(fileUpload({
  limits: { 
    fileSize: 50 * 1024 * 1024 
  },
  useTempFiles: false,
  debug: true,
  safeFileNames: true,
  preserveExtension: 4,
  abortOnLimit: true,
  responseOnLimit: "File size limit exceeded"
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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