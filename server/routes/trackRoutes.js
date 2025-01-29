import express from 'express';
import fileUpload from 'express-fileupload';
import { uploadTrack, getTracks, deleteTrack } from '../controllers/trackController.js';
import verifyAuth from '../middleware/auth.js';

const router = express.Router();

router.use(verifyAuth);

router.post('/upload', fileUpload(), uploadTrack);
router.get('/', getTracks);
router.delete('/:id', deleteTrack);

export default router;