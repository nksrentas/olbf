import React from 'react';

const ListViewItem = (props) => {
  return (
    <div className='row'>
      <div className='col-12 mt-3'>
        <div className='card'>
          <div className='d-flex flex-wrap flex-md-nowrap'>
            <div className='img-square-wrapper'>
              <img src='http://via.placeholder.com/300x180' alt='Card  cap' />
            </div>
            <div className='card-body'>
              <h5 className='card-title text-info'>Project title</h5>
              <h6 className='card-subtitle mb-2 text-muted'>10min, Category</h6>
              <p className='card-text mx-auto text-text-truncate'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className='card-footer'>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListViewItem;
