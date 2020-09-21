import React, { useState } from 'react';

const FontSizeChanger = () => {
  const [fontSize, setFontSize] = useState({
    currentValue: 1,
    increase: 0.1,
    decrease: -0.1,
  });

  const handleClick = (type) => {
    const targetBlock = document.querySelector('#targetedText');
    targetBlock.style.fontSize = fontSize.currentValue + fontSize[type] + 'em';
    setFontSize({
      ...fontSize,
      currentValue: fontSize.currentValue + fontSize[type],
    });
  };

  return (
    <div>
      <button
        type='button'
        className='btn btn-default btn-circle px-0 align-baseline pr-2'
      >
        <h5
          className='text-dark mb-0 '
          onClick={handleClick.bind(this, 'decrease')}
        >
          A-
        </h5>
      </button>
      <button
        type='button'
        className='btn btn-default btn-circle px-0 align-baseline'
      >
        <h4
          className='text-dark mb-0'
          onClick={handleClick.bind(this, 'increase')}
        >
          A+
        </h4>
      </button>
    </div>
  );
};

export default FontSizeChanger;
