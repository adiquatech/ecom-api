// utils/utils.js
import { validationResult } from 'express-validator';

// Date formatter (Time)
export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    timeZone: 'Africa/Lagos',
  }).format(new Date(date));
};

// Catch async errors
export const catchAsync = (fn) => (req, res, next) => {
  fn(req, res, next).catch(next);
};

// Format Mongoose documents
const formatItem = (item) => {
  if (!item || typeof item !== 'object') return item;
  const obj = item.toObject ? item.toObject() : { ...item };
  if (obj.createdAt) obj.createdAt = formatDate(obj.createdAt);
  if (obj.updatedAt) obj.updatedAt = formatDate(obj.updatedAt);
  return obj;
};

// Automatic success message generator
const getSuccessMessage = (method, data) => {
  if (!method) return 'Operation completed successfully';
  switch (method) {
    case 'GET':
      return Array.isArray(data)
        ? 'Data retrieved successfully'
        : 'Resource retrieved successfully';
    case 'POST':
      return 'Resource created successfully';
    case 'PUT':
    case 'PATCH':
      return 'Resource updated successfully';
    case 'DELETE':
      return 'Resource deleted successfully';
    default:
      return 'Operation completed successfully';
  }
};

// formattedSuccess
export const attachResponseHelpers = (req, res, next) => {
  res.formattedSuccess = (data, status = 200, overrideMessage = null) => {
    const formatted = Array.isArray(data)
      ? data.map(formatItem)
      : formatItem(data);

    const response = {
      success: true,
      message: overrideMessage || getSuccessMessage(req.method, data),
      // data: formatted || null,
    };

    // Add count for arrays
    if (Array.isArray(formatted)) {
      response.count = formatted.length;
    }
    response.data = formatted || null;

    res.status(status).json(response);
  };

  //
  res.formattedError = (error, status = 500) => {
    res.status(status).json({
      success: false,
      error: error.message || error,
    });
  };

  next();
};

// Not found helper
export const notFound = (modelName = 'Resource') => {
  const error = new Error(`${modelName} not found`);
  error.status = 404;
  throw error;
};

// Validation helper
export const validationError = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
};
