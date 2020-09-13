import React from 'react';
import GridViewItem from './GridViewItem';

const GridView = (props) => {
  const { projects } = props;
  return projects.map((project, index) => {
    return <GridViewItem project={project} key={index} />;
  });
};

export default GridView;
