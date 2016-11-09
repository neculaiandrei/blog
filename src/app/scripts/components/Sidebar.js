import React from 'react';
import IconLink from './Common/IconLink';

const Sidebar = () => (
  <div className="blog-sidebar">
    <IconLink
      link="https://www.facebook.com/JoiDimineata-1712416545640091/"
      isExternal={true}
      className="fa fa-lg fa-facebook blog-fa-facebook"
    />
    <IconLink
      link="https://www.youtube.com/"
      isExternal={true}
      className="fa fa-lg fa-youtube blog-fa-youtube"
    />
    <IconLink
      link="https://www.google.com/gmail/"
      isExternal={true}
      className="fa fa-lg fa-envelope-o blog-fa-envelope-o"
    />
    <IconLink
      link="https://github.com"
      isExternal={true}
      className="fa fa-lg fa-github blog-fa-github"
    />
  </div>
);

export default Sidebar;

