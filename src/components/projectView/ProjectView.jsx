import React from 'react';
import Socials from '../Socials';

const ProjectView = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <>
      <div className='row'>
        <div className='col-12'>
          <div className='embed-responsive embed-responsive-16by9'>
            <iframe
              className='embed-responsive-16by9'
              title='kappa?'
              src='https://player.twitch.tv/?channel=auraofpsych&parent=localhost'
              frameBorder='0'
              allowFullScreen={true}
              scrolling='no'
              height='378'
              width='620'
            ></iframe>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-8'>
          <p className='mt-4'>Download source code from Github</p>
        </div>
      </div>

      <div className='row'>
        <div className='col-11'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            sapiente explicabo, optio, alias ipsa provident consequuntur impedit
            minima similique quam, nam vel laudantium nisi adipisci non nemo
            aspernatur earum sequi eos praesentium nulla ut ea. Similique
            officiis deleniti adipisci explicabo?
          </p>
        </div>

        <div className='col-1'>
          <Socials orientation='column' />
        </div>
      </div>

      <div className='row'>
        <div className='col-11'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            sapiente explicabo, optio, alias ipsa provident consequuntur impedit
            minima similique quam, nam vel laudantium nisi adipisci non nemo
            aspernatur earum sequi eos praesentium nulla ut ea. Similique
            officiis deleniti adipisci explicabo?
          </p>
        </div>
      </div>
    </>
  );
};

export default ProjectView;
