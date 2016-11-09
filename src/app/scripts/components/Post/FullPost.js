import React from 'react';
import Markdown from 'react-markdown';
import Post from './Post';
import PostData from './../../data';

class FullPost extends React.Component {
  constructor(props) {
    super();
    this.post = PostData.find(p => p.id === props.params.id);
  }

  render() {
    return (
      <Post
        date={this.post.date}
        title={this.post.title}
        link={`/post/${this.post.id}`}
      >
        <div className="blog-post__content">
          <Markdown source={this.post.content} />
        </div>
      </Post>
    );
  }
}

FullPost.propTypes = {
  params: React.PropTypes.shape({
    id: React.PropTypes.string,
  }),
};

export default FullPost;
