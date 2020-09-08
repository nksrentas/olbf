const initialState = [
  { id: 1, text: 'blah blah blah' },
  { id: 2, text: 'blah blah blah' },
  { id: 3, text: 'blah blah blah' },
  { id: 4, text: 'blah blah blah' },
];

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PROJECTS':
      console.log('=====Projects reducer: ', state, action);
      return [...state, { id: Math.random(), text: action.payload }];
    default:
      return state;
  }
};

export default projectsReducer;
