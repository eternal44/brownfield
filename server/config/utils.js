import {} from 'lodash'; 

export const errorHandler = (err, req, res, next) => {
  res.status(500).send({
    error: err.message
  });
  // console.log(res);
};

export const logError = (err, req, res, next) => {
  console.error(err.stack);
  next(err);
}

export const createUpdateString = updateObj {
  
}