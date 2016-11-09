import React from 'react';
import { browserHistory } from 'react-router';
import PostData from './../../data';
import PostForm from './PostForm/PostForm';
import TextIconButton from '../Common/Buttons/TextIconButton';

class EditPost extends React.Component {
  constructor(props) {
    super(props);

    const post = PostData.find(p => p.id === props.params.id);
    this.state = {
      post: Object.assign({}, post),
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
    const existingPostIndex = PostData.findIndex(p => p.id === this.state.post.id);
    PostData.splice(existingPostIndex, 1, this.state.post);
    browserHistory.push('/admin/posts');
  }

  render() {
    return (
      <div>
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

EditPost.propTypes = {
  params: React.PropTypes.shape({
    id: React.PropTypes.string,
  }),
};

export default EditPost;
