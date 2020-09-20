import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProject } from '../../actions/projectActions';
import { useParams } from 'react-router-dom';
import ProjectView from './ProjectView';
import TopBarContainer from '../topBar/TopBarContainer';
import FontSizeChanger from '../topBar/FontSizeChanger';

const ProjectViewContainer = (props) => {
  const { projectDispatch, project } = props;
  const { projectId } = useParams();

  useEffect(() => {
    projectDispatch(projectId);
  }, [projectId, projectDispatch]);

  let properView = <p>Error</p>;

  if (project.isLoading) {
    properView = <p>Loading...</p>;
  }

  if (project.success) {
    properView = <ProjectView data={project.data} />;
  }

  return (
    <div>
      <div className='row sticky-top'>
        <TopBarContainer
          title={project.title}
          fetchState={project.fetchState}
          renderExtra={() => <FontSizeChanger />}
        />
      </div>
      <div className='jumbotron rounded-0 rounded-bottom'>{properView}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    project: state.project,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    projectDispatch: (projectID) => dispatch(getProject(projectID)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectViewContainer);
