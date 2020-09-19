import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ListView from './listView/ListView';
import GridView from './gridView/GridView';
import { getProjects } from '../actions/projectsActions';

const ViewContainer = (props) => {
  const {
    viewType,
    projects,
    projectsDispatch,
    navigation,
    match: { path },
  } = props;
  const { objectKey: projectSection } = projects;

  useEffect(() => {
    projectsDispatch(path);
  }, [path, projectsDispatch]);
  // useLayoutEffect(() => {
  //   if (navigation.error) return;
  //   projectsDispatch(path);
  // }, [path, projectsDispatch]);

  // TODO: fix error properView
  let properView = <p>ERRORR</p>;

  if (navigation.error) {
    properView = <p>Kappa keepo</p>;
  }

  if (projects.isLoading) {
    properView = <p>Loading...</p>;
  }

  if (projects[projectSection] && projects.success && viewType === 'list') {
    properView = (
      <ListView projects={projects[projectSection].data} path={path} />
    );
  }

  if (projects[projectSection] && projects.success && viewType === 'grid') {
    properView = (
      <GridView projects={projects[projectSection].data} path={path} />
    );
  }

  return <div className='jumbotron rounded-0 rounded-bottom'>{properView}</div>;
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
    viewType: state.topBar.viewType,
    navigation: state.navigation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    projectsDispatch: (path) => dispatch(getProjects(path)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewContainer);
