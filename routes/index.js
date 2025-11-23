// routes/index.js
import express from 'express';
import productRoutes from './productRoutes.js';
import categoryRoutes from './categoryRoutes.js';
import authRoutes from './authRoutes.js';
import privacyRoutes from './privacy.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/privacy', privacyRoutes);
router.use('/products', productRoutes);
router.use('/categories', categoryRoutes);

export default router;
