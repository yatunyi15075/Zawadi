import express from 'express';
import {
  createGrade,
  getAllGrades,
  getGradeById,
  updateGrade,
  deleteGrade,
} from '../controllers/gradesController.js';

const router = express.Router();

router.post('/', createGrade);
router.get('/', getAllGrades);
router.get('/:id', getGradeById);
router.put('/:id', updateGrade);
router.delete('/:id', deleteGrade);

export default router;
