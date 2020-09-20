export const GET_PROJECT_REQUEST = 'GET_PROJECT_REQUEST';
export const GET_PROJECT_SUCCESS = 'GET_PROJECT_SUCCESS';
export const GET_PROJECT_ERROR = 'GET_PROJECT_ERROR';

export const getProject = (id) => {
  return (dispatch, getState) => {
    // fake database call at `project id`
    dispatch({
      type: GET_PROJECT_REQUEST,
      payload: { fetchState: { isLoading: true, success: null, error: null } },
    });

    setTimeout(() => {
      dispatch({
        type: GET_PROJECT_SUCCESS,
        payload: {
          fetchState: {
            isLoading: false,
            success: true,
            error: false,
          },
          title: id,
          data: [
            {
              id: 1,
              title: 'HAHAHAHAHAHAHAHA',
              estimateTime: '10min',
              category: 'kappa keepo',
              text: 'blah blah blah',
            },
            {
              id: 2,
              title: 'v2 HAHAHAHHA',
              estimateTime: '10min',
              category: 'kappa keepo',
              text: 'blah blah blah',
            },
          ],
        },
      });
    }, 2000);
  };
};
