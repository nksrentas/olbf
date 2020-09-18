import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProject } from '../../actions/projectActions';
import { useParams } from 'react-router-dom';
import ProjectView from './ProjectView';

const ProjectViewContainer = (props) => {
  const { projectDispatch, project } = props;
  const { projectId } = useParams();

  useEffect(() => {
    projectDispatch(getProject(projectId));
  }, []);

  if (project.isLoading) {
    return <p>Loading...</p>;
  }

  return <ProjectView data={project.data} />;
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
