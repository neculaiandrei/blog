import React from 'react';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.checked;

    this.props.onChange(name, value);
  }

  render() {
    return (
      <div className="blog-checkbox">
        <input
          type="checkbox"
          name={this.props.name}
          checked={this.props.checked}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

Checkbox.propTypes = {
  name: React.PropTypes.string.isRequired,
  checked: React.PropTypes.bool.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default Checkbox;
