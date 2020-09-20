import React from 'react';

const TopBar = (props) => {
  const {
    title,
    renderExtra,
    data: { path, error },
  } = props;

  return (
    <div className='col-md-12 ml-auto '>
      <nav className='navbar navbar-expand-lg navbar-light bg-light justify-content-between rounded-top  '>
        <h4 className='text-dark my-auto'>{title}</h4>
        {/* {error ? '' : <TopBarIcons data={props} />} */}
        {renderExtra(props)}
      </nav>
    </div>
  );
};

export default TopBar;
