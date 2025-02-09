import express from 'express';
import { google, signup } from '../controllers/auth.control.js'
import { signin } from '../controllers/auth.control.js';

const router = express.Router();

router.post('/signup',signup);
router.post('/signin',signin);
router.post('/google',google)

export default router