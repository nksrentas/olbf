const initialState = [
  {
    id: 1,
    subPath: 'project-one',
    title: 'Project one',
    estimateTime: '10min',
    category: 'frontend master',
    text: 'blah blah blah',
  },
  {
    id: 2,
    subPath: 'project-two',
    title: 'Project two',
    estimateTime: '7min',
    category: 'hardware',
    text: 'blah blah blah',
  },
  {
    id: 3,
    subPath: 'project-three',
    title: 'Project three',
    estimateTime: '20min',
    category: 'hardware',
    text: 'blah blah blah',
  },
  {
    id: 4,
    subPath: 'project-four',
    title: 'Project four',
    estimateTime: '12min',
    category: 'frontend master',
    text: 'blah blah blah',
  },
];

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PROJECTS':
      return [...state, { id: Math.random(), text: action.payload }];
    default:
      return state;
  }
};

export default projectsReducer;
