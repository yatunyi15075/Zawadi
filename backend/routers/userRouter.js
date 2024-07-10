import express from 'express';
import {
  registerSuperAdmin,
  login,
  createAdmin,
  createTeacher,
  createParent,
} from '../controllers/userControllers.js';

const router = express.Router();

router.post('/register-super-admin', registerSuperAdmin);
router.post('/login', login);
router.post('/create-admin', createAdmin);
router.post('/create-teacher', createTeacher);
router.post('/create-parent', createParent);

export default router;
