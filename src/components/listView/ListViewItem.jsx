import React from 'react';

import test from '../../test.svg';

const ListViewItem = (props) => {
  return (
    // <div class='container-fluid'>
    <div class='row'>
      <div class='col-12 mt-3'>
        <div class='card'>
          <div class='d-flex flex-wrap flex-md-nowrap'>
            {/* <div class='card-horizontal flex-md-nowrap'> */}
            <div class='img-square-wrapper'>
              <img src='http://via.placeholder.com/300x180' alt='Card  cap' />
            </div>
            <div class='card-body'>
              <h5 class='card-title text-info'>Project title</h5>
              <h6 className='card-subtitle mb-2 text-muted'>10min, Category</h6>
              <p class='card-text mx-auto text-text-truncate'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div class='card-footer'>
            <small class='text-muted'>Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default ListViewItem;
