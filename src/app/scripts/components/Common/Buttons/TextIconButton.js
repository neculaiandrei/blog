import React from 'react';
import IconButton from './IconButton';

const TextIconButton = props => (
  <IconButton
    className={props.className}
    iconClassName={props.iconClassName}
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
  onClick: React.PropTypes.func,
  children: React.PropTypes.node,
};

export default TextIconButton;
