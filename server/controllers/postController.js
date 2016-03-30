import Post from '../db/models/postModel';
import { isEmpty } from 'lodash';

export default {
  // function that gets back all posts to populate dashboard
  dashboardPostsGet: ({}, res, next) => {
    Post.getDashboardPosts()
      .then(dashPosts => {
        res.json(dashPosts);
      })
      .catch(err => {
        next(err);
      });
  },
  
  // gets back all posts by 1 specific user
  userPostsGet: ({params: { userId }}, res, next) => {
    if (userId) {
      Post.getUserPosts(userId)
        .then(userPosts => {
          res.json(userPosts);
        })
        .catch(err => {
          next(err);
        });
    } else {
      next(new Error('must send user id'));
    }
  },
  
  // creates post
  postPost: ({body, body: { userId, photo, itemName, itemType, comment }}, res, next) => {
    if (!isEmpty(body)) {
      Post.createPost(userId, photo, itemName, itemType, comment)
        .then(createdPost => {
          res.json(createdPost);
        })
        .catch(err => {
          next(err);
        });
    } else {
      next(new Error('must send information to post'));
    }
  },
  
  // updates one specific post
  postUpdate: ({body, params: { postId }}, res, next) => {
    if (!isEmpty(body) && postId) {
      Post.updatePost(postId, body)
        .then(updatedPost => {
          res.json(updatedPost);
        })
        .catch(err => {
          next(err);
        });
    } else {
      next(new Error('must send the post id and/or the object with keys/values you would like to update'));
    }
  },
 
 // deletes one specific post
  postDelete: ({params: { postId }}, res, next) => {
    if (postId) {
      Post.deletePost(postId)
        .then(deletedPost => {
          res.json(deletedPost);
        })
        .catch(err => {
          next(err);
        });
    } else {
      next(new Error('you must pass in the post id you would to delete'));
    }
  }
}