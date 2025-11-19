import category from '../models/category.js';
import { catchAsync } from '../utils/utils.js';

export const createCategory = catchAsync(async (req, res) => {
  const categories = await category.create(req.body);
  res.formattedSuccess(categories, 201);
});

export const getCategories = catchAsync(async (req, res) => {
  const categories = await category.find();
  res.formattedSuccess(categories);
  // res.json({ success: true, count: categories.length, data: categories });
});
export const getCategory = catchAsync(async (req, res) => {
  const categories = await category.findById(req.params.id);
  res.formattedSuccess(categories);
});

export const updateCategory = catchAsync(async (req, res) => {
  const categories = await category.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.formattedSuccess(categories);
});

export const deleteCategory = catchAsync(async (req, res) => {
  await category.findByIdAndDelete(req.params.id);
  res.formattedSuccess({});
});
