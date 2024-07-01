import express from 'express';
import {
  createPerformance,
  getAllPerformances,
  getPerformanceById,
  updatePerformance,
  deletePerformance,
} from '../controllers/performanceControllers.js';

const router = express.Router();

router.post('/', createPerformance);
router.get('/', getAllPerformances);
router.get('/:id', getPerformanceById);
router.put('/:id', updatePerformance);
router.delete('/:id', deletePerformance);

export default router;
