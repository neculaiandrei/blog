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
    /* eslint-disable */
    const renderTag = (props) => {
      const { 
        tag,
        key,
        disabled,
        onRemove,
        classNameRemove, 
        getTagDisplayValue, ...other } = props;

      const component = (
        <span key={key} {...other}>
          {getTagDisplayValue(tag)}
          {(!disabled && this.props.canDelete) &&
            <a className={classNameRemove} onClick={() => onRemove(key)} />
          }
        </span>
      );

      if (this.props.canClick) {
        return (
          <a key={key} onClick={() => this.props.onClick(tag)}>
            {component}
          </a>
        )
      }

      return component;
    };

    const renderLayout = (tagComponents, inputComponent) => {
      return (
        <span>
          {tagComponents}
          {!this.props.showOnlyTags && inputComponent}
        </span>
      );
    }
    /* eslint-enable */

    return (
      <div className="blog-tags-input">
        <ReactTagsInput
          name={this.props.name}
          value={this.props.tags}
          onChange={this.handleChange}
          maxTags={5}
          renderTag={renderTag}
          renderLayout={renderLayout}
        />
      </div>
    );
  }
}

TagsInput.propTypes = {
  name: React.PropTypes.string.isRequired,
  tags: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  showOnlyTags: React.PropTypes.bool,
  canDelete: React.PropTypes.bool.isRequired,
  canClick: React.PropTypes.bool.isRequired,
  onChange: React.PropTypes.func,
  onClick: React.PropTypes.func,
};

export default TagsInput;
