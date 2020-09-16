import React from 'react';
import { connect } from 'react-redux';
import ListView from './ListView';

const ListViewContainer = (props) => {
  const { projects, path, projectSection } = props;

  return <ListView projects={projects[projectSection]} path={path} />;
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
    path: state.navigation.path,
    projectSection: state.navigation.cleanTitle,
  };
};

export default connect(mapStateToProps)(ListViewContainer);
