import {
  SET_ACTIVE_LINK,
  SET_ACTIVE_LINK_404,
} from '../actions/navigationActions';

const intialState = {
  path: '/',
  title: 'Latest Projects',
  cleanTitle: 'latestprojects',
  error: false,
};

const navigationReducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_LINK:
      return {
        ...state,
        error: false,
        ...action.payload,
      };
    case SET_ACTIVE_LINK_404:
      return {
        path: '/',
        title: 'You are lost - 404',
        cleanTitle: null,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default navigationReducer;
