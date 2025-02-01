import express from 'express';
import { uploadTrack, getTracks, deleteTrack } from '../controllers/trackController.js';
import verifyAuth from '../middleware/auth.js';

const router = express.Router();

router.use(verifyAuth);

// Remove fileUpload() middleware since we're using busboy now
router.post('/upload', uploadTrack);
router.get('/', getTracks);
router.delete('/:id', deleteTrack);

export default router;