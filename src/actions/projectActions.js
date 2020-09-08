export const GET_PROJECTS = 'GET_PROJECTS';
export const GET_PROJECTS_ERROR = 'GET_PROJECTS_ERROR';
export const GET_PROJECT = 'GET_PROJECT';
export const GET_PROJECT_ERROR = 'GET_PROJECT_ERROR';

export const getProjects = () => {
  return {
    type: GET_PROJECTS,
    payload: '',
  };
};

export const getProject = (id) => {
  return {
    type: GET_PROJECT,
    payload: id,
  };
};
