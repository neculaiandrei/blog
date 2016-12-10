import React from 'react';
import ReusableTextInput from './ReusableTextInput';

class TextInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.props.onChange(name, value);
  }

  handleFocus() {
    this.setState({ active: true });
  }

  handleBlur() {
    this.setState({ active: false });
  }

  render() {
    return (
      <ReusableTextInput
        name={this.props.name}
        active={this.state.active}
        text={this.props.text}
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
      />
    );
  }
}

TextInput.propTypes = {
  name: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func,
};

export default TextInput;
