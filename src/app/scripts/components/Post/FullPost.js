import React from 'react';
import Markdown from 'react-markdown';
import { connect } from 'react-redux';
import Post from './Post';
import IconLink from '../Common/IconLink';

const FullPost = props => (
  <Post
    dateCreated={props.post.dateCreated}
    title={props.post.title}
    link={`/post/${props.post._id}`}
  >
    <div className="blog-post__content">
      <Markdown source={props.post.content} />
    </div>
    <div className="blog-post__buttons">
      <IconLink
        className="fa fa-file-pdf-o fa-lg blog-fa-file-pdf-o"
        link={`/api/posts/${props.post._id}/pdf`}
        isExternal={true}
      />
    </div>
  </Post>
);

FullPost.propTypes = {
  post: React.PropTypes.shape({
    _id: React.PropTypes.string,
    title: React.PropTypes.string,
    dateCreated: React.PropTypes.string,
    content: React.PropTypes.string,
  }),
};

const getPostById = (posts, _id) => {
  const post = posts.filter(p => p._id === _id);
  if (post.length > 0) {
    return post[0];
  }

  return {
    _id: '',
    title: '',
    dateCreated: '',
    content: '',
  };
};

const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.params.id;
  const post = getPostById(state.posts, postId);

  return {
    post,
  };
};

export default connect(mapStateToProps)(FullPost);

