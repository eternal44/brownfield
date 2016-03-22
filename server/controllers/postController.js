import Post from '../db/models/postModel';
import { isEmpty } from 'lodash';

export default {
  // function that gets back all posts to populate dashboard
  dashboardPostsGet: (req, res, next) => {
    Post.getDashboardPosts()
      .then(dashPosts => {
        res.json(dashPosts);
      })
      .catch(err => {
        next(err);
      });
  },
  
  // gets back all posts by 1 specific user
  userPostsGet: (req, res, next) => {
    if (req.params.userId) {
      Post.getUserPosts(req.params.userId)
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
  postPost: (req, res, next) => {
    if (!isEmpty(req.body)) {
      Post.createPost(req.body.userId, req.body.photo, req.body.itemName, req.body.itemType, req.body.comment)
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
  postUpdate: (req, res, next) => {
    if (!isEmpty(req.body) && req.params.postId) {
      Post.updatePost(req.params.postId, req.body)
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
  postDelete: (req, res, next) => {
    if (req.params.postId) {
      Post.deletePost(req.params.postId)
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