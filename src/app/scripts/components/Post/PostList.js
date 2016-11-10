import React from 'react';
import PostData from './../../data';
import SummaryPost from './SummaryPost';
import SearchBar from '../Common/SearchBar';

class PostList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
    };

    this.posts = [...PostData];
    this.filteredPosts = [...this.posts];
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  render() {
    this.filteredPosts = this.posts
                            .filter(post => this.state.searchText === undefined
                            || post.title.indexOf(this.state.searchText) !== -1);

    const posts = this.filteredPosts.map(post => (
      <SummaryPost
        key={post.id}
        date={post.date}
        title={post.title}
        link={`/post/${post.id}`}
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
};

export default PostList;
