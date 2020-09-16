import React from 'react';
import { connect } from 'react-redux';
import ListView from './listView/ListView';
import GridView from './gridView/GridView';

const ViewContainer = (props) => {
  const { viewType, projects, path, projectSection } = props;
  return (
    <div className='jumbotron rounded-0 rounded-bottom'>
      {viewType === 'list' ? (
        <ListView projects={projects[projectSection]} path={path} />
      ) : (
        <GridView projects={projects[projectSection]} path={path} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
    path: state.navigation.path,
    projectSection: state.navigation.cleanTitle,
    viewType: state.topBar.viewType,
  };
};

export default connect(mapStateToProps)(ViewContainer);
