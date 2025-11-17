import express from 'express';
import { createCategory, getCategories } from '../controllers/categoryController.js';
import { validateCategory } from '../middleware/validate.js';

const router = express.Router();

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Create a new category
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       201:
 *         description: Category created
 */

router.route('/')
  .get(getCategories)
  .post(validateCategory, createCategory);

export default router;