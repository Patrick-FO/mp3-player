import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import trackRoutes from './routes/trackRoutes.js';
import fileUpload from 'express-fileupload';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/tracks', trackRoutes);
app.use(fileUpload());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});