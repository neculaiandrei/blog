import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const App = props => (
  <div>
    <Header />
    <div className="blog-content">
      {props.children}
    </div>
    <Sidebar />
  </div>
);

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
