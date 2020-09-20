import React from 'react';

const style = 'd-inline-block pr-3 ';

const FontSizeChanger = () => {
  return (
    <div>
      <span className={style}>
        <h5 className='text-dark my-auto'>A- </h5>
      </span>
      <span className={style}>
        <h4 className='text-dark my-auto'>A+</h4>
      </span>
    </div>
  );
};

export default FontSizeChanger;
