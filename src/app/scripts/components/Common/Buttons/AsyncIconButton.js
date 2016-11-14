import React from 'react';
import IconButton from './IconButton';

const AsyncIconButton = (props) => {
  const iconClassName = props.pending ? 'fa fa-circle-o-notch fa-spin fa-fw' : props.iconClassName;

  return (
    <IconButton
      className={props.className}
      iconClassName={iconClassName}
      disabled={props.pending}
      onClick={props.onClick}
    />
  );
};

AsyncIconButton.propTypes = {
  className: React.PropTypes.string,
  iconClassName: React.PropTypes.string,
  onClick: React.PropTypes.func,
  pending: React.PropTypes.bool,
};

export default AsyncIconButton;
