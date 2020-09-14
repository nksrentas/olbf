import React from 'react';

const GridViewItem = (props) => {
  const { project } = props;
  return (
    <div className='col-md-6'>
      <div className='card'>
        <div className='card-body'>
          <div className='card-title'>{project.title}</div>
          <p className='card-text'>{project.text}</p>
        </div>
      </div>
    </div>
  );
};

export default GridViewItem;
