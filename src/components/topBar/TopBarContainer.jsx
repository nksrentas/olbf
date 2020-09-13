import React from 'react';
import { connect } from 'react-redux';
import TopBar from './TopBar';

import { setView } from '../../actions/topBarActions';

const TopBarContainer = (props) => {
  const handleViewState = (view) => {
    props.changeView(view);
  };
  return (
    <TopBar
      data={props.activeTitleLink}
      handleView={handleViewState}
      activeViewType={props.activeViewType}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    activeTitleLink: state.navigation,
    activeViewType: state.topBar.viewType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeView: (view) => dispatch(setView(view)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBarContainer);
