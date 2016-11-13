import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import postsActions from './actions/postsActions';
import Routes from './routes';

const store = configureStore();
store.dispatch(postsActions.loadPosts());

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.querySelector('.app')
);
