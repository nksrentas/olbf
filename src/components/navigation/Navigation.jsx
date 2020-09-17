import React, { useEffect } from 'react';
import navigationRoutes from '../../configs/navigationRoutes';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import Socials from '../Socials';

import { setActiveLink } from '../../actions/navigationActions';
import { getProjects } from '../../actions/projectActions';
import { pathToTitle } from '../../utils/reformPath';

function Navigation(props) {
  const refreshedPathName = props.location.pathname;
  const { navigationFire } = props;
  const { projectsFire } = props;

  // gia to refresh
  useEffect(() => {
    let title = pathToTitle(refreshedPathName, navigationRoutes);
    if (title) {
      navigationFire({
        path: refreshedPathName,
        title,
      });
      projectsFire(refreshedPathName);
    }
  }, []);

  const handleClick = (event) => {
    props.navigationFire({
      path: event.target.getAttribute('href'),
      title: event.target.innerHTML,
    });
    projectsFire(event.target.getAttribute('href'));
  };

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
