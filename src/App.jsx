import React from 'react';
import Navigation from './components/navigation/Navigation';
import TopBarContainer from './components/topBar/TopBarContainer';

import ViewContainer from './components/ViewContainer';

function App(props) {
  return (
    <div className='container'>
      <div className='row pt-4'>
        <div className='col-2'>
          <h1 className='display-4 position-sticky'>OLBF</h1>
        </div>
        <div className='col-1 ml-auto align-text-bottom'>
          <h1>^</h1>
        </div>
      </div>

      <div className='row '>
        <div className='col-md-2'>
          <Navigation />
        </div>

        {/* TODO: refactor to individual component */}
        <div className='col-md-10'>
          <div className='row sticky-top'>
            <TopBarContainer />
          </div>
          <ViewContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
