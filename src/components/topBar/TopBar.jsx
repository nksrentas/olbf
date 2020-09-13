import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faThLarge,
  faThList,
} from '@fortawesome/free-solid-svg-icons';

const TopBar = (props) => {
  // eslint-disable-next-line no-unused-vars
  const {
    data: { path, title },
    activeViewType,
  } = props;
  const handleView = props.handleView;
  const iconBasicStyle = 'd-inline-block ml-2';
  const iconActiveStyle = 'rounded-circle bg-primary';

  return (
    <div className='col-md-10 ml-auto '>
      <nav className='navbar navbar-expand-lg navbar-light bg-light justify-content-between rounded-top'>
        <a className='navbar-brand' href='/'>
          {title}
        </a>
        <div>
          <FontAwesomeIcon icon={faSearch} size='2x' />
          <div
            className={
              activeViewType === 'grid'
                ? iconBasicStyle + ' ' + iconActiveStyle
                : iconBasicStyle
            }
          >
            <FontAwesomeIcon
              icon={faThLarge}
              size='2x'
              onClick={handleView.bind(this, 'grid')}
            />
          </div>
          <div
            className={
              activeViewType === 'list'
                ? iconBasicStyle + ' ' + iconActiveStyle
                : iconBasicStyle
            }
          >
            <FontAwesomeIcon
              icon={faThList}
              size='2x'
              onClick={handleView.bind(this, 'list')}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopBar;
