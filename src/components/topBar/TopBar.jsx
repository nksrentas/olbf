import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faThLarge,
  faThList,
} from '@fortawesome/free-solid-svg-icons';

const TopBar = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { path, title } = props.data;
  return (
    <div className='col-md-10 ml-auto '>
      <nav className='navbar navbar-expand-lg navbar-light bg-light justify-content-between rounded-top'>
        <a className='navbar-brand' href='/'>
          {title}
        </a>
        <div>
          <FontAwesomeIcon icon={faSearch} size='2x' />
          <FontAwesomeIcon icon={faThLarge} size='2x' />
          <FontAwesomeIcon icon={faThList} size='2x' />
        </div>
      </nav>
    </div>
  );
};

export default TopBar;
