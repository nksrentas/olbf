import { combineReducers } from 'redux';
import projectsReducer from './projectsReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  projects: projectsReducer,
  search: searchReducer,
});

export default rootReducer;
