import express from 'express';
import {
  createCurriculumEntry,
  getAllCurriculumEntries,
  getCurriculumEntryById,
  updateCurriculumEntry,
  deleteCurriculumEntry,
} from '../controllers/curriculumManagementController.js';

const router = express.Router();

router.post('/', createCurriculumEntry);
router.get('/', getAllCurriculumEntries);
router.get('/:id', getCurriculumEntryById);
router.put('/:id', updateCurriculumEntry);
router.delete('/:id', deleteCurriculumEntry);

export default router;
