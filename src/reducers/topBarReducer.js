const intialState = {
  activeTitleLink: 'Home',
  viewType: 'list',
};

const topBarReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'SET_VIEW':
      return {
        ...state,
        viewType: action.payload.viewType,
      };
    case 'GET_ACTIVE_LINK_TITLE':
      return {
        activeTitleLink: state.activeTitleLink,
      };
    default:
      return state;
  }
};

export default topBarReducer;
