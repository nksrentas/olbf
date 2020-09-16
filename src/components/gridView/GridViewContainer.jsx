import React from 'react';
import { connect } from 'react-redux';
import GridView from './GridView';

const GridViewContainer = (props) => {
  const { projects, path, projectSection } = props;

  return <GridView projects={projects[projectSection]} path={path} />;
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
    path: state.navigation.path,
    projectSection: state.navigation.cleanTitle,
  };
};

export default connect(mapStateToProps)(GridViewContainer);
