import React from 'react';
import { connect } from 'react-redux';
import ListView from './ListView';

const ListViewContainer = (props) => {
  const { projects, path } = props;
  return <ListView projects={projects} path={path} />;
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
    path: state.navigation.path,
  };
};

export default connect(mapStateToProps)(ListViewContainer);
