import express from 'express';
import {
  createAttendanceRecord,
  getAllAttendanceRecords,
  getAttendanceRecordById,
  updateAttendanceRecord,
  deleteAttendanceRecord,
} from '../controllers/attendanceRecordController.js';

const router = express.Router();

router.post('/', createAttendanceRecord);
router.get('/', getAllAttendanceRecords);
router.get('/:id', getAttendanceRecordById);
router.put('/:id', updateAttendanceRecord);
router.delete('/:id', deleteAttendanceRecord);

export default router;
