import React from 'react';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PostForm from './PostForm/PostForm';
import TextIconButton from '../Common/Buttons/TextIconButton';
import postActions from '../../actions/postActions';

class AddPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {
        title: '',
        content: '',
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleChange(event) {
    const field = event.target.name;
    const value = event.target.value;
    const post = Object.assign({}, this.state.post);

    post[field] = value;
    this.setState({
      post,
    });
  }

  handleSave() {
    const newId = Math.floor((Math.random() * 10000) + 1);
    const newPost = Object.assign({}, this.state.post);
    newPost.id = `${newId}`;
    newPost.date = new Date().toDateString();
    browserHistory.push('/admin/posts');

    this.props.actions.createPost(newPost);
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <PostForm
          post={this.state.post}
          onChange={this.handleChange}
          onSave={this.handleSave}
        />
        <TextIconButton
          iconClassName="fa fa-angle-left"
          onClick={browserHistory.goBack}
        >
          Back
        </TextIconButton>
      </div>
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
  actions: bindActionCreators(postActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
