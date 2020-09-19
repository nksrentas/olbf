import React from 'react';
import navigationRoutes from '../../configs/navigationRoutes';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import Socials from '../Socials';

import { setLoadToTrue } from '../../actions/projectsActions';

function Navigation(props) {
  const { setLoadToTrue } = props;

  const handleClick = (event) => {
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

      <div className='my-3'>
        <img
          src='https://via.placeholder.com/120x240?text=Vertical+Banner'
          alt='ad banner'
        />
      </div>
      <Socials orientation='row' />
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLoadToTrue: () => dispatch(setLoadToTrue()),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Navigation));
