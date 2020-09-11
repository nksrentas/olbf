const intialState = {
  path: '/',
};

const navigationReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'SET_URL_PATH':
      return {
        path: action.payload,
      };
    default:
      return {
        path: intialState,
      };
  }
};

export default navigationReducer;
