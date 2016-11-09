import React from 'react';
import { Link } from 'react-router';

const Post = props => (
  <div className="blog-post">
    <div className="blog-post__date">
      <span>{props.date}</span>
    </div>
    <h2 className="blog-post__title">
      <Link to={props.link}>{props.title}</Link>
    </h2>
    {props.children}
  </div>
);

Post.propTypes = {
  children: React.PropTypes.node,
  date: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired,
};

export default Post;
