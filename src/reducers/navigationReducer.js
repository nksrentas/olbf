import { SET_ACTIVE_LINK } from '../actions/navigationActions';
import { pathToStateKey } from '../utils/reformPath';

const intialState = {
  path: '/',
  title: 'Latest Projects',
  cleanTitle: 'latestprojects',
};

const navigationReducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_LINK:
      let cleanTitle = pathToStateKey(action.payload.path);
      return {
        ...action.payload,
        cleanTitle,
      };
    default:
      return state;
  }
};

export default navigationReducer;
