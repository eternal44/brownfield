import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
// import ActivePost from './reducer_active_post';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  posts: PostsReducer
});

export default rootReducer;