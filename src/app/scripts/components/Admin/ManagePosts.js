import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Page from '../Page/Page';
import PageHeader from '../Page/PageHeader';
import ExtendedPostTable from './PostTable/ExtendedPostTable';
import postsActions from '../../actions/postsActions';

class ManagePosts extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(_id) {
    const existingPost = this.props.posts.find(post => post._id === _id);

    return this.props.actions.deletePost(existingPost);
  }

  render() {
    return (
      <Page>
        <PageHeader>
          <h2>Postări</h2>
        </PageHeader>
        <ExtendedPostTable
          posts={this.props.posts}
          onDelete={this.handleDelete}
        />
      </Page>
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
  actions: bindActionCreators(postsActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ManagePosts);
