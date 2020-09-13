import React, { useEffect } from 'react';
import navigationRoutes from '../../configs/navigationRoutes';
import { connect } from 'react-redux';
import { Switch, Route, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

import { setActiveLink } from '../../actions/navigationActions';
import Socials from '../Socials';

const pathToTitle = (path, array) => {
  let routeObj = array.filter((route) => {
    return route.path === path;
  });

  return routeObj.shift().title || '';
};

function Navigation(props) {
  const refreshedPathName = props.location.pathname;
  const test = props.navigationFire;
  useEffect(() => {
    test({
      path: refreshedPathName,
      title: pathToTitle(refreshedPathName, navigationRoutes),
    });
  }, []);

  const handleClick = (event) => {
    props.navigationFire({
      path: event.target.href,
      title: event.target.innerHTML,
    });
  };

  return (
    <div>
      <div
        className='nav flex-column nav-pills'
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
        </Switch>

        <Socials orientation='row' />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    navigationFire: (url) => dispatch(setActiveLink(url)),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Navigation));
