import db from '../db';

export default {
  // db query to create a user
  createUser: () => {
    let query = `create`;
    db.query(query)
      .map()
      .suscribe();
  },
  // db query to update a user
  updateUser: () => {
    
  },
  // db query to get user information
  getUserInfo: (userId) => {
    let queryString = `select * from users on user.id=${userId}`;
    
    db.query(queryString)
      .map()
      .subscribe();
  },
  // db query to delete a user
  deleteUser: () => {

  },
  getAllUsers: () => {
    let query = 'select * from users;';
    db.query(query)
      .map()
      .subscribe();
  }
}