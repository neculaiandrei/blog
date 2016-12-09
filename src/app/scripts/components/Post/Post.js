import React from 'react';
import moment from 'moment';
import 'moment/locale/ro';
import { Link } from 'react-router';

moment().locale('ro');

moment.updateLocale('ro', {
  months: 'Ianuarie_Februarie_Martie_Aprilie_Mai_Iunie_Iulie_August_Septembrie_Octombrie_Noiembrie_Decembrie'.split('_'),
});

const Post = props => (
  <div className="blog-post">
    <div className="blog-post__date">
      <span>{moment(props.date).format('DD MMMM YYYY')}</span>
    </div>
    <h2 className="blog-post__title">
      <Link to={props.link}>{props.title}</Link>
    </h2>
    {props.children}
  </div>
);

Post.propTypes = {
  children: React.PropTypes.node,
  date: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired,
};

export default Post;
