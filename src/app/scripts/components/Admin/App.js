import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import LoadingContainer from '../Common/LoadingContainer';

const App = props => (
  <div>
    <Header />
    <div className="blog-admin-content">
      <LoadingContainer
        loading={props.loading}
      >
        {props.children}
      </LoadingContainer>
    </div>
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

