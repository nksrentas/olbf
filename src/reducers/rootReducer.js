import { combineReducers } from 'redux';
import projectsReducer from './projectsReducer';
import searchReducer from './searchReducer';
import navigationReducer from './navigationReducer';
import topBarReducer from './topBarReducer';
import projectReducer from './projectReducer';

const rootReducer = combineReducers({
  projects: projectsReducer,
  search: searchReducer,
  navigation: navigationReducer,
  topBar: topBarReducer,
  project: projectReducer,
});

export default rootReducer;
