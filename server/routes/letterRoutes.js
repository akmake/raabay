import { Router } from 'express';
import { sendLetter, previewLetter } from '../controllers/letterController.js';

const router = Router();
router.post('/send', sendLetter);
router.post('/preview', previewLetter);
export default router;
