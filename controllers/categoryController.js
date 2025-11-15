import category from '../models/category.js';
import { catchAsync } from '../utils/utils.js';

export const createCategory = catchAsync(async (req, res) => {
  const category = await Category.create(req.body);
  res.formattedSuccess(categories, 201);
});

export const getCategories = catchAsync(async (req, res) => {
  const categories = await category.find();
  res.formattedSuccess(categories);
  // res.json({ success: true, count: categories.length, data: categories });
});