import React from 'react';

class LoadingContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false,
    };
  }

  render() {
    let content;

    if (this.state.loading) {
      content = this.props.children;
    } else {
      content = 'Loading...';
    }

    return (
      <div>
        {content}
      </div>
    );
  }
}

LoadingContainer.propTypes = {
  children: React.PropTypes.node,
};

export default LoadingContainer;
