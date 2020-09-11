import React from 'react';
import { connect } from 'react-redux';
import { getProjects } from './actions/projectActions';
import Navigation from './components/navigation/Navigation';
import test from './test.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faThLarge,
  faThList,
} from '@fortawesome/free-solid-svg-icons';

function App(props) {
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
      <div className='row mt-3'>
        <div className='col-md-2'>
          <Navigation />
        </div>
        <div className='col-md-10'>
          <nav className='navbar navbar-expand-lg navbar-light bg-light justify-content-between rounded-top'>
            <a className='navbar-brand' href='/'>
              Navbar
            </a>
            <div>
              <FontAwesomeIcon icon={faSearch} size='2x' />
              <FontAwesomeIcon icon={faThLarge} size='2x' />
              <FontAwesomeIcon icon={faThList} size='2x' />
            </div>
          </nav>
          <div className='jumbotron rounded-0 rounded-bottom'>
            <div className='row'>
              <div className='col-md-12'>
                <div class='card flex-row flex-wrap'>
                  <div class='card-header border-0'>
                    <img src={test} alt='' />
                  </div>
                  <div class='card-block px-2'>
                    <h4 class='card-title'>Title</h4>
                    <p class='card-text'>Description</p>
                    <a href='#' class='btn btn-primary'>
                      BUTTON
                    </a>
                  </div>
                  <div class='w-100'></div>
                  <div class='card-footer w-100 text-muted'>
                    Footer stating cats are CUTE little animals
                  </div>
                </div>
              </div>
            </div>

            <div className='row justify-content-md-center'>
              <div className='col-md-6'>
                <div className='card'>
                  <div className='card-body'>
                    <div className='card-title'>Card Title</div>
                    <p className='card-text'>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='card'>
                  <div className='card-body'>
                    <div className='card-title'>Card Title</div>
                    <p className='card-text'>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='row justify-content-md-center'>
              <div className='col-md-6'>
                <div className='card'>
                  <div className='card-body'>
                    <div className='card-title'>Card Title</div>
                    <p className='card-text'>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='card'>
                  <div className='card-body'>
                    <div className='card-title'>Card Title</div>
                    <p className='card-text'>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
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
