import { Router } from 'express';
import { sendLetter } from '../controllers/letterController.js';

const router = Router();
router.post('/send', sendLetter);
export default router;
