import express from 'express';
import {
  createStudentAssignment,
  getAllStudentAssignments,
  getStudentAssignment,
  updateStudentAssignment,
  deleteStudentAssignment,
} from '../controllers/studentAssignmentsController.js';

const router = express.Router();

router.post('/', createStudentAssignment);
router.get('/', getAllStudentAssignments);
router.get('/:studentId/:assignmentId', getStudentAssignment);
router.put('/:studentId/:assignmentId', updateStudentAssignment);
router.delete('/:studentId/:assignmentId', deleteStudentAssignment);

export default router;
