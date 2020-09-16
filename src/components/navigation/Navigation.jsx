import React, { useEffect } from 'react';
import navigationRoutes from '../../configs/navigationRoutes';
import { connect } from 'react-redux';
import { Switch, Route, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

import { setActiveLink } from '../../actions/navigationActions';
import { getProjects } from '../../actions/projectActions';
import Socials from '../Socials';

const pathToTitle = (path, array) => {
  let routeObj = array.filter((route) => {
    return route.path === path;
  });

  // check if route is 404
  return routeObj.length ? routeObj.shift().title : '404';
};

function Navigation(props) {
  const refreshedPathName = props.location.pathname;
  const { navigationFire } = props;
  const { projectsFire } = props;

  useEffect(() => {
    navigationFire({
      path: refreshedPathName,
      title: pathToTitle(refreshedPathName, navigationRoutes),
    });
    projectsFire(refreshedPathName);
  }, []);

  const handleClick = (event) => {
    props.navigationFire({
      path: event.target.getAttribute('href'),
      title: event.target.innerHTML,
    });
    props.projectsFire(event.target.getAttribute('href'));
  };

  function NoMatch() {
    return (
      <div>
        <h3>
          No match for <p>kappa</p>
        </h3>
      </div>
    );
  }

  return (
    <>
      <div
        className='nav flex-column nav-pills mt-5'
        id='v-pills-tab'
        role='tablist'
        aria-orientation='vertical'
      >
        {navigationRoutes.map((route, index) => (
          <NavLink
            key={index}
            to={route.path}
            exact={route.exact ? true : false}
            className={'nav-link'}
            onClick={handleClick}
          >
            {route.title}
          </NavLink>
        ))}
        <Switch>
          {navigationRoutes.map((route, index) => (
            <Route exact key={index} path={route.path} />
          ))}
          <Route path='*'>
            <NoMatch />
          </Route>
        </Switch>
      </div>
      <Socials orientation='row' />
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    navigationFire: (url) => dispatch(setActiveLink(url)),
    projectsFire: (path) => dispatch(getProjects(path)),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Navigation));
