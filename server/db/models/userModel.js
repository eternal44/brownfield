import db from '../db';
import Promise from 'bluebird';
import { createUpdateString } from '../../config/utils';

export default {
  // db query to create a user
  // will update according to firebase/fb oauth parameters
  // current schema only has email and name
  createUser: (email, name) => {
    return new Promise((resolve, reject) => {
      let queryString = `insert into users (email, name) values ('${email}', '${name}') returning *;`;
      
      db.query(queryString)
        .map(createdUser => {
          return createdUser.rows[0];
        })
        .subscribe(createdUser => {
          resolve(createdUser);
        },
        err => {
          reject(err);
        });
    });
  },
  
  // db query to update a user need to go throught req.body and get all the parameters we need to update
  updateUser: (userId, updateObj) => {
    return new Promise((resolve, reject) => {
      let updateString = createUpdateString(updateObj);
      
      let queryString = `update users set ${updateString} where id=${userId} returning *;`;
      
      db.query(queryString)
        .map(updatedUser => {
          return updatedUser.rows[0];
        })
        .subscribe(updatedUser => {
        resolve(updatedUser);
        },
        err => {
          reject(err);
        });
    });
  },
  
  // db query to get user information
  getUserInfoByUserId: (userId) => {
    return new Promise((resolve, reject) => {
      let queryString = `select * from users where id=${userId};`;
      
      db.query(queryString)
        .map(data => {
          return data.rows[0];
        })
        .subscribe(data => {
          resolve(data);
        },
        err => {
          reject(err);
        });
    })
  },
  
  // db query to delete a user
  deleteUser: (userId) => {
    return new Promise((resolve, reject) => {
      let queryString = `delete from users where id=${userId} returning *;`
      
      db.query(queryString)
        .map(deletedUser => {
          return deletedUser.rows[0];
        })
        .subscribe(deletedUser => {
          resolve(deletedUser);
        },
        err => {
          reject(err);
        });
    });
  },
  
  getAllUsers: () => {
    return new Promise((resolve, reject) => {
      let queryString = `select * from users;`;
      
      db.query(queryString)
        .map(data => {
          return data.rows;
        })
        .subscribe(allUserData => {
          resolve(allUserData);
        },
        err => {
          reject(err);
        });
    });
  }
}