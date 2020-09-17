import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faThLarge,
  faThList,
} from '@fortawesome/free-solid-svg-icons';

const TopBarIcons = ({ data }) => {
  const { activeViewType, handleView } = data;
  const iconBasicStyle = 'd-inline-block ml-2';
  const iconActiveStyle = 'rounded-circle bg-primary';
  return (
    <div>
      <FontAwesomeIcon icon={faSearch} size='2x' />
      <span
        className='border-right mr-3 pr-3 align-text-bottom d-none d-md-inline-block'
        style={{ height: '1.5em' }}
      ></span>

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
  );
};

export default TopBarIcons;
