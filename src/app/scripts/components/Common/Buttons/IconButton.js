import React from 'react';
import classNames from 'classnames';

const IconButton = (props) => {
  return (
    <button
      className={classNames('blog-icon-button', props.className)}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      <i className={props.iconClassName} />
      {props.children}
    </button>
  );
};

IconButton.propTypes = {
  className: React.PropTypes.string,
  iconClassName: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  children: React.PropTypes.node,
};

export default IconButton;
