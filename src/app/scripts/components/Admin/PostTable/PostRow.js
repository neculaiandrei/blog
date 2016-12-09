import React from 'react';
import IconLink from '../../Common/IconLink';
import AsyncIconButton from '../../Common/Buttons/AsyncIconButton';
import moment from '../../../utils/moment';

class PostRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      deleting: false,
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.setState({ deleting: true });
    this.props.onDelete(this.props.post._id).catch(() => {
      this.setState({ deleting: false });
    });
  }

  render() {
    return (
      <tr>
        <td>{this.props.index}</td>
        <td>{this.props.post.title}</td>
        <td>{moment(this.props.post.dateCreated).format('DD/MM/YYYY')}</td>
        <td>{this.props.post.isPublished ? 'Publicat' : 'Draft'}</td>
        <td>
          <IconLink
            className="fa fa-pencil-square-o"
            link={`/admin/post/${this.props.post._id}`}
            isExternal={false}
          />
          &nbsp;&nbsp;&nbsp;
          <AsyncIconButton
            className="blog-icon-button--black-o"
            iconClassName="fa fa-trash-o"
            onClick={this.handleDelete}
            pending={this.state.deleting}
          />
        </td>
      </tr>
    );
  }
}

PostRow.propTypes = {
  post: React.PropTypes.shape({
    _id: React.PropTypes.string.isRequired,
    dateCreated: React.PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
    title: React.PropTypes.string.isRequired,
    isPublished: React.PropTypes.bool.isRequired,
  }),
  index: React.PropTypes.number.isRequired,
  onDelete: React.PropTypes.func.isRequired,
};

export default PostRow;
