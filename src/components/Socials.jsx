import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Socials = (props) => {
  const { orientation } = props;
  const socialsClass =
    orientation === 'column' ? 'd-flex flex-column' : 'd-flex';
  const socialsClassMargin =
    orientation === 'column' ? 'd-inline-block mt-3' : 'd-inline-block ml-3';

  return (
    <div className={socialsClass}>
      <div className={socialsClassMargin}>
        <FontAwesomeIcon icon={faInstagram} size='2x' />
      </div>
      <div className={socialsClassMargin}>
        <FontAwesomeIcon icon={faYoutube} size='2x' />
      </div>
    </div>
  );
};

export default Socials;
