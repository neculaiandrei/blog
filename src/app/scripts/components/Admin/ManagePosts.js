import React from 'react';
import PostData from '../../data';
import ExtendedPostTable from './PostTable/ExtendedPostTable';

class ManagePosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [...PostData],
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    this.setState({
      posts: [...this.state.posts.filter(post => post.id !== id)],
    });
  }

  render() {
    return (
      <div>
        <h2>Posts</h2>
        <ExtendedPostTable
          posts={this.state.posts}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default ManagePosts;
