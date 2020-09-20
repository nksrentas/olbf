import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ListView from './listView/ListView';
import GridView from './gridView/GridView';
import { getProjects } from '../actions/projectsActions';
import TopBarContainer from '../components/topBar/TopBarContainer';

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

  return (
    <div>
      <div className='row sticky-top'>
        <TopBarContainer
          title={projects.title}
          fetchState={projects.fetchState}
        />
      </div>
      <div className='jumbotron rounded-0 rounded-bottom'>{properView}</div>
    </div>
  );
  //  return <div className='jumbotron rounded-0 rounded-bottom'>{properView}</div>;
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
