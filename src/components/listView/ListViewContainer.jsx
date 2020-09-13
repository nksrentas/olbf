import React from 'react';
import { connect } from 'react-redux';
import ListView from './ListView';

const ListViewContainer = (props) => {
  const { projects } = props;
  return <ListView projects={projects} />;
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};

export default connect(mapStateToProps)(ListViewContainer);
