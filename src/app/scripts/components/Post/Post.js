import React from 'react';
import { Link } from 'react-router';
import moment from '../../utils/moment';

const Post = props => (
  <div className="blog-post">
    <div className="blog-post__date">
      <span>{moment(props.datePublished).format('DD MMMM YYYY')}</span>
    </div>
    <h2 className="blog-post__title">
      <Link to={props.link}>{props.title}</Link>
    </h2>
    {props.children}
  </div>
);

Post.propTypes = {
  children: React.PropTypes.node,
  datePublished: React.PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
  title: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired,
};

export default Post;
