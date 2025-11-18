import express from 'express';
import { createCategory, getCategories } from '../controllers/categoryController.js';
import { validateCategory } from '../middleware/validate.js';

const router = express.Router();

/**
 * @swagger
 * /categories:
 *   get: { summary: "Get all categories", tags: ["Categories"] }
 *   post: { summary: "Create category", tags: ["Categories"], requestBody: { required: true, content: { "application/json": { schema: { type: "object", properties: { name: {type:"string"}, description:{type:"string"} }, required: ["name"] } } } } }
 */

router.route('/')
  .get(getCategories)
  .post(validateCategory, createCategory);

export default router;