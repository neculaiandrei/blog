import * as type from './actionTypes';
import postApi from '../../../api/mockPostApi';

const postsActions = {
  createPost: post => dispatch => postApi.save(post)
    .then((savedPost) => {
      dispatch(postsActions.createPostSuccess(savedPost));
    }).catch((error) => {
      throw error;
    }),

  createPostSuccess: post => ({
    type: type.CREATE_POST_SUCCESS,
    post,
    loading: false,
  }),

  editPost: post => dispatch => postApi.save(post)
    .then((savedPost) => {
      dispatch(postsActions.editPostSuccess(savedPost));
    }).catch((error) => {
      throw error;
    }),

  editPostSuccess: post => ({
    type: type.EDIT_POST_SUCCESS,
    post,
    loading: false,
  }),

  deletePost: post => dispatch => postApi.delete(post.id)
    .then(() => {
      dispatch(postsActions.deletePostSuccess(post));
    }).catch((error) => {
      throw error;
    }),

  deletePostSuccess: post => ({
    type: type.DELETE_POST_SUCCESS,
    post,
    loading: false,
  }),

  loadPosts: () => dispatch => postApi.getAll()
    .then((posts) => {
      dispatch(postsActions.loadPostsSuccess(posts));
    }).catch((error) => {
      throw error;
    }),

  loadPostsSuccess: posts => ({
    type: type.LOAD_POSTS_SUCCESS,
    posts,
    loading: false,
  }),
};

export default postsActions;