import React from 'react';
import { Link, browserHistory } from 'react-router';
import moment from '../../utils/moment';

const Post = (props) => {
  const goToTag = tag => browserHistory.push(`/posts/${tag}`);

  return (
    <div className="blog-post">
      <div className="blog-post__date">
        <span>{moment(props.post.datePublished).format('DD MMMM YYYY')}</span>
      </div>
      <h2 className="blog-post__title">
        <Link to={`/post/${props.post._id}`}>{props.post.title}</Link>
      </h2>
      <div className="blog-post__tags">
        {props.post.tags.map((tag, index) => (
          <button
            key={index}
            className="react-tagsinput-tag"
            style={{ cursor: 'pointer' }}
            onClick={() => goToTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      {props.children}
    </div>
  );
};

Post.propTypes = {
  children: React.PropTypes.node,
  post: React.PropTypes.shape({
    _id: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    tags: React.PropTypes.array.isRequired,
    datePublished: React.PropTypes.any.isRequired, // // eslint-disable-line react/forbid-prop-types
  }).isRequired,
};

export default Post;
