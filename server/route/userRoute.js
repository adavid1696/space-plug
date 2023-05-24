import express from 'express';
import { createUser, getUserItems } from '../controller/userController.js';

const router = express.Router();

router.post('/', createUser);
router.get('/:id', getUserItems);

export default router;