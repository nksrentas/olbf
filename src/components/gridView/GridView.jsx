import React from 'react';

const GridView = (props) => {
  return (
    <div className='row justify-content-md-center'>
      <div className='col-md-6'>
        <div className='card'>
          <div className='card-body'>
            <div className='card-title'>Card Title</div>
            <p className='card-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className='col-md-6'>
        <div className='card'>
          <div className='card-body'>
            <div className='card-title'>Card Title</div>
            <p className='card-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridView;
