import React from 'react';
import PostData from './../../data';
import SummaryPost from './SummaryPost';

const PostList = () => {
  const posts = PostData.map(post => (
    <SummaryPost
      key={post.id}
      date={post.date}
      title={post.title}
      link={`/post/${post.id}`}
    />
  ));

  return (
    <div>
      {posts}
    </div>
  );
};

export default PostList;
