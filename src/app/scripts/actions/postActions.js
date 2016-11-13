import * as type from './actionTypes';

const postActions = {
  createPost: post => ({
    type: type.CREATE_POST,
    post,
  }),
  editPost: post => ({
    type: type.EDIT_POST,
    post,
  }),
  deletePost: post => ({
    type: type.DELETE_POST,
    post,
  }),
};

export default postActions;
