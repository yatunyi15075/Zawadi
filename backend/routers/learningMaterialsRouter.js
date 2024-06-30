import express from 'express';
import {
  createLearningMaterial,
  getAllLearningMaterials,
  getLearningMaterialById,
  updateLearningMaterial,
  deleteLearningMaterial,
} from '../controllers/learningMaterialsController.js';

const router = express.Router();

router.post('/', createLearningMaterial);
router.get('/', getAllLearningMaterials);
router.get('/:id', getLearningMaterialById);
router.put('/:id', updateLearningMaterial);
router.delete('/:id', deleteLearningMaterial);

export default router;
