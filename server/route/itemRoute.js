import express from 'express';
import { createItem } from '../controller/itemController.js';
import { createComment } from '../controller/commentController.js';

const router = express.Router();

router.post('/:id', createItem);
router.post('/:id/comment', createComment)

export default router;