const intialState = {
  path: '/',
  title: 'Home',
};

const navigationReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'SET_URL_PATH':
      console.log('NAVIGATION REDUCER: ', action);
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
