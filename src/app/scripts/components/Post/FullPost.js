import React from 'react';
import Markdown from 'react-markdown';
import { connect } from 'react-redux';
import Post from './Post';

const FullPost = props => (
  <Post
    date={props.post.date}
    title={props.post.title}
    link={`/post/${props.post._id}`}
  >
    <div className="blog-post__content">
      <Markdown source={props.post.content} />
    </div>
  </Post>
);

FullPost.propTypes = {
  post: React.PropTypes.shape({
    _id: React.PropTypes.string,
    title: React.PropTypes.string,
    date: React.PropTypes.string,
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
    date: '',
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

