import React from 'react';
import classNames from 'classnames';

const Label = (props) => {
  const labelClass = classNames(
    'blog-label',
    {
      'blog-label--aligned-top': props.verticalAlign,
    },
  );

  return (
    <label
      className={labelClass}
      htmlFor={props.name}
    >
      {props.children}
    </label>
  );
};

Label.defaultProps = {
  verticalAlign: false,
};

Label.propTypes = {
  name: React.PropTypes.string,
  children: React.PropTypes.string,
  verticalAlign: React.PropTypes.bool,
};

export default Label;
