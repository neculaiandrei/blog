import React from 'react';
import classNames from 'classnames';

const IconButton = props => (
  <button
    className={classNames('blog-icon-button ', props.className)}
    onClick={props.onClick}
  >
    <i className={props.iconClassName} />
    {props.children}
  </button>
);

IconButton.propTypes = {
  className: React.PropTypes.string,
  iconClassName: React.PropTypes.string,
  onClick: React.PropTypes.func,
  children: React.PropTypes.node,
};

export default IconButton;
