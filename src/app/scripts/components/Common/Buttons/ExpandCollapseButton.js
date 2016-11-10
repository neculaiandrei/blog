import React from 'react';
import classNames from 'classnames';
import TextIconButton from './TextIconButton';

const ExpandCollapseButton = (props) => {
  const iconClass = classNames({
    'fa fa-arrow-circle-o-up': props.expanded,
    'fa fa-arrow-circle-o-down': !props.expanded,
  });

  return (
    <TextIconButton
      iconClassName={iconClass}
      onClick={props.onClick}
    >
      {props.children}
    </TextIconButton>
  );
};

ExpandCollapseButton.propTypes = {
  children: React.PropTypes.string,
  expanded: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func,
};

export default ExpandCollapseButton;
