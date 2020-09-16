import React from 'react';
import { connect } from 'react-redux';
import ListView from './ListView';

const ListViewContainer = (props) => {
  const { projects, path, projectSection } = props;
  // console.log(projects[projectSection]);
  console.log(props);
  return <ListView projects={projects[projectSection]} path={path} />;
  // return <p>kappa</p>;
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
    path: state.navigation.path,
    projectSection: state.navigation.cleanTitle,
  };
};

export default connect(mapStateToProps)(ListViewContainer);
