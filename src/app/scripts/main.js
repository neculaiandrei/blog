import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import Mousetrap from 'mousetrap';
import configureStore from './store/configureStore';
import Router from './router';
import postsActions from './actions/postsActions';

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

if (initialState === undefined) {
  store.dispatch(postsActions.loadPosts());
}

window.onload = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router />
    </Provider>,
    document.querySelector('#main')
  );
};

Mousetrap.bind('ctrl+shift+a', () => {
  browserHistory.push('/admin/posts');
});
