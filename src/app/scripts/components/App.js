import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Sidebar from './Sidebar';
import LoadingContainer from './Common/LoadingContainer';

const App = props => (
  <div>
    <Header />
    <div className="blog-content">
      <LoadingContainer
        loading={props.loading}
      >
        {props.children}
      </LoadingContainer>
    </div>
    <Sidebar />
  </div>
);

App.propTypes = {
  children: React.PropTypes.node,
  loading: React.PropTypes.bool,
};

const mapStateToProps = state => ({
  loading: state.loading,
});

export default connect(mapStateToProps)(App);

