// routes/index.js
import express from 'express';
import productRoutes from './productRoutes.js';
import categoryRoutes from './categoryRoutes.js';
import authRoutes from './authRoutes.js';

const router = express.Router();

router.use('/authRoutes', authRoutes);
router.use('/products', productRoutes);
router.use('/categories', categoryRoutes);

export default router;
