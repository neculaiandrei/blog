import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Router from './router';

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

window.onload = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router />
    </Provider>,
    document.querySelector('#main')
  );
};
