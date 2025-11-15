import Product from '../models/product.js';
import { catchAsync, notFound } from '../utils/utils.js';

export const createProduct = catchAsync(async (req, res) => {
  const product = await Product.create(req.body);
  res.formattedSuccess(product, 201);});

export const getProducts = catchAsync(async (req, res) => {
  const products = await Product.find().populate('category', 'name');
  res.formattedSuccess(products);
  // res.json({ success: true, count: products.length, data: products });
});

export const getProduct = catchAsync(async (req, res) => {
  const product = await Product.findById(req.params.id).populate('category');
  if (!product) throw new Error('Product not found');
  res.formattedSuccess(products);
  // res.json({ success: true, data: product });

});

export const updateProduct = catchAsync(async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  ).populate('category');

  if (!product) notFound('Product');
  res.formattedSuccess(product);
});

export const deleteProduct = catchAsync(async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) notFound('Product');
  res.formattedSuccess({});
});