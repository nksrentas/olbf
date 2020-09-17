const navigationRoutes = [
  {
    path: '/',
    title: 'Latest Projects',
    exact: 'true',
  },
  {
    path: '/javascript',
    title: 'Javascript',
  },
  {
    path: '/frontend-mentor',
    title: 'FrontEnd Mentor',
  },
  {
    path: '/hardware',
    title: 'Hardware',
  },
];

export const wrongRoute = {
  path: '/you-are-lost',
  title: '404',
};

export default navigationRoutes;
