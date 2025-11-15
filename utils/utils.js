// utils/utils.js
import { validationResult } from 'express-validator';

// Date and Time format
export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    timeZone: 'Africa/Lagos' // WAT
  }).format(new Date(date));
};

// Async error
export const catchAsync = (fn) => (req, res, next) => {
  fn(req, res, next).catch(next);
};

// Response error 
const formatItem = (item) => {
  if (!item || typeof item !== 'object') return item;
  const obj = item.toObject ? item.toObject() : { ...item };
  if (obj.createdAt) obj.createdAt = formatDate(obj.createdAt);
  if (obj.updatedAt) obj.updatedAt = formatDate(obj.updatedAt);
  return obj;
};

export const attachResponseHelpers = (req, res, next) => {
  res.formattedSuccess = (data, status = 200) => {
    const formatted = Array.isArray(data)
      ? data.map(formatItem)
      : formatItem(data);

    res.status(status).json({
      success: true,
      data: formatted
    });
  };
  next();
};

// Not found error
export const notFound = (modelName = 'Resource') => {
  const error = new Error(`${modelName} not found`);
  error.status = 404;
  throw error;
};

export const validationError = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
};