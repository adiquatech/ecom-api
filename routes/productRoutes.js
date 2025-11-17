import express from 'express';
import {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct
} from '../controllers/productController.js';
import { validateProduct } from '../middleware/validate.js';

const router = express.Router();

router.route('/')
  .get(getProducts)
  .post(validateProduct, createProduct);

router.route('/:id')
  .get(getProduct)
  .put(validateProduct, updateProduct)
  .delete(deleteProduct);

export default router;