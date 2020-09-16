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
