import User from '../db/models/userModel';
import { isEmpty } from 'lodash';

export default {
  // two separate get requests
  // first one: send user id and get back all info
  userGetUserId: (req, res, next) => {
    User.getUserInfoByUserId(req.params.userId)
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        next(err);
      });
  },
  
  // second one: no parameters and get back every single user. probably won't use this often.
  userGetNoParams: (req, res, next) => {
    User.getAllUsers()
      .then(allUserData => {
        res.json(allUserData);
      })
      .catch(err => {
        next(err);
      });
  },
  
  userPost: (req, res, next) => {
    if (req.body.email && req.body.name) {
      User.createUser(req.body.email, req.body.name)
        .then(createdUser => {
          res.json(createdUser);
        })
        .catch(err => {
          next(err);
        });     
     } else {
       next(new Error('must pass in email and name to create a user'));
     }
  },
  
  userPut: (req, res, next) => {
    // using lodash to see if the update object is empty
    if (!isEmpty(req.body) && req.params.userId) {
      User.updateUser(req.params.userId, req.body)
        .then(updatedUser => {
          res.json(updatedUser);
        })
        .catch(err => {
          next(err);
        })
    } else {
      next(new Error('Please send update parameters'));
    }
  },
  
  userDelete: (req, res, next) => {
    if (req.params.userId) {
      User.deleteUser(req.params.userId)
        .then(deletedUser => {
          res.json(deletedUser);
        })
        .catch(err => {
          next(err);
        });
    } else {
      next(new Error('Must pass in user id to delete a user')); 
    }
  }
}