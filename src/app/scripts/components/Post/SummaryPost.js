import React from 'react';
import Post from './Post';
import IconLink from '../Common/IconLink';

const SummaryPost = props => (
  <Post
    date={props.date}
    title={props.title}
    link={props.link}
  >
    <div className="blog-post__buttons">
      <IconLink
        className="fa fa-file-pdf-o fa-lg blog-fa-file-pdf-o"
        link={`/api/posts/${props._id}/pdf`}
        isExternal={true}
      />
    </div>
  </Post>
);

SummaryPost.propTypes = {
  _id: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired,
};

export default SummaryPost;
