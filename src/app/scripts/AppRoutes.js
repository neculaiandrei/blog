import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './components/App';
import PostList from './components/Post/PostList';
import FullPost from './components/Post/FullPost';

const Routes = (
  <Route path="/" component={App}>
    <IndexRedirect to="/posts" />
    <Route path="/posts" component={PostList} />
    <Route path="/posts/:tag" component={PostList} />
    <Route path="/post/:slug" component={FullPost} />
  </Route>
);

export default Routes;
