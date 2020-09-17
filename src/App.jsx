import React from 'react';
import Navigation from './components/navigation/Navigation';
import MainContentContainer from './components/MainContentContainer';
import navigationRoutes, { wrongRoute } from './configs/navigationRoutes';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
function App() {
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
        <Switch>
          {navigationRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              component={MainContentContainer}
            />
          ))}

          {/* <Route
            exact
            key={index + '.' + route.path}
            path={`${route.path}/:projectId`}
          ></Route> */}

          {/* 404 route */}
          <Route exact key='404' path={wrongRoute.path}>
            <MainContentContainer error={true} />
          </Route>
          <Route
            path='*'
            render={() => {
              return <Redirect to='you-are-lost' />;
            }}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
