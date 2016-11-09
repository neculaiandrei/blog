import React from 'react';
import IconLink from '../../Common/IconLink';
import IconButton from '../../Common/Buttons/IconButton';

class PostRow extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.onDelete(this.props.post.id);
  }

  render() {
    return (
      <tr>
        <td>{this.props.index}</td>
        <td>{this.props.post.id}</td>
        <td>{this.props.post.title}</td>
        <td>
          <IconLink
            className="fa fa-pencil-square-o"
            link={`/admin/post/${this.props.post.id}`}
            isExternal={false}
          />
          &nbsp;&nbsp;&nbsp;
          <IconButton
            className="blog-icon-button--black-o"
            iconClassName="fa fa-trash-o"
            onClick={this.handleDelete}
          />
        </td>
      </tr>
    );
  }
}

PostRow.propTypes = {
  post: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
  }),
  index: React.PropTypes.number.isRequired,
  onDelete: React.PropTypes.func.isRequired,
};

export default PostRow;
