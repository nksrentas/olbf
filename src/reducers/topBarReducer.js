import { SET_VIEW } from '../actions/topBarActions';

const intialState = {
  activeTitleLink: 'Home',
  viewType: 'list',
};

const topBarReducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_VIEW:
      return {
        ...state,
        viewType: action.payload,
      };
    default:
      return state;
  }
};

export default topBarReducer;
