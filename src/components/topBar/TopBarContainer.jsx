import React from 'react';
import { connect } from 'react-redux';
import TopBar from './TopBar';

const TopBarContainer = (props) => {
  return <TopBar data={props.activeTitleLink} />;
};

const mapStateToProps = (state) => {
  return {
    activeTitleLink: state.navigation,
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
