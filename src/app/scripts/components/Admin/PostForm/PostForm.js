import React from 'react';
import PostFormRow from './PostFormRow';
import TextInput from '../../Common/Inputs/TextInput';
import Checkbox from '../../Common/Inputs/Checkbox';
import MarkdownInput from '../../Common/Inputs/MarkdownInput';
import TagsInput from '../../Common/Inputs/TagsInput';
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
      <Label
        name="tags"
        verticalAlign={true}
      >
        Taguri
      </Label>
      <TagsInput
        name="tags"
        tags={props.post.tags}
        onChange={props.onChange}
      />
    </PostFormRow>
    { props.isNew ? '' : (
      <PostFormRow>
        <Label
          name="isPublished"
          verticalAlign={true}
        >
          Publicat
        </Label>
        <Checkbox
          checked={props.post.isPublished}
          name="isPublished"
          onChange={props.onChange}
        />
      </PostFormRow>
    )}
    <PostFormRow>
      <AsyncSaveButton
        pending={props.saving}
        onSave={props.onSave}
      />
    </PostFormRow>
  </div>
);

PostForm.propTypes = {
  isNew: React.PropTypes.bool.isRequired,
  post: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired,
    tags: React.PropTypes.array.isRequired,
    isPublished: React.PropTypes.bool.isRequired,
  }).isRequired,
  onChange: React.PropTypes.func.isRequired,
  onSave: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
};

export default PostForm;

