import React from 'react';
import Post from './Post';

const SummaryPost = props => (
  <Post
    date={props.date}
    title={props.title}
    link={props.link}
  >
    <div className="blog-post__buttons">
      <i className="fa fa-file-pdf-o fa-lg blog-fa-file-pdf-o" />
      <i className="fa fa-download fa-lg" />
    </div>
  </Post>
);

SummaryPost.propTypes = {
  date: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired,
};

export default SummaryPost;
