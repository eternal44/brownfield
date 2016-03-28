import db from '../db';
import Promise from 'bluebird';
import { createUpdateString } from '../../config/utils';

export default {
  // db query for a user to create a post
  createPost: (userId, photo, itemName, itemType, comment) => {
    return new Promise((resolve, reject) => {
      let queryString = `insert into posts (userId, photo, item_name, item_type, comment) values (${userId}, ${photo}, ${itemName}, ${itemType}, ${comment}) returning *`;
      
      db.query(queryString)
        .map(createdPost => {
          return createdPost.rows[0];
        })
        .subscribe(createdPost => {
          resolve(createdPost);
        },
        err => {
          reject(err);
        });
    });
  },
  // db query for a user to update their post
  updatePost: (postId, updateObj) => {
    return new Promise((resolve, reject) => {
      let updateString = createUpdateString(updateObj);
      
      let queryString = `update posts set ${updateString} where id=${postId} returning *`;
      
      db.query(queryString)
        .map(updatedPost => {
          if (updatedPost.rowCount) {
            return updatePost.rows[0];
          } else {
            reject(new Error('post does not exist or could not be updated'));
          }
        }) 
        .subscribe(updatedPost => {
          resolve(updatedPost);
        },
        err => {
          reject(err);
        });
    });

  },
  // db query for a user to delete their post
  deletePost: (postId) => {
    return new Promise((resolve, reject) => {
      let queryString = `delete from posts where id=${postId} returning *`;
      
      db.query(queryString)
        .map(deletedPost => {
          if (deletedPost.rowCount) {
            return deletedPost.rows[0];
          } else {
            reject(new Error('the post doesnt exist or could not be deleted'));
          }
        })
        .subscribe(deletedPost => {
          resolve(deletedPost);
        },
        err => {
          reject(err);
        }); 
    });
  },
  // db query to get back all posts by a certain user
  // can be used for user profiles and user posts history
  getUserPosts: (userId) => {
    return new Promise((resolve, reject) => {
      // query is not tested yet but should work in theory.
      let queryString = `select * from posts left join users on posts.userID=users.id where users.id=${userId};`;
      
      db.query(queryString)
        .map(userPosts => {
          if (userPosts.rowCount) {
            return userPosts.rows;
          } else {
            reject(new Error('user does not have any posts'));
          }
        })
        .subscribe(userPosts => {
          resolve(userPosts);
        },
        err => {
          reject(err);
        });
    });

  },
  // db query to get back all posts for your dashboard
  getDashboardPosts: () => {
    return new Promise((resolve, reject) => {
      // for mvp just getting all posts in the database
      let queryString = `select * from posts;`;
      
      db.query(queryString)
        .map(dashPosts => {
          if (userPosts.rowCount) {
            return userPosts.rows;
          } else {
            reject(new Error('could not fetch posts for the dashboard'));
          }
        })
        .subscribe(dashPosts => {
          resolve(dashPosts);
        },
        err => {
          reject(err);
        });
    });
  }
}