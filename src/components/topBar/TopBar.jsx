import React from 'react';
import TopBarIcons from './TopBarIcons';

const TopBar = (props) => {
  console.log(props);
  const {
    data: { path, title, cleanTitle, error },
  } = props;

  return (
    <div className='col-md-12 ml-auto '>
      <nav className='navbar navbar-expand-lg navbar-light bg-light justify-content-between rounded-top  '>
        <a className='navbar-brand' href={path}>
          {title}
        </a>
        {error ? '' : <TopBarIcons data={props} />}
      </nav>
    </div>
  );
};

export default TopBar;
