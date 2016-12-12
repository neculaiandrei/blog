import React from 'react';
import { Link, browserHistory } from 'react-router';
import TagsInput from '../Common/Inputs/TagsInput';
import moment from '../../utils/moment';

const Post = (props) => {
  const goToTag = tag => browserHistory.push(`/posts/${tag}`);

  return (
    <div className="blog-post">
      <div className="blog-post__date">
        <span>{moment(props.post.datePublished).format('DD MMMM YYYY')}</span>
      </div>
      <h2 className="blog-post__title">
        <Link to={`/post/${props.post.slug}`}>{props.post.title}</Link>
      </h2>
      <div className="blog-post__tags">
        <TagsInput
          name="tags"
          tags={props.post.tags}
          canDelete={false}
          canClick={true}
          onClick={goToTag}
          showOnlyTags={true}
        />
      </div>
      {props.children}
    </div>
  );
};

Post.propTypes = {
  children: React.PropTypes.node,
  post: React.PropTypes.shape({
    slug: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    tags: React.PropTypes.array.isRequired,
    datePublished: React.PropTypes.any.isRequired, // // eslint-disable-line react/forbid-prop-types
  }).isRequired,
};

export default Post;
