import Product from '../models/product.js';
import { catchAsync, notFound } from '../utils/utils.js';

// Product details formatter to include category info
const productDetails = (product) => {
  const obj = product.toObject();
  obj.category_id = obj.category?._id || null;
  obj.category_name = obj.category?.name || null;
  delete obj.category; 
  return obj;
};

export const createProduct = catchAsync(async (req, res) => {
  const product = await Product.create(req.body).then(p => p.populate('category'));
  res.formattedSuccess(productDetails(product), 201);
});

export const getProducts = catchAsync(async (req, res) => {
  const products = await Product.find().populate('category');
  const formatted = products.map(productDetails);
  res.formattedSuccess(formatted);
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