import React from 'react';
import { connect } from 'react-redux';
import { getProjects } from './actions/projectActions';

function App(props) {
  return (
    <div className='container'>
      <div className='row pt-4'>
        <div className='col-2'>
          <h1 className='display-4'>OLBF</h1>
        </div>
        <div className='col-1 ml-auto align-text-bottom'>
          <h1>2</h1>
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-md-2'>
          <div
            class='nav flex-column nav-pills'
            id='v-pills-tab'
            role='tablist'
            aria-orientation='vertical'
          >
            <a
              class='nav-link active'
              id='v-pills-home-tab'
              data-toggle='pill'
              href='#v-pills-home'
              role='tab'
              aria-controls='v-pills-home'
              aria-selected='true'
            >
              Home
            </a>
            <a
              class='nav-link'
              id='v-pills-profile-tab'
              data-toggle='pill'
              href='#v-pills-profile'
              role='tab'
              aria-controls='v-pills-profile'
              aria-selected='false'
            >
              Profile
            </a>
            <a
              class='nav-link'
              id='v-pills-messages-tab'
              data-toggle='pill'
              href='#v-pills-messages'
              role='tab'
              aria-controls='v-pills-messages'
              aria-selected='false'
            >
              Messages
            </a>
            <a
              class='nav-link'
              id='v-pills-settings-tab'
              data-toggle='pill'
              href='#v-pills-settings'
              role='tab'
              aria-controls='v-pills-settings'
              aria-selected='false'
            >
              Settings
            </a>
          </div>
        </div>
        <div className='col-md-10'>
          <nav class='navbar navbar-expand-lg navbar-light bg-light'>
            <a class='navbar-brand' href='#'>
              Navbar
            </a>
            <button
              class='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span class='navbar-toggler-icon'></span>
            </button>
            <div class='collapse navbar-collapse' id='navbarNav'>
              <ul class='navbar-nav'>
                <li class='nav-item active'>
                  <a class='nav-link' href='#'>
                    Home <span class='sr-only'>(current)</span>
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='#'>
                    Features
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='#'>
                    Pricing
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link disabled' href='#'>
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className='jumbotron'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='card'></div>
                <div className='card-body'>
                  <div className='card-title'>Card Title</div>
                  <p class='card-text'>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href='#' class='btn btn-primary'>
                    Go somewhere
                  </a>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='card'></div>
                <div className='card-body'>
                  <div className='card-title'>Card Title</div>
                  <p class='card-text'>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href='#' class='btn btn-primary'>
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>

            <div className='row justify-content-md-center'>
              <div className='col-md-6'>
                <div className='card'></div>
                <div className='card-body'>
                  <div className='card-title'>Card Title</div>
                  <p class='card-text'>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href='#' class='btn btn-primary'>
                    Go somewhere
                  </a>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='card'></div>
                <div className='card-body'>
                  <div className='card-title'>Card Title</div>
                  <p class='card-text'>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href='#' class='btn btn-primary'>
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>

            <div className='row justify-content-md-center'>
              <div className='col-md-6'>
                <div className='card'></div>
                <div className='card-body'>
                  <div className='card-title'>Card Title</div>
                  <p class='card-text'>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href='#' class='btn btn-primary'>
                    Go somewhere
                  </a>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='card'></div>
                <div className='card-body'>
                  <div className='card-title'>Card Title</div>
                  <p class='card-text'>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href='#' class='btn btn-primary'>
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownState) => {
  return {
    kappaProps: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    kappaDispatch: dispatch(getProjects()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
