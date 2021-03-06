import React from 'react';

const downloadSectionStyle = {
  letterSpacing: '0.2em',
};
const ProjectView = (props) => {
  const { data } = props;
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
          <p className='mt-4'>
            Download source code from{' '}
            <span style={{ ...downloadSectionStyle }}>Github</span>
          </p>
        </div>
      </div>

      <div id='targetedText'>
        <div className='row'>
          <div className='col-12 text-justify'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae sapiente explicabo, optio, alias ipsa provident
              consequuntur impedit minima similique quam, nam vel laudantium
              nisi adipisci non nemo aspernatur earum sequi eos praesentium
              nulla ut ea. Similique officiis deleniti adipisci explicabo?
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 text-justify'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae sapiente explicabo, optio, alias ipsa provident
              consequuntur impedit minima similique quam, nam vel laudantium
              nisi adipisci non nemo aspernatur earum sequi eos praesentium
              nulla ut ea. Similique officiis deleniti adipisci explicabo?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectView;
