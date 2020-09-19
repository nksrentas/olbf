import React from 'react';
import { connect } from 'react-redux';
import TopBar from './TopBar';
import { setView } from '../../actions/topBarActions';

const TopBarContainer = (props) => {
  const { navigation, topBar, changeView } = props;
  const handleViewState = (view) => {
    changeView(view);
  };

  return (
    <TopBar
      data={navigation}
      handleView={handleViewState}
      activeViewType={topBar}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    navigation: state.navigation,
    topBar: state.topBar.viewType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeView: (view) => dispatch(setView(view)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBarContainer);
