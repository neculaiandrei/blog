import InitialState from './initialState';
import * as type from '../actions/actionTypes';

export default function postReducer(state = InitialState.posts, action) {
  switch (action.type) {
    case type.CREATE_POST:
      return [...state, Object.assign({}, action.post)];
    case type.EDIT_POST:
      return [
        ...state.filter(post => post.id !== action.post.id),
        Object.assign({}, action.post),
      ];
    case type.DELETE_POST:
      return [...state.filter(post => post.id !== action.post.id)];
    default:
      return state;
  }
}
