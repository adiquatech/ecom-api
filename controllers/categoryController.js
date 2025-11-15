import Category from '../models/category.js';
import { catchAsync } from '../utils/catchAsync.js';

export const createCategory = catchAsync(async (req, res) => {
  const category = await Category.create(req.body);
  res.status(201).json({ success: true, data: category });
});

export const getCategories = catchAsync(async (req, res) => {
  const categories = await Category.find();
  res.json({ success: true, count: categories.length, data: categories });
});