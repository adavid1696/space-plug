import express from 'express';
import { createItem } from '../controller/itemController.js';

const router = express.Router();

router.post('/:id', createItem);

export default router;