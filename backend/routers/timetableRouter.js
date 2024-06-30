import express from 'express';
import {
  createTimetable,
  getAllTimetables,
  getTimetableById,
  updateTimetable,
  deleteTimetable,
} from '../controllers/timetableController.js';

const router = express.Router();

router.post('/', createTimetable);
router.get('/', getAllTimetables);
router.get('/:id', getTimetableById);
router.put('/:id', updateTimetable);
router.delete('/:id', deleteTimetable);

export default router;