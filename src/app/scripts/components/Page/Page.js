import React from 'react';
import classNames from 'classnames';

const Page = props => (
  <div className={classNames('blog-page', props.className)}>
    {props.children}
  </div>
);

Page.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
};

export default Page;
