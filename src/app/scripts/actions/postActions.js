import * as type from './actionTypes';
import postApi from '../../../api/mockPostApi';

const postActions = {
  createPost: post => dispatch => postApi.save(post)
    .then((savedPost) => {
      dispatch(postActions.createPostSuccess(savedPost));
    }).catch((error) => {
      throw error;
    }),

  createPostSuccess: post => ({
    type: type.CREATE_POST_SUCCESS,
    post,
  }),

  editPost: post => dispatch => postApi.save(post)
    .then((savedPost) => {
      dispatch(postActions.editPostSuccess(savedPost));
    }).catch((error) => {
      throw error;
    }),

  editPostSuccess: post => ({
    type: type.EDIT_POST_SUCCESS,
    post,
  }),

  deletePost: post => dispatch => postApi.delete(post.id)
    .then(() => {
      dispatch(postActions.deletePostSuccess(post));
    }).catch((error) => {
      throw error;
    }),

  deletePostSuccess: post => ({
    type: type.DELETE_POST_SUCCESS,
    post,
  }),

  loadPosts: () => dispatch => postApi.getAll()
    .then((posts) => {
      dispatch(postActions.loadPostsSuccess(posts));
    }).catch((error) => {
      throw error;
    }),

  loadPostsSuccess: posts => ({
    type: type.LOAD_POSTS_SUCCESS,
    posts,
  }),
};

export default postActions;
