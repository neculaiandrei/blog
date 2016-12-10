import React from 'react';
import classNames from 'classnames';
import Markdown from 'react-markdown';
import ExpandCollapseButton from '../Buttons/ExpandCollapseButton';

class MarkdownInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      previewExpanded: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleTogglePreview = this.handleTogglePreview.bind(this);
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

  handleTogglePreview() {
    this.setState({ previewExpanded: !this.state.previewExpanded });
  }

  render() {
    const textInputClass = classNames(
      'blog-textarea-input',
      {
        'blog-textarea-input--active': this.state.active,
      });

    const preview = this.state.previewExpanded ? (
      <Markdown
        className="blog-textarea-input__preview"
        source={this.props.text}
      />) : undefined;

    return (
      <div className={textInputClass}>
        <textarea
          name={this.props.name}
          value={this.props.text}
          placeholder={this.props.placeholder}
          spellCheck={false}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        <div className="blog-textarea-input__toggle-preview">
          <ExpandCollapseButton
            expanded={this.state.previewExpanded}
            onClick={this.handleTogglePreview}
          >
            {this.state.previewExpanded ? 'Arată Preview' : 'Ascunde Preview'}
          </ExpandCollapseButton>
        </div>
        {preview}
      </div>
    );
  }
}

MarkdownInput.propTypes = {
  name: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string,
  onChange: React.PropTypes.func,
};

MarkdownInput.defaultProps = {
  placeholder: '',
};

export default MarkdownInput;
