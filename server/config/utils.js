import { reduce, findLastKey } from 'lodash'; 

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

// this is a function to take an object and then create string that i can use in the querystring for any put requests
export const createUpdateString = updateObj => {
  return reduce(updateObj, (result, value, key, object) => {
    if (key === findLastKey(object)) {
      return `${result}${key}='${value}'`;
    } else {
      return `${result}${key}='${value}',`
    }   
  }, '');
}
