import React from 'react';
import { connect } from 'react-redux';
import TopBar from './TopBar';

const TopBarContainer = (props) => {
  console.log('eimai edw ', props);
  return <TopBar title={props.activeTitleLink.title} />;
  // return <TopBar title={props.activeTitleLink} />;
};

const mapStateToProps = (state) => {
  return {
    activeTitleLink: state.navigation.path,
    // activeTitleLink: state.topBar.activeTitleLink,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeView: (viewType) => {
      dispatch({ type: 'SET_VIEW', payload: viewType });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBarContainer);
