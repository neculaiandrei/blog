import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from '../Common/HeaderContainer';

const App = props => (
  <div>
    <HeaderContainer>
      <div className="blog-header__brandname">
        <Link to="/"><em>Joi</em> Dimineata</Link>
        |
        <Link to="/admin/posts">Admin</Link>
      </div>
    </HeaderContainer>
    <div className="blog-admin-content">
      {props.children}
    </div>
  </div>
);

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
