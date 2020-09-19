import {
  GET_PROJECTS_ERROR,
  GET_PROJECTS_REQUEST,
  GET_PROJECTS_SUCCESS,
  SET_PROJECT_LOAD_TRUE,
} from '../actions/projectsActions.js';

const initialState = {};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS_REQUEST:
      return {
        ...state,
        ...action.payload.fetchState,
      };
    case GET_PROJECTS_SUCCESS:
      const objectKey = action.payload.objectKey;

      let finalDataArray = state[objectKey]
        ? state[objectKey]['data'].concat(action.payload.data)
        : action.payload.data;

      state[objectKey] = {
        data: finalDataArray,
        path: action.payload.path,
        objectKey: action.payload.objectKey,
        title: action.payload.title,
      };
      return {
        ...state,
        // kai exw gia na xerw pio `projects` section einai open
        objectKey: action.payload.objectKey,
        // gia ton idio logo me panw
        title: action.payload.title,
        ...action.payload.fetchState,
      };
    case GET_PROJECTS_ERROR:
      return {
        ...state,
        ...action.payload.fetchState,
      };
    case SET_PROJECT_LOAD_TRUE:
      return {
        ...state,
        ...action.payload.fetchState,
      };
    default:
      return state;
  }
};

export default projectsReducer;
