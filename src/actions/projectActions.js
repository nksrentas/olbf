export const GET_PROJECTS = 'GET_PROJECTS';
export const GET_PROJECTS_ERROR = 'GET_PROJECTS_ERROR';
export const GET_PROJECT = 'GET_PROJECT';
export const GET_PROJECT_ERROR = 'GET_PROJECT_ERROR';

export const getProjects = (type) => {
  return (dispatch, getState) => {
    // fake database call at `type` prop
    setTimeout(() => {
      dispatch({
        type: GET_PROJECTS,
        payload: {
          type,
          data: [
            {
              id: 1,
              subPath: 'FETCHED project-one',
              title: 'FETCHED Project one',
              estimateTime: '10min',
              category: 'kappa keepo',
              text: 'blah blah blah',
            },
          ],
        },
      });
    }, 1000);
  };
};

export const getProject = (id) => {
  return {
    type: GET_PROJECT,
    payload: id,
  };
};
