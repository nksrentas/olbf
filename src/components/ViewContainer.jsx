import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import ListView from './listView/ListView';
import GridView from './gridView/GridView';
import { getProjects } from '../actions/projectsActions';

const ViewContainer = (props) => {
  const { viewType, projects, path, projectSection } = props;

  // console.log('projectSEction', projectSection, path, props.match.path);
  useLayoutEffect(() => {
    console.log('ARXIZW NA KANW FETCH APO REDUX', props.match.path);

    props.projectsDispatch(props.match.path);
  }, []);

  console.log(projects.isLoading);
  // TODO: fix error properView
  let properView = <p>ERRORR</p>;

  if (projects.isLoading) {
    properView = <p>Loading...</p>;
  }

  if (projects.success && viewType === 'list') {
    properView = (
      <ListView projects={projects[projectSection]} path={props.match.path} />
    );
  }

  if (projects.success && viewType === 'grid') {
    properView = (
      <GridView projects={projects[projectSection]} path={props.match.path} />
    );
  }

  return <div className='jumbotron rounded-0 rounded-bottom'>{properView}</div>;
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
    path: state.navigation.path,
    projectSection: state.navigation.cleanTitle,
    viewType: state.topBar.viewType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    projectsDispatch: (path) => dispatch(getProjects(path)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewContainer);
