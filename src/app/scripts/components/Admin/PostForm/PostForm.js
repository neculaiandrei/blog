import React from 'react';
import PostFormRow from './PostFormRow';
import TextInput from '../../Common/Inputs/TextInput';
import MarkdownInput from '../../Common/Inputs/MarkdownInput';
import Chechbox from '../../Common/Inputs/Checkbox';
import Label from '../../Common/Inputs/Label';
import AsyncSaveButton from '../../Common/Buttons/AsyncSaveButton';

const PostForm = props => (
  <div className="blog-post-form">
    <PostFormRow>
      <Label name="title">Titlu</Label>
      <TextInput
        text={props.post.title}
        name="title"
        onChange={props.onChange}
      />
    </PostFormRow>
    <PostFormRow>
      <Label
        name="content"
        verticalAlign={true}
      >
        Text
      </Label>
      <MarkdownInput
        text={props.post.content}
        name="content"
        onChange={props.onChange}
      />
    </PostFormRow>
    <PostFormRow>
      <Label verticalAlign={true} name="isPublished">Publicat</Label>
      <Chechbox
        checked={props.post.isPublished}
        name="isPublished"
        onChange={props.onChange}
      />
    </PostFormRow>
    <PostFormRow>
      <AsyncSaveButton
        pending={props.saving}
        onSave={props.onSave}
      />
    </PostFormRow>
  </div>
);

PostForm.propTypes = {
  post: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired,
    isPublished: React.PropTypes.bool.isRequired,
  }).isRequired,
  onChange: React.PropTypes.func.isRequired,
  onSave: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
};

export default PostForm;

