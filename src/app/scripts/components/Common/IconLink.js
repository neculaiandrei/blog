import React from 'react';
import { Link } from 'react-router';

const IconLink = (props) => {
  const icon = (
    <i className={props.className}>
      {props.children}
    </i>
  );

  if (props.isExternal) {
    return (
      <a href={props.link} target="_blank">
        {icon}
      </a>
    );
  }

  return (
    <Link to={props.link} activeClassName={props.activeClassName}>
      {icon}
    </Link>
  );
};

IconLink.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.node,
  activeClassName: React.PropTypes.string,
  link: React.PropTypes.string.isRequired,
  isExternal: React.PropTypes.bool,
};

IconLink.defaultProps = {
  isExternal: false,
};

export default IconLink;
