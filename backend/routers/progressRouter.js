import express from 'express';
import {
  createProgress,
  getAllProgress,
  getProgressById,
  updateProgress,
  deleteProgress,
} from '../controllers/progressControllers.js';

const router = express.Router();

router.post('/', createProgress);
router.get('/', getAllProgress);
router.get('/:id', getProgressById);
router.put('/:id', updateProgress);
router.delete('/:id', deleteProgress);

export default router;
