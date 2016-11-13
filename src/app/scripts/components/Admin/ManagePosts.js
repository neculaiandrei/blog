import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ExtendedPostTable from './PostTable/ExtendedPostTable';
import postActions from '../../actions/postActions';

class ManagePosts extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    const existingPost = this.props.posts.find(post => post.id === id);
    this.props.actions.deletePost(existingPost);
  }

  render() {
    return (
      <div>
        <h2>Posts</h2>
        <ExtendedPostTable
          posts={this.props.posts}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

ManagePosts.propTypes = {
  posts: React.PropTypes.arrayOf(React.PropTypes.object),
  actions: React.PropTypes.shape({
    deletePost: React.PropTypes.func,
  }),
};

const mapStateToProps = state => ({
  posts: state.posts,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(postActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ManagePosts);
