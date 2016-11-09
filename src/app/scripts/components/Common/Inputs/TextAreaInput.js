import React from 'react';
import classNames from 'classnames';
import Markdown from 'react-markdown';

class TextAreaInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleFocus() {
    this.setState({ active: true });
  }

  handleBlur() {
    this.setState({ active: false });
  }

  render() {
    const textInputClass = classNames(
      'blog-textarea-input',
      {
        'blog-textarea-input--active': this.state.active,
      });

    return (
      <div className={textInputClass}>
        <textarea
          active={this.state.active}
          name={this.props.name}
          value={this.props.text}
          placeholder={this.props.placeholder}
          spellCheck={false}
          onChange={this.props.onChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        <Markdown
          className="blog-textarea-input__preview"
          source={this.props.text}
        />
      </div>
    );
  }
}

TextAreaInput.propTypes = {
  name: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string,
  onChange: React.PropTypes.func,
};

TextAreaInput.defaultProps = {
  placeholder: '',
};

export default TextAreaInput;
