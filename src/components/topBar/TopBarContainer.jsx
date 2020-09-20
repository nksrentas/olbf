import React from 'react';
import { connect } from 'react-redux';
import TopBar from './TopBar';
import { setView } from '../../actions/topBarActions';

const TopBarContainer = (props) => {
  const { navigation, topBar, changeView, fetchState, renderExtra } = props;
  let { title } = props;

  const handleViewState = (view) => {
    changeView(view);
  };

  if (fetchState) {
    title = fetchState.isLoading ? 'Loading...' : title;
  } else if (navigation.error) {
    title = navigation.title;
  } else {
    title = '';
  }

  return (
    <TopBar
      data={navigation}
      handleView={handleViewState}
      activeViewType={topBar}
      fetchState={fetchState}
      title={title}
      renderExtra={renderExtra}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    navigation: state.navigation,
    projects: state.projects,
    topBar: state.topBar.viewType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeView: (view) => dispatch(setView(view)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBarContainer);
