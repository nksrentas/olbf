import React from 'react';
import { connect } from 'react-redux';
import GridView from './GridView';

const GridViewContainer = (props) => {
  const { projects, navigation } = props;

  return <GridView projects={projects} path={navigation} />;
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
    navigation: state.navigation.path,
  };
};

export default connect(mapStateToProps)(GridViewContainer);
