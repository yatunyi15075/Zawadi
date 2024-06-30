import express from 'express';
import {
  createEnteredMark,
  getAllEnteredMarks,
  getEnteredMarkById,
  updateEnteredMark,
  deleteEnteredMark,
} from '../controllers/enteredMarksController.js';

const router = express.Router();

router.post('/', createEnteredMark);
router.get('/', getAllEnteredMarks);
router.get('/:id', getEnteredMarkById);
router.put('/:id', updateEnteredMark);
router.delete('/:id', deleteEnteredMark);

export default router;
