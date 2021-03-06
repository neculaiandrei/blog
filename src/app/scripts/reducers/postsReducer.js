import InitialState from './initialState';
import * as type from '../actions/actionTypes';

export default function postsReducer(state = InitialState.posts, action) {
  switch (action.type) {
    case type.CREATE_POST_SUCCESS:
      return [...state, Object.assign({}, action.post)];
    case type.EDIT_POST_SUCCESS: {
      const postIndex = state.findIndex(post => post._id === action.post._id);
      return [
        ...state.slice(0, postIndex),
        Object.assign({}, action.post),
        ...state.slice(postIndex + 1),
      ];
    }
    case type.DELETE_POST_SUCCESS:
      return [...state.filter(post => post._id !== action.post._id)];
    case type.LOAD_POSTS_SUCCESS:
      return action.posts;
    default:
      return state;
  }
}
