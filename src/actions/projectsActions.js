import { pathToObjectKey, pathToTitle } from '../utils/reformPath';
import navigationRoutes from '../configs/navigationRoutes';

export const GET_PROJECTS_REQUEST = 'GET_PROJECTS_REQUEST';
export const GET_PROJECTS_ERROR = 'GET_PROJECTS_ERROR';
export const GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS';
export const SET_PROJECT_LOAD_TRUE = 'SET_PROJECT_LOAD_TRUE';

export const getProjects = (path) => {
  return (dispatch, getState) => {
    // fake database call at `type` prop
    dispatch({
      type: GET_PROJECTS_REQUEST,
      payload: {
        fetchState: {
          isLoading: true,
          success: null,
          error: null,
        },
      },
    });

    setTimeout(() => {
      dispatch({
        type: GET_PROJECTS_SUCCESS,
        payload: {
          fetchState: {
            isLoading: false,
            success: true,
            error: false,
          },
          path,
          objectKey: pathToObjectKey(path, navigationRoutes),
          title: pathToTitle(path, navigationRoutes),
          data: [
            {
              id: 1,
              subPath: 'FETCHED-project-one',
              title: path + ' FETCHED Project one',
              estimateTime: '10min',
              category: 'kappa keepo',
              text: 'blah blah blah',
            },
          ],
        },
      });
    }, 2000);

    // TODO: add `error` dispatch
  };
};

export const setLoadToTrue = () => {
  return {
    type: SET_PROJECT_LOAD_TRUE,
    payload: {
      fetchState: {
        isLoading: true,
        success: null,
        error: null,
      },
    },
  };
};
