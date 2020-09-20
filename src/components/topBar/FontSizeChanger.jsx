import React, { useState } from 'react';

const style = 'd-inline-block pr-3 ';

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
      <span className={style}>
        <h5
          className='text-dark my-auto'
          // onClick={handleClick.bind(this, 'smaller')}
          onClick={handleClick.bind(this, 'decrease')}
        >
          A-
        </h5>
      </span>
      <span className={style}>
        <h4
          className='text-dark my-auto'
          onClick={handleClick.bind(this, 'increase')}
        >
          A+
        </h4>
      </span>
    </div>
  );
};

export default FontSizeChanger;
