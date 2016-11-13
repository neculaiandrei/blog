import InitialState from './initialState';
import * as type from '../actions/actionTypes';

export default function loadingReducer(state = InitialState.loading, action) {
  switch (action.type) {
    case type.LOAD_POSTS_SUCCESS:
      return false;
    default:
      return state;
  }
}
