import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from '../Common/HeaderContainer';

const Header = () => (
  <HeaderContainer>
    <div className="blog-header__brandname">
      <Link to="/"><strong>Joi</strong> Dimineața</Link>
      |
      <Link to="/admin/posts">Admin</Link>
    </div>
    <div className="blog-header__meta">
      Un blog destul de mic.
    </div>
  </HeaderContainer>
);

export default Header;
