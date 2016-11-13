import React from 'react';
import Markdown from 'react-markdown';
import { connect } from 'react-redux';
import Post from './Post';

const FullPost = props => (
  <Post
    date={props.post.date}
    title={props.post.title}
    link={`/post/${props.post.id}`}
  >
    <div className="blog-post__content">
      <Markdown source={props.post.content} />
    </div>
  </Post>
);

FullPost.propTypes = {
  post: React.PropTypes.shape({
    id: React.PropTypes.string,
    title: React.PropTypes.string,
    date: React.PropTypes.string,
    content: React.PropTypes.string,
  }),
};

const getPostById = (posts, id) => {
  const post = posts.filter(p => p.id === id);
  if (post) {
    return post[0];
  }

  return null;
};

const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.params.id;
  const post = getPostById(state.posts, postId);

  return {
    post,
  };
};

export default connect(mapStateToProps)(FullPost);

