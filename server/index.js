import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import trackRoutes from './routes/trackRoutes.js';
import fileUpload from 'express-fileupload';

const app = express();
const PORT = process.env.PORT || 8080;

console.log('Starting server setup...');

app.use(cors({
  origin: ['https://patrick-fo.github.io', 'http://localhost:5173'], 
  methods: ['GET', 'POST', 'DELETE'],
  credentials: true, 
  optionsSuccessStatus: 200
}));

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/',
  limits: { fileSize: 50 * 1024 * 1024 }, // 50MB limit
  debug: true // Add this for debugging
}));

app.use(express.json());
app.use('/api/tracks', trackRoutes);

app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: err.message });
});

app.get('/', (req, res) => {
  res.json({ 
    message: 'MP3 Player API is running',
    status: 'healthy'
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Routes set up:');
  console.log('- GET /');
  console.log('- /api/tracks/*');
});