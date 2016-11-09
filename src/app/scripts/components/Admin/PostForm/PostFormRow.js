import React from 'react';

const PostFormRow = props => (
  <div className="blog-post-form__row">
    {props.children}
  </div>
);

PostFormRow.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default PostFormRow;
