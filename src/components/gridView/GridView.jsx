import React from 'react';
import GridViewItem from './GridViewItem';

const GridView = (props) => {
  const { projects, path } = props;
  let gridBlock = projects.map((project, index) => {
    return <GridViewItem project={project} key={index} path={path} />;
  });

  let result = [];
  for (let i = 0; i < gridBlock.length; i += 2) {
    result.push(
      <div className='row justify-content-md-center mb-3' key={i}>
        {gridBlock.slice(i, i + 2)}
      </div>
    );
  }
  return result;
};

export default GridView;
