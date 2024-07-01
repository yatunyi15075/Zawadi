import express from 'express';
import {
  createAssessmentReport,
  getAllAssessmentReports,
  getAssessmentReportById,
  updateAssessmentReport,
  deleteAssessmentReport,
} from '../controllers/assessmentReportControllers.js';

const router = express.Router();

router.post('/', createAssessmentReport);
router.get('/', getAllAssessmentReports);
router.get('/:id', getAssessmentReportById);
router.put('/:id', updateAssessmentReport);
router.delete('/:id', deleteAssessmentReport);

export default router;
