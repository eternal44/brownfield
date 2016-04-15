import { FETCH_POSTS, FETCH_USER_POSTS, CREATE_POST, UPDATE_POST, DELETE_POST } from '../actions/index';

const INITIAL_STATE = { all: [] };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_POSTS:
      return { all: action.payload.data };
    
    default:
      return state;
  }
}