import React from 'react';
import Post from './Post';
import IconLink from '../Common/IconLink';

const SummaryPost = props => (
  <Post
    datePublished={props.datePublished}
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
  datePublished: React.PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
  title: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired,
};

export default SummaryPost;
