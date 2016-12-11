import React from 'react';
import Post from './Post';
import IconLink from '../Common/IconLink';

const SummaryPost = props => (
  <Post
    post={props.post}
  >
    <div className="blog-post__buttons">
      <IconLink
        className="fa fa-file-pdf-o fa-lg blog-fa-file-pdf-o"
        link={`/api/posts/${props.post._id}/pdf`}
        isExternal={true}
      />
    </div>
  </Post>
);

SummaryPost.propTypes = {
  post: React.PropTypes.shape({
    _id: React.PropTypes.string.isRequired,
  }),
};

export default SummaryPost;
