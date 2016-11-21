import 'whatwg-fetch';
import * as type from './actionTypes';

const postsActions = {
  createPost: post => dispatch =>
    fetch('http://localhost:11921/api/posts', {
      method: 'post',
      body: JSON.stringify(post),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      response.json()
        .then(savedPost => dispatch(postsActions.createPostSuccess(savedPost)));
    }).catch((error) => {
      throw error;
    }),

  createPostSuccess: post => ({
    type: type.CREATE_POST_SUCCESS,
    post,
  }),

  editPost: post => dispatch =>
    fetch(`http://localhost:11921/api/posts/${post._id}`, {
      method: 'put',
      body: JSON.stringify(post),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      response.json()
        .then(savedPost => dispatch(postsActions.editPostSuccess(savedPost)));
    }).catch((error) => {
      throw error;
    }),

  editPostSuccess: post => ({
    type: type.EDIT_POST_SUCCESS,
    post,
  }),

  deletePost: post => dispatch =>
    fetch(`http://localhost:11921/api/posts/${post._id}`, {
      method: 'delete',
      body: JSON.stringify(post),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(() => {
      dispatch(postsActions.deletePostSuccess(post));
    }).catch((error) => {
      throw error;
    }),

  deletePostSuccess: post => ({
    type: type.DELETE_POST_SUCCESS,
    post,
  }),

  loadPosts: () => dispatch =>
    fetch('http://localhost:11921/api/posts', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      response.json()
        .then(posts => dispatch(postsActions.loadPostsSuccess(posts)));
    }).catch((error) => {
      throw error;
    }),

  loadPostsSuccess: posts => ({
    type: type.LOAD_POSTS_SUCCESS,
    posts,
  }),
};

export default postsActions;
