import React from 'react';

const LoadingContainer = (props) => {
  let content;

  if (props.loading) {
    content = 'Loading...';
  } else {
    content = props.children;
  }

  return (
    <div>
      {content}
    </div>
  );
};

LoadingContainer.propTypes = {
  children: React.PropTypes.node,
  loading: React.PropTypes.bool,
};

export default LoadingContainer;
