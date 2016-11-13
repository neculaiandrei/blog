import { combineReducers } from 'redux';
import posts from './postsReducer';
import loading from './loadingReducer';

const rootReducer = combineReducers({
  posts,
  loading,
});

export default rootReducer;
