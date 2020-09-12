import React from 'react';
import navigationRoutes from '../../configs/navigationRoutes';
import { connect } from 'react-redux';

import { Switch, Route, NavLink } from 'react-router-dom';

function Navigation(props) {
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
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    navigationFire: (url) => dispatch({ type: 'SET_URL_PATH', payload: url }),
  };
};

export default connect(null, mapDispatchToProps)(Navigation);
