import React, { useEffect } from 'react';
import navigationRoutes from '../../configs/navigationRoutes';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import Socials from '../Socials';

import { setActiveLink } from '../../actions/navigationActions';
import { setLoadToTrue } from '../../actions/projectsActions';
import { pathToTitle } from '../../utils/reformPath';

function Navigation(props) {
  const {
    navigationDispatch,
    setLoadToTrue,
    location: { pathname: path },
    titleRedux,
  } = props;

  // gia to refresh
  useEffect(() => {
    let title = pathToTitle(path, navigationRoutes);
    if (title) {
      navigationDispatch({
        path,
        title,
      });
    }
  }, [navigationDispatch, path]);

  const handleClick = (event) => {
    navigationDispatch({
      path,
      titleRedux,
    });
    setLoadToTrue();
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

const mapStateToProps = (state) => {
  return {
    titleRedux: state.navigation.title,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigationDispatch: (path) => dispatch(setActiveLink(path)),
    setLoadToTrue: () => dispatch(setLoadToTrue()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Navigation)
);
