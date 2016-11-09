import React from 'react';
import classNames from 'classnames';

const ReusableTextInput = (props) => {
  const textInputClass = classNames(
    'blog-text-input',
    {
      'blog-text-input--active': props.active,
    });

  return (
    <div className={textInputClass}>
      <input
        type="text"
        name={props.name}
        value={props.text}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      />
    </div>
  );
};

ReusableTextInput.propTypes = {
  active: React.PropTypes.bool,
  name: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string,
  onChange: React.PropTypes.func,
  onBlur: React.PropTypes.func,
  onFocus: React.PropTypes.func,
};

ReusableTextInput.defaultProps = {
  placeholder: '',
  active: false,
};

export default ReusableTextInput;
