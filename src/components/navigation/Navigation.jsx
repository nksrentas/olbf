import React from 'react';
import navigationRoutes from '../../configs/navigationRoutes';

import { Switch, Route, NavLink } from 'react-router-dom';

const handleClick = (event) => {
  console.log(event.target.href);
  console.log(event.target.innerHTML);
};

export default function Navigation(props) {
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
