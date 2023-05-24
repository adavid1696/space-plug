import express from 'express';
import { createItem, deleteItem, getAllComments, getAllItems } from '../controller/itemController.js';
import { createComment } from '../controller/commentController.js';

const router = express.Router();

// POST ITEM
router.post('/:id', createItem);
// POST COMMENT
router.post('/:id/comment', createComment)
// GET COMMENTS
router.get('/:id/comments', getAllComments)
// GET ITEMS
router.get('/', getAllItems)
// DELETE ITEM
router.delete('/:id', deleteItem)

export default router;