import express from 'express';
import {
  createCommunication,
  getAllCommunications,
  getCommunicationById,
  updateCommunication,
  deleteCommunication,
} from '../controllers/communicationControllers.js';

const router = express.Router();

router.post('/', createCommunication);
router.get('/', getAllCommunications);
router.get('/:id', getCommunicationById);
router.put('/:id', updateCommunication);
router.delete('/:id', deleteCommunication);

export default router;
