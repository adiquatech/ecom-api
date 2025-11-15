import Product from '../models/product.js';
import { catchAsync } from '../utils/catchAsync.js';

export const createProduct = catchAsync(async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({ success: true, data: product });
});

export const getProducts = catchAsync(async (req, res) => {
  const products = await Product.find().populate('category', 'name');
  res.json({ success: true, count: products.length, data: products });
});

export const getProduct = catchAsync(async (req, res) => {
  const product = await Product.findById(req.params.id).populate('category');
  if (!product) throw new Error('Product not found');
  res.json({ success: true, data: product });
});

export const updateProduct = catchAsync(async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!product) throw new Error(' relaProduct not found');
  res.json({ success: true, data: product });
});

export const deleteProduct = catchAsync(async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) throw new Error('Product not found');
  res.json({ success: true, data: {} });
});