import React from 'react';
import ReactTagsInput from 'react-tagsinput';

class TagsInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    const name = this.props.name;

    this.props.onChange(name, value);
  }

  render() {
    return (
      <div className="blog-tags-input">
        <ReactTagsInput
          name={this.props.name}
          value={this.props.tags}
          onChange={this.handleChange}
          maxTags={5}
        />
      </div>
    );
  }
}

TagsInput.propTypes = {
  name: React.PropTypes.string.isRequired,
  tags: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default TagsInput;
