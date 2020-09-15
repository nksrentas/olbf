import React from 'react';
import { Link } from 'react-router-dom';

const ListViewItem = (props) => {
  const { project, path } = props;
  return (
    <div className='row '>
      <div className='col-12 mt-3'>
        <div className='card p-4'>
          <div className='d-flex flex-wrap flex-md-nowrap'>
            <div className='img-square-wrapper'>
              <img
                className='img-fluid'
                src='http://via.placeholder.com/300x180'
                alt='Card  cap'
              />
            </div>
            <div className='card-body '>
              <Link
                to={`${path}/${project.subPath}`}
                className='stretched-link text-decoration-none'
              >
                <h5 className='card-title text-info'>{project.title}</h5>
              </Link>
              <h6 className='card-subtitle mb-2 text-muted'>
                {project.estimateTime}, {project.category}
              </h6>
              <p className='card-text mx-auto text-text-truncate'>
                {project.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListViewItem;
