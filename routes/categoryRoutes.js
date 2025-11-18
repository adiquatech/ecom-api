import express from 'express';
import { createCategory, getCategories } from '../controllers/categoryController.js';
import { validateCategory } from '../middleware/validate.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Categories
 *     description: Category endpoints
 * 
 * /categories:
 *   get:
 *     summary: Get all categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: List of categories
 *   post:
 *     summary: Create a new category
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: Electronics
 *               description:
 *                 type: string
 *                 example: Phones, laptops, gadgets
 *     responses:
 *       201:
 *         description: Category created
 */
router.route('/')
  .get(getCategories)
  .post(validateCategory, createCategory);

export default router;