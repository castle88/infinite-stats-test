function errorHandler(err, req, res, next) {
  res.status(res.statusCode || 500).json({
    success: false,
    message: err.message,
    stack: err.stack,
  });
}

module.exports = errorHandler;
