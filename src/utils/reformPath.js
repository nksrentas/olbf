import navigationRoutes from '../configs/navigationRoutes';

const cleanPathTitle = ({ title }) => {
  return title.replace(/\s/g, '').toLowerCase();
};

export const pathToStateKey = (path) => {
  let routeTitle = navigationRoutes.find((route) => {
    return route.path === path;
  });
  return cleanPathTitle(routeTitle);
};

export const pathToTitle = (path, array) => {
  let routeObj = array.filter((route) => {
    return route.path === path;
  });

  // check if route is 404
  return routeObj.length ? routeObj.shift().title : false;
};
