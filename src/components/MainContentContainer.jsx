import React from 'react';
import { connect } from 'react-redux';
import { setActiveLink } from '../actions/navigationActions';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import TopBarContainer from '../components/topBar/TopBarContainer';
import ViewContainer from './ViewContainer';
import ProjectViewContainer from './projectView/ProjectViewContainer';

const MainContentContainer = (props) => {
  const { error, navigationFire } = props;
  const { path } = useRouteMatch();

  if (error) {
    navigationFire({ error: true });
  }

  return (
    <div className='col-md-10'>
      <div className='row sticky-top'>
        <TopBarContainer />
      </div>

      <Switch>
        <Route exact path={path} component={ViewContainer} />
        <Route path={`${path}/:projectId`} component={ProjectViewContainer} />
      </Switch>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigationFire: (url) => dispatch(setActiveLink(url)),
  };
};

export default connect(null, mapDispatchToProps)(MainContentContainer);
