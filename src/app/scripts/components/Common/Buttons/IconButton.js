import React from 'react';
import classNames from 'classnames';

const IconButton = (props) => {
  return (
    <button
      className={classNames('blog-icon-button', props.className)}
      style={props.style}
      disabled={props.disabled}
      onClick={props.onClick}
      value={props.value}
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
  value: React.PropTypes.string,
  children: React.PropTypes.node,
  style: React.PropTypes.object, //eslint-disable-line react/forbid-prop-types
};

export default IconButton;
