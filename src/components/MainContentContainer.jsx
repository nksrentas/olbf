import React from 'react';
import { connect } from 'react-redux';
import TopBarContainer from '../components/topBar/TopBarContainer';
import ViewContainer from './ViewContainer';
import { setActiveLink } from '../actions/navigationActions';

const MainContentContainer = (props) => {
  const { error, navigationFire } = props;
  if (error) {
    navigationFire({ error: true });
  }
  return (
    <div className='col-md-10'>
      <div className='row sticky-top'>
        <TopBarContainer />
      </div>
      <ViewContainer />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigationFire: (url) => dispatch(setActiveLink(url)),
  };
};

export default connect(null, mapDispatchToProps)(MainContentContainer);
