import React from 'react';
import classNames from 'classnames';
import ReusableTextInput from './Inputs/ReusableTextInput';

class SearchBar extends React.Component {
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
    const searchBarClass = classNames(
      'blog-search-bar',
      this.props.className,
      {
        'blog-search-bar--active': this.state.active,
      });
    const searchBarIconClass = 'blog-search-bar__icon fa fa-search';

    return (
      <div className={searchBarClass}>
        <ReusableTextInput
          name={this.props.name}
          active={this.state.active}
          text={this.props.text}
          placeholder="Cauta"
          showLabel={false}
          onChange={this.props.onChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        <i className={searchBarIconClass} />
      </div>
    );
  }
}

SearchBar.defaultProps = {
  text: '',
};

SearchBar.propTypes = {
  name: React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
  text: React.PropTypes.string,
  onChange: React.PropTypes.func,
};

export default SearchBar;
