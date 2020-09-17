import {
  GET_PROJECTS_ERROR,
  GET_PROJECTS_REQUEST,
  GET_PROJECTS_SUCCESS,
} from '../actions/projectActions';
import { pathToStateKey } from '../utils/reformPath';

// TODO: refactor key names
const initialState = {
  // javascript: [
  //   {
  //     id: 1,
  //     subPath: 'project-one',
  //     title: 'Javascript Project one',
  //     estimateTime: '10min',
  //     category: 'frontend master',
  //     text: 'blah blah blah',
  //   },
  //   {
  //     id: 2,
  //     subPath: 'project-two',
  //     title: 'Javascript Project two',
  //     estimateTime: '7min',
  //     category: 'hardware',
  //     text: 'blah blah blah',
  //   },
  //   {
  //     id: 3,
  //     subPath: 'project-three',
  //     title: 'Javascript Project three',
  //     estimateTime: '20min',
  //     category: 'hardware',
  //     text: 'blah blah blah',
  //   },
  //   {
  //     id: 4,
  //     subPath: 'project-four',
  //     title: 'Javascript Project four',
  //     estimateTime: '12min',
  //     category: 'frontend master',
  //     text: 'blah blah blah',
  //   },
  // ],
  // frontendmentor: [
  //   {
  //     id: 1,
  //     subPath: 'project-one',
  //     title: 'Frontend Mentor Project one',
  //     estimateTime: '10min',
  //     category: 'frontend master',
  //     text: 'blah blah blah',
  //   },
  //   {
  //     id: 2,
  //     subPath: 'project-two',
  //     title: 'Frontend Mentor Project two',
  //     estimateTime: '7min',
  //     category: 'hardware',
  //     text: 'blah blah blah',
  //   },
  //   {
  //     id: 3,
  //     subPath: 'project-three',
  //     title: 'Frontend Mentor Project three',
  //     estimateTime: '20min',
  //     category: 'hardware',
  //     text: 'blah blah blah',
  //   },
  //   {
  //     id: 4,
  //     subPath: 'project-four',
  //     title: 'Frontend Mentor Project four',
  //     estimateTime: '12min',
  //     category: 'frontend master',
  //     text: 'blah blah blah',
  //   },
  // ],
  // hardware: [
  //   {
  //     id: 1,
  //     subPath: 'project-one',
  //     title: 'Hardware Project one',
  //     estimateTime: '10min',
  //     category: 'frontend master',
  //     text: 'blah blah blah',
  //   },
  //   {
  //     id: 2,
  //     subPath: 'project-two',
  //     title: 'Hardware Project two',
  //     estimateTime: '7min',
  //     category: 'hardware',
  //     text: 'blah blah blah',
  //   },
  //   {
  //     id: 3,
  //     subPath: 'project-three',
  //     title: 'Hardware Project three',
  //     estimateTime: '20min',
  //     category: 'hardware',
  //     text: 'blah blah blah',
  //   },
  //   {
  //     id: 4,
  //     subPath: 'project-four',
  //     title: 'Hardware Project four',
  //     estimateTime: '12min',
  //     category: 'frontend master',
  //     text: 'blah blah blah',
  //   },
  // ],
  // latestprojects: [
  //   {
  //     id: 1,
  //     subPath: 'project-one',
  //     title: 'Latest Projects Project one',
  //     estimateTime: '10min',
  //     category: 'frontend master',
  //     text: 'blah blah blah',
  //   },
  //   {
  //     id: 2,
  //     subPath: 'project-two',
  //     title: 'Latest Projects Project two',
  //     estimateTime: '7min',
  //     category: 'hardware',
  //     text: 'blah blah blah',
  //   },
  //   {
  //     id: 3,
  //     subPath: 'project-three',
  //     title: 'Latest Projects Project three',
  //     estimateTime: '20min',
  //     category: 'hardware',
  //     text: 'blah blah blah',
  //   },
  //   {
  //     id: 4,
  //     subPath: 'project-four',
  //     title: 'Latest Projects Project four',
  //     estimateTime: '12min',
  //     category: 'frontend master',
  //     text: 'blah blah blah',
  //   },
  // ],
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS_REQUEST:
      return {
        ...state,
        ...action.payload.fetchState,
      };
    case GET_PROJECTS_SUCCESS:
      let objectKey = pathToStateKey(action.payload.type);

      // store fetched data
      let data = state[objectKey]
        ? state[objectKey].concat(action.payload.data)
        : action.payload.data;
      state[objectKey] = data;

      return {
        ...state,
        ...action.payload.fetchState,
      };
    case GET_PROJECTS_ERROR:
      return {
        ...action.payload.fetchState,
      };
    default:
      return state;
  }
};

export default projectsReducer;
