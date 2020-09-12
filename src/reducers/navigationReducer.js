import { SET_ACTIVE_LINK } from '../actions/navigationActions';

const intialState = {
  path: '/',
  title: 'Home',
};

const navigationReducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_LINK:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default navigationReducer;
