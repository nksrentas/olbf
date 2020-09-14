import React from 'react';
import GridViewItem from './GridViewItem';

const GridView = (props) => {
  const { projects } = props;
  return projects.map((project, index) => {
    return index % 2 === 0 ? (
      <div className='row'>
        <GridViewItem project={project} key={index} />
      </div>
    ) : (
      <GridViewItem project={project} key={index} />
    );
  });
};

export default GridView;
