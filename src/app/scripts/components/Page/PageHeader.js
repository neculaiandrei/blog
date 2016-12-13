import React from 'react';

const PageHeader = props => (
  <div className="blog-page__header">
    {props.children}
  </div>
);

PageHeader.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default PageHeader;
