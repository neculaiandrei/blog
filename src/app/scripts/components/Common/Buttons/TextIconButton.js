import React from 'react';
import IconButton from './IconButton';

const TextIconButton = props => (
  <IconButton
    className={props.className}
    iconClassName={props.iconClassName}
    disabled={props.disabled}
    onClick={props.onClick}
  >
    <span>
      &nbsp;
      <span className="blog-icon-button__separator" />
      &nbsp;
      {props.children}
    </span>
  </IconButton>
);

TextIconButton.propTypes = {
  className: React.PropTypes.string,
  iconClassName: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  children: React.PropTypes.node,
};

export default TextIconButton;
