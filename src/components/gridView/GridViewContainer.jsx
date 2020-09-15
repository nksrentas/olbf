import React from 'react';
import { connect } from 'react-redux';
import GridView from './GridView';

const GridViewContainer = (props) => {
  const { projects, path } = props;

  return <GridView projects={projects} path={path} />;
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
    path: state.navigation.path,
  };
};

export default connect(mapStateToProps)(GridViewContainer);
