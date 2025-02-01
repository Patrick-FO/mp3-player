import express from 'express';
import { uploadTrack, getTracks, deleteTrack } from '../controllers/trackController.js';
import verifyAuth from '../middleware/auth.js';

const router = express.Router();

router.use(verifyAuth);
router.post('/upload', uploadTrack);
router.get('/', getTracks);
router.delete('/:id', deleteTrack);

export default router;