import React from 'react';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import slug from 'slug';
import Page from '../Page/Page';
import PageHeader from '../Page/PageHeader';
import PostForm from './PostForm/PostForm';
import BackButton from '../Common/Buttons/BackButton';
import postsActions from '../../actions/postsActions';

class AddPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {
        title: '',
        slug: '',
        content: '',
        tags: [],
      },
      saving: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleChange(field, value) {
    const post = Object.assign({}, this.state.post);

    post[field] = value;

    if (field === 'title') {
      post.slug = slug(post.title, '_');
    }

    this.setState({
      post,
    });
  }

  handleSave() {
    this.setState({ saving: true });
    this.props.actions.createPost(this.state.post)
      .then(() => browserHistory.push('/admin/posts'));
  }

  render() {
    return (
      <Page>
        <PageHeader>
          <h2>Adaugă postare</h2>
        </PageHeader>
        <PostForm
          isNew={true}
          post={this.state.post}
          saving={this.state.saving}
          onChange={this.handleChange}
          onSave={this.handleSave}
        />
        <BackButton />
      </Page>
    );
  }
}

AddPost.propTypes = {
  actions: React.PropTypes.shape({
    createPost: React.PropTypes.func,
  }).isRequired,
};

const mapStateToProps = state => ({
  posts: state.posts,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(postsActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
