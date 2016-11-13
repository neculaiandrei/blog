import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from '../Common/HeaderContainer';

const Header = () => (
  <HeaderContainer>
    <div className="blog-header__brandname">
      <Link to="/"><em>Joi</em> Dimineata</Link>
      |
      <Link to="/admin/posts">Admin</Link>
    </div>
    <div className="blog-header__meta">
      Nu te ia nimeni in serios atunci cand vorbesti de boala ta.
    </div>
  </HeaderContainer>
);

export default Header;
