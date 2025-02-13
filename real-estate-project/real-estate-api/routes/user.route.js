import express from 'express';
import { test,updateUser, deleteUser } from '../controllers/user.control.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test',test);
// first before performing update or delete we have to verify the token
router.post('/update/:id', verifyToken, updateUser)
router.post('/delete/:id', verifyToken, deleteUser)

export default router;