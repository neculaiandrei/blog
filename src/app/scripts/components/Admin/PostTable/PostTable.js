import React from 'react';
import PostRow from './PostRow';

const PostTable = props => (
  <table className="blog-extended-table__table">
    <thead>
      <tr>
        <th>Nr</th>
        <th>Titlu</th>
        <th>Creat</th>
        <th>Status</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {props.posts.map((post, index) =>
        <PostRow
          key={index}
          post={post}
          index={index}
          onDelete={props.onDelete}
        />
      )}
    </tbody>
  </table>
);

PostTable.propTypes = {
  posts: React.PropTypes.arrayOf(React.PropTypes.object),
  onDelete: React.PropTypes.func.isRequired,
};

export default PostTable;
