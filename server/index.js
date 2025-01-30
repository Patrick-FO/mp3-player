import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import trackRoutes from './routes/trackRoutes.js';
import fileUpload from 'express-fileupload';

const app = express();
const PORT = process.env.PORT || 8081;

app.set('trust proxy', 1);

app.use(cors({
  origin: ['https://patrick-fo.github.io', 'http://localhost:5173', 'http://production-env.eba-fbx3qqzr.eu-north-1.elasticbeanstalk.com'], 
  methods: ['GET', 'POST', 'DELETE'],
  credentials: true
}));

app.use(express.json());
app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 }, 
  useTempFiles: true
}));
app.use('/api/tracks', trackRoutes);

app.get('/', (req, res) => {
  res.json({ 
    message: 'MP3 Player API is running',
    status: 'healthy'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});