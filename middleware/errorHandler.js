export const errorHandler = (err, req, res) => {
  console.error(err);

  if (err.name === 'ValidationError') {
    return res
      .status(400)
      .json({ error: Object.values(err.errors)[0].message });
  }
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    const value = err.keyValue[field];
    return res.status(400).json({
      error: `Duplicate field value: '${value}' for field '${field}'`,
    });
  }

  res.status(err.status || 500).json({
    error: err.message || 'Server Error',
  });
};
