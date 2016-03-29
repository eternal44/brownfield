import User from '../db/models/userModel';
import { isEmpty } from 'lodash';

export default {
  // two separate get requests
  // first one: send user id and get back all info
  userGetUserId: ({params: { userId }}, res, next) => {
    User.getUserInfoByUserId(userId)
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        next(err);
      });
  },
  
  // second one: no parameters and get back every single user. probably won't use this often.
  userGetNoParams: ({}, res, next) => {
    User.getAllUsers()
      .then(allUserData => {
        res.json(allUserData);
      })
      .catch(err => {
        next(err);
      });
  },
  
  userPost: ({body: { email, name }}, res, next) => {
    if (email && name) {
      User.createUser(email, name)
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
  
  userPut: ({params: { userId }, body }, res, next) => {
    // using lodash to see if the update object is empty
    if (!isEmpty(body) && userId) {
      User.updateUser(userId, body)
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
  
  userDelete: ({params: { userId }}, res, next) => {
    if (userId) {
      User.deleteUser(userId)
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