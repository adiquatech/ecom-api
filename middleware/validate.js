import { body, validationResult } from 'express-validator';

export const validateProduct = [
  body('name').trim().isLength({ min: 3 }).withMessage('Name ≥ 3 chars'),
  body('description')
    .trim()
    .isLength({ min: 10 })
    .withMessage('Description too short'),
  body('price').isFloat({ min: 0 }).withMessage('Price ≥ 0'),
  body('stock').isInt({ min: 0 }).withMessage('Stock ≥ 0'),
  body('category').isMongoId().withMessage('Valid category ID required'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export const validateCategory = [
  body('name').trim().isLength({ min: 2 }).withMessage('Name ≥ 2 chars'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
