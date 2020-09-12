import React from 'react';

import test from '../../test.svg';

const ListView = () => {
  return (
    <div className='col-md-12'>
      <div className='card flex-row flex-wrap'>
        <div className='card-header border-0'>
          <img src={test} alt='' />
        </div>
        <div className='card-block px-2'>
          <h4 className='card-title'>Title</h4>
          <p className='card-text'>Description</p>
          <a href='/' class='btn btn-primary'>
            BUTTON
          </a>
        </div>
        <div className='w-100'></div>
        <div className='card-footer w-100 text-muted'>
          Footer stating cats are CUTE little animals
        </div>
      </div>
    </div>
  );
};

export default ListView;
