import React from 'react';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PostForm from './PostForm/PostForm';
import TextIconButton from '../Common/Buttons/TextIconButton';
import postsActions from '../../actions/postsActions';

class AddPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {
        title: '',
        content: '',
      },
      saving: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleChange(event) {
    const field = event.target.name;
    const value = event.target.value;
    const post = Object.assign({}, this.state.post);

    post[field] = value;
    this.setState({
      post,
    });
  }

  handleSave() {
    this.setState({ saving: true });
    this.props.actions.createPost(this.state.post)
      .then(() => browserHistory.push('/admin/posts'));
  }

  render() {
    return (
      <div>
        <h1>Adaugă postare</h1>
        <PostForm
          post={this.state.post}
          saving={this.state.saving}
          onChange={this.handleChange}
          onSave={this.handleSave}
        />
        <TextIconButton
          iconClassName="fa fa-angle-left"
          onClick={browserHistory.goBack}
        >
          Înapoi
        </TextIconButton>
      </div>
    );
  }
}

AddPost.propTypes = {
  actions: React.PropTypes.shape({
    createPost: React.PropTypes.func,
  }).isRequired,
};

const mapStateToProps = state => ({
  posts: state.posts,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(postsActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
