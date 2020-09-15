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
            <div className='card-body d-flex pt-0 pb-0 flex-column justify-content-around w-50'>
              <div>
                <Link
                  to={`${path}/${project.subPath}`}
                  className='stretched-link text-decoration-none'
                >
                  <h5 className='card-title text-info'>{project.title}</h5>
                </Link>
                <h6 className='card-subtitle mb-2 text-muted'>
                  {project.estimateTime}, {project.category}
                </h6>
              </div>
              <p className='card-text  text-truncate'>
                {project.text}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam quisquam temporibus maiores illo nobis distinctio
                minima quia placeat animi! Porro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListViewItem;
