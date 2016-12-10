import React from 'react';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PostForm from './PostForm/PostForm';
import BackButton from '../Common/Buttons/BackButton';
import postsActions from '../../actions/postsActions';

class EditPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: Object.assign({}, this.props.post),
      saving: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleChange(event) {
    const field = event.target.name;
    let value;

    if (event.target.type === 'checkbox') {
      value = event.target.checked;
    } else {
      value = event.target.value;
    }
    const post = Object.assign({}, this.state.post);

    post[field] = value;
    this.setState({
      post,
    });
  }

  handleSave() {
    this.setState({ saving: true });
    this.props.actions.editPost(this.state.post)
      .then(() => browserHistory.push('/admin/posts'));
  }

  render() {
    return (
      <div>
        <h1>Editează postare</h1>
        <PostForm
          post={this.state.post}
          saving={this.state.saving}
          onChange={this.handleChange}
          onSave={this.handleSave}
        />
        <BackButton />
      </div>
    );
  }
}

EditPost.propTypes = {
  actions: React.PropTypes.shape({
    editPost: React.PropTypes.func,
  }),
  post: React.PropTypes.shape({}),
};

const mapStateToProps = (state, ownProps) => {
  const existingPost = state.posts.find(post => post._id === ownProps.params.id);

  return {
    post: existingPost,
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(postsActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
