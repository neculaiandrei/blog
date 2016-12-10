import React from 'react';
import TextIconButton from './TextIconButton';

const AsyncTextIconButton = (props) => {
  const text = props.pending ? props.pendingText : props.children;
  const iconClassName = props.pending ? 'fa fa-circle-o-notch fa-spin fa-fw' : props.iconClassName;
  const textIconClassName = props.pending ? 'blog-text-icon-button--o' : '';

  return (
    <TextIconButton
      className={textIconClassName}
      iconClassName={iconClassName}
      disabled={props.pending}
      onClick={props.onClick}
    >
      {text}
    </TextIconButton>
  );
};

AsyncTextIconButton.propTypes = {
  iconClassName: React.PropTypes.string,
  children: React.PropTypes.string,
  onClick: React.PropTypes.func,
  pending: React.PropTypes.bool,
  pendingText: React.PropTypes.string,
};

export default AsyncTextIconButton;
