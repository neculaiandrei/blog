import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import App from './components/App';
import PostList from './components/Post/PostList';
import FullPost from './components/Post/FullPost';
import AdminApp from './components/Admin/App';
import ManagePosts from './components/Admin/ManagePosts';
import AdminEditPost from './components/Admin/EditPost';
import AdminAddPost from './components/Admin/AddPost';

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/admin" component={AdminApp}>
      <Route path="/admin/posts" component={ManagePosts} />
      <Route path="/admin/addPost" component={AdminAddPost} />
      <Route path="/admin/post/:id" component={AdminEditPost} />
    </Route>
    <Route path="/" component={App}>
      <IndexRedirect to="/posts" />
      <Route path="/posts" component={PostList} />
      <Route path="/post/:id" component={FullPost} />
    </Route>
  </Router>
);

export default Routes;
