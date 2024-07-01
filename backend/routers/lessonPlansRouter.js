import express from 'express';
import {
  createLessonPlan,
  getAllLessonPlans,
  getLessonPlanById,
  updateLessonPlan,
  deleteLessonPlan,
} from '../controllers/lessonPlansControllers.js';

const router = express.Router();

router.post('/', createLessonPlan);
router.get('/', getAllLessonPlans);
router.get('/:id', getLessonPlanById);
router.put('/:id', updateLessonPlan);
router.delete('/:id', deleteLessonPlan);

export default router;
