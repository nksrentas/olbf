import React from 'react';
import { connect } from 'react-redux';
import { getProject } from '../../actions/projectActions';
import { useParams } from 'react-router-dom';

const ProjectContainer = (props) => {
  let { projectId } = useParams();

  return <div>Project contaienr {projectId}</div>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    project: (projectID) => dispatch(getProject(projectID)),
  };
};
export default connect(null, mapDispatchToProps)(ProjectContainer);
