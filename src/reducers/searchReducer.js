const initialState = [{ term: 'rew', time: '12:32 am' }];

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_SEARCH':
      return [...state, { term: action.payload, time: Date.now() }];

    default:
      return state;
  }
};

export default searchReducer;
