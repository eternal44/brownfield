import axios from 'axios';

// dev setup for react dev server
const API_URI = window.location.origin === 'http://localhost:4001' ? 'http://localhost:4000' : '';

// export const POST_SELECTED = 'POST_SELECTED';

// post action types
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_USER_POSTS = 'FETCH_USER_POST';
export const CREATE_POST = 'CREATE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';

// user action types
export const FETCH_USER = 'FETCH_USER';
export const FETCH_USERS = 'FETCH_USERS';
export const CREATE_USER = 'CREATE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';

// vote action types
export const FETCH_POSTS_VOTES = 'FETCH_POSTS_VOTES';
export const FETCH_USERS_VOTES = 'FETCH_USERS_VOTES';
export const CREATE_VOTE = 'CREATE_VOTE';
export const UPDATE_VOTE = 'UPDATE_VOTE';
export const DELETE_VOTE = 'DELETE_VOTE';

// export function selectPost(post) {
//   // console.log('A post has been selected: ', post.title);
//   // selectPost is an ActionCreator, it needs to return an action, an object with a type property
//   return {
//     type: 'POST_SELECTED',
//     payload: post
//   };
// }

// user action functions

export function fetchPosts() {
  const request = axios.get(`${API_URI}/api/posts`);
  
  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost(props) {
  const request = axios.post(`${API_URI}/api/posts`, props);
  
  return {
    type: CREATE_POST,
    payload: request
  }
}

export function fetchUserPosts(userId) {
  const request = axios.get(`${API_URI}/api/posts/${userId}`);
  
  return {
    type: FETCH_USER_POSTS,
    payload: request
  }
}

export function updatePost(postId, props) {
  const request = axios.put(`${API_URI}/api/posts/${postId}`, props);
  
  return {
    type: UPDATE_POST,
    payload: request
  }
}

export function deletePost(postId) {
  const request = axios.delete(`${API_URI}/api/posts/${postId}`);
  
  return {
    type: DELETE_POST,
    payload: request
  }
}

// user action functions

export function fetchUser(userId) {
  const request = axios.get(`${API_URI}/api/users/${userId}`);
  
  return {
    type: FETCH_USER,
    payload: request
  }
}

export function fetchUsers() {
  const request = axios.get(`${API_URI}/api/users`);
  
  return {
    type: FETCH_USERS,
    payload: request
  }
}

export function createUser(props) {
  const request = axios.post(`${API_URI}/api/users`, props);
  
  return {
    type: CREATE_USER,
    payload: request
  }
}

export function updateUser(userId, props) {
  const request = axios.put(`${API_URI}/api/users/${userId}`, props);
  
  return {
    type: UPDATE_USER,
    payload: request
  }
}

export function deleteUser(userId) {
  const request = axios.delete(`${API_URI}/api/users/${userId}`);
  
  return {
    type: DELETE_USER,
    payload: request
  }
}

// vote action functions

export function fetchPostsVotes(postId) {
  const request = axios.get(`${API_URI}/api/votes/post/${postId}`);
  
  return {
    type: FETCH_POSTS_VOTES,
    payload: request
  }
}

export function fetchUsersVotes(userId) {
  const request = axios.get(`${API_URI}/api/votes/user/${userId}`);
  
  return {
    type: FETCH_USERS_VOTES,
    payload: request
  }
}

export function createVote(props) {
  const request = axios.post(`${API_URI}/api/votes`, props);
  
  return {
    type: CREATE_VOTE,
    payload: request
  }
}

export function updateVote(props) {
  const request = axios.put(`${API_URI}/api/votes`, props);
  
  return {
    type: UPDATE_VOTE,
    payload: request
  }
}

export function deleteVote(props) {
  const request = axios.delete(`${API_URI}/api/votes`, props);
  
  return {
    type: DELETE_VOTE,
    payload: request
  }
}