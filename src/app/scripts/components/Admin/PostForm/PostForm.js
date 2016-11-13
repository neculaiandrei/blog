import React from 'react';
import PostFormRow from './PostFormRow';
import TextInput from '../../Common/Inputs/TextInput';
import TextAreaInput from '../../Common/Inputs/TextAreaInput';
import Label from '../../Common/Inputs/Label';
import TextIconButton from '../../Common/Buttons/TextIconButton';

const PostForm = props => (
  <div className="blog-post-form">
    <PostFormRow>
      <Label name="title">Title</Label>
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
        Content
      </Label>
      <TextAreaInput
        text={props.post.content}
        name="content"
        onChange={props.onChange}
      />
    </PostFormRow>
    <PostFormRow>
      <TextIconButton
        iconClassName="fa fa-floppy-o"
        onClick={props.onSave}
      >
        Save
      </TextIconButton>
    </PostFormRow>
  </div>
);

PostForm.propTypes = {
  post: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired,
  }).isRequired,
  onChange: React.PropTypes.func.isRequired,
  onSave: React.PropTypes.func.isRequired,
};

export default PostForm;

