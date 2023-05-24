import express from 'express';
import { createItem, getAllComments } from '../controller/itemController.js';
import { createComment } from '../controller/commentController.js';

const router = express.Router();

router.post('/:id', createItem);
router.post('/:id/comment', createComment)
router.get('/:id/comments', getAllComments)

export default router;