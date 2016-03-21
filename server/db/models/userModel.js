import db from '../db';
import Promise from 'bluebird';

export default {
  // db query to create a user
  // will update according to firebase/fb oauth parameters
  // current schema only has email and name
  createUser: (email, name) => {
    return new Promise((resolve, reject) => {
      let queryString = `insert into users (email, name) values ('${email}', '${name}');`;
      
      db.query(queryString)
        .subscribe(createdUser => {
          resolve(createdUser);
        },
        err => {
          console.error(err);
        });
    });
  },
  
  // db query to update a user need to go throught req.body and get all the parameters we need to update
  updateUser: (updateObj) => {
     
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
          console.error(err);
        });
    })
  },
  
  // db query to delete a user
  deleteUser: (userId) => {
    return new Promise((resolve, reject) => {
      let queryString = `delete from users where id=${userId};`
      
      db.query(queryString)
        .subscribe(deletedUser => {
          resolve(deletedUser);
        },
        err => {
          console.error(err);
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
          console.error(err);
        });
    });
  }
}