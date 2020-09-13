import React from 'react';
import { connect } from 'react-redux';
import GridView from './GridView';

const GridViewContainer = (props) => {
  const { projects } = props;
  return <GridView projects={projects} />;
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};

export default connect(mapStateToProps)(GridViewContainer);
