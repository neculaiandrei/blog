import React from 'react';
import { browserHistory } from 'react-router';
import PostData from './../../data';
import PostForm from './PostForm/PostForm';
import TextIconButton from '../Common/Buttons/TextIconButton';

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
    const newId = PostData.length + 1;
    const newPost = Object.assign({}, this.state.post);
    newPost.id = newId;
    newPost.date = new Date().toDateString();
    PostData.push(newPost);
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

AddPost.propTypes = {
  params: React.PropTypes.shape({
    id: React.PropTypes.string,
  }),
};

export default AddPost;
