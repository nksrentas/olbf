import React from 'react';
import { connect } from 'react-redux';
import { getProjects } from './actions/projectActions';

function App(props) {
  console.log(props);
  return <div>kappa reality</div>;
}

const mapStateToProps = (state, ownState) => {
  return {
    kappaProps: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    kappaDispatch: dispatch(getProjects()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
