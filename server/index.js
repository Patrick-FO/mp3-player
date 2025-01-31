import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import trackRoutes from './routes/trackRoutes.js';
import fileUpload from 'express-fileupload';

const app = express();
const PORT = process.env.PORT || 8080;

app.set('trust proxy', 1);

app.use(cors({
  origin: ['https://patrick-fo.github.io', 'http://localhost:5173'], 
  methods: ['GET', 'POST', 'DELETE'],
  credentials: true, 
  optionsSuccessStatus: 200
}));

app.use(fileUpload());
app.use(express.json());
app.use('/api/tracks', trackRoutes);

// app.get('/', (req, res) => {
//   res.json({ 
//     message: 'MP3 Player API is running',
//     status: 'healthy'
//   });
// });

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});