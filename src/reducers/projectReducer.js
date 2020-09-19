import {
  GET_PROJECT_ERROR,
  GET_PROJECT_REQUEST,
  GET_PROJECT_SUCCESS,
} from '../actions/projectActions.js';

const initialState = {};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECT_REQUEST:
      return {
        ...state,
        ...action.payload.fetchState,
      };
    case GET_PROJECT_SUCCESS:
      return {
        data: action.payload.data,
        ...state,
        ...action.payload.fetchState,
      };
    case GET_PROJECT_ERROR:
      return {
        ...state,
        ...action.payload.fetchState,
      };
    default:
      return state;
  }
};

export default projectReducer;
