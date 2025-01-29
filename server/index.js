import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import trackRoutes from './routes/trackRoutes.js';
import fileUpload from 'express-fileupload';
import path from 'path';
import { fileURLToPath } from 'url'; // Add this line

const app = express();
const PORT = process.env.PORT || 8081;

// Get the directory name in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, 'dist')));

app.use(cors());
app.use(express.json());
app.use('/api/tracks', trackRoutes);
app.use(fileUpload());

// Catch-all handler to serve the index.html for any unhandled routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});