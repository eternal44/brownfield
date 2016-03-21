export const errorHandler = (err, req, res) => {
  res.status(500).send({
    error: err.message
  });
};

export const logError = (err, req, res, next) => {
  console.error(err.stack);
  next(err);
}