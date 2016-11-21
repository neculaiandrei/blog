import React from 'react';
import { connect } from 'react-redux';
import SummaryPost from './SummaryPost';
import SearchBar from '../Common/SearchBar';

class PostList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
    };

    this.filteredPosts = [...this.props.posts];
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  render() {
    this.filteredPosts = this.props.posts
                            .filter(post => this.state.searchText === undefined
                            || post.title.indexOf(this.state.searchText) !== -1);

    const posts = this.filteredPosts.map(post => (
      <SummaryPost
        key={post._id}
        date={post.date}
        title={post.title}
        link={`/post/${post._id}`}
      />
    ));

    return (
      <div>
        <SearchBar
          name="postSearch"
          text={this.state.searchText}
          onChange={this.handleSearch}
        />
        {posts}
      </div>
    );
  }
}

PostList.propTypes = {
  posts: React.PropTypes.arrayOf(React.PropTypes.object),
};

const mapStateToProps = state => ({
  posts: state.posts,
});

export default connect(mapStateToProps)(PostList);
