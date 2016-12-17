import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from './Common/HeaderContainer';
import ThemeSelector from './Common/ThemeSelector';

const Header = () => (
  <HeaderContainer>
    <div className="blog-header__brandname">
      <Link to="/"><strong>Joi</strong> Dimineața</Link>
    </div>
    <div className="blog-header__meta">
      Un blog destul de mic.
    </div>
    <ThemeSelector />
  </HeaderContainer>
);

export default Header;
