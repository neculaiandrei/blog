import React from 'react';
import { Router, browserHistory } from 'react-router';
import adminRoutes from './AdminRoutes';
import appRoutes from './AppRoutes';

const Routes = () => (
  <Router history={browserHistory}>
    {adminRoutes}
    {appRoutes}
  </Router>
);

export default Routes;
