import React from 'react';
import { Route } from 'react-router';
import AdminApp from './components/Admin/App';
import ManagePosts from './components/Admin/ManagePosts';
import AdminEditPost from './components/Admin/EditPost';
import AdminAddPost from './components/Admin/AddPost';

const Routes = (
  <Route path="/admin" component={AdminApp}>
    <Route path="/admin/posts" component={ManagePosts} />
    <Route path="/admin/addPost" component={AdminAddPost} />
    <Route path="/admin/post/:id" component={AdminEditPost} />
  </Route>
);

export default Routes;
