import React from 'react';
import { connect } from 'react-redux';
import { getProjects } from './actions/projectActions';
import Navigation from './components/navigation/Navigation';
import TopBarContainer from './components/topBar/TopBarContainer';

import GridViewContainer from './components/gridView/GridViewContainer';
import ListViewContainer from './components/listView/ListViewContainer';

function App(props) {
  const { viewType } = props;
  return (
    <div className='container'>
      <div className='row pt-4'>
        <div className='col-2'>
          <h1 className='display-4'>OLBF</h1>
        </div>
        <div className='col-1 ml-auto align-text-bottom'>
          <h1>^</h1>
        </div>
      </div>
      <div className='row'>
        <TopBarContainer />
      </div>
      <div className='row '>
        <div className='col-md-2'>
          <Navigation />
        </div>
        <div className='col-md-10'>
          <div className='jumbotron rounded-0 rounded-bottom'>
            {viewType === 'list' ? (
              <ListViewContainer />
            ) : (
              <GridViewContainer />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownState) => {
  return {
    viewType: state.topBar.viewType,
  };
};

export default connect(mapStateToProps)(App);
