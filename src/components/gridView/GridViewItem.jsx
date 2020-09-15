import React from 'react';
import { Link } from 'react-router-dom';

const GridViewItem = (props) => {
  const { project, path } = props;
  return (
    <div className='col-md-6'>
      <div className='card'>
        <div className='card-body'>
          <Link
            to={`${path}/${project.subPath}`}
            className='card-title stretched-link text-decoration-none'
          >
            {project.title}
          </Link>
          <p className='card-text'>{project.text}</p>
        </div>
      </div>
    </div>
  );
};

export default GridViewItem;
