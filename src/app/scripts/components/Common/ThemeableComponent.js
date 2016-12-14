import React from 'react';
import classNames from 'classnames';

const ThemeableComponent = (props) => {
  let themeClass;

  if (props.theme === 'light') {
    themeClass = `${props.baseClassName}--light-theme`;
  } else if (props.theme === 'grey') {
    themeClass = `${props.baseClassName}--grey-theme`;
  } else if (props.theme === 'dark') {
    themeClass = `${props.baseClassName}--dark-theme`;
  }

  return (
    <div className={classNames(props.className, themeClass)}>
      {props.children}
    </div>
  );
};

ThemeableComponent.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.node,
  baseClassName: React.PropTypes.string.isRequired,
  theme: React.PropTypes.string.isRequired,
};

export default ThemeableComponent;
