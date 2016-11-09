import React from 'react';
import SearchBar from '../../Common/SearchBar';
import IconLink from '../../Common/IconLink';
import PostTable from './PostTable';

class PostFilterableTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  render() {
    const filteredPosts = this.props.posts
                            .filter(post => this.state.text === undefined
                            || post.title.indexOf(this.state.text) !== -1);

    return (
      <div className="blog-extended-table">
        <SearchBar
          className="blog-extended-table__search"
          name="tableSearch"
          text={this.state.text}
          onChange={this.handleSearchChange}
        />
        <IconLink
          className="blog-extended-table__add fa fa-plus"
          link="/admin/addPost"
        />
        <PostTable
          posts={filteredPosts}
          onDelete={this.props.onDelete}
        />
      </div>
    );
  }
}

PostFilterableTable.propTypes = {
  posts: React.PropTypes.arrayOf(React.PropTypes.object),
  onDelete: React.PropTypes.func.isRequired,
};

export default PostFilterableTable;
