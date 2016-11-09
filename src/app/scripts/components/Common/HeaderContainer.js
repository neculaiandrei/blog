import React from 'react';

const HeaderContainer = props => (
  <div>
    <div className="blog-header">
      {props.children}
    </div>
  </div>
);

HeaderContainer.propTypes = {
  children: React.PropTypes.node,
};

export default HeaderContainer;
