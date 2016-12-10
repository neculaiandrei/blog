import React from 'react';

const Checkbox = props => (
  <div className="blog-checkbox">
    <input
      type="checkbox"
      name={props.name}
      checked={props.checked}
      onChange={props.onChange}
    />
  </div>
);

Checkbox.propTypes = {
  name: React.PropTypes.string.isRequired,
  checked: React.PropTypes.bool.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default Checkbox;
