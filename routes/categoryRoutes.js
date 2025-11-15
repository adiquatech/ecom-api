import express from 'express';
import { createCategory, getCategories } from '../controllers/categoryController.js';
import { validateCategory } from '../middleware/validate.js';

const router = express.Router();

router.route('/')
  .get(getCategories)
  .post(validateCategory, createCategory);

export default router;