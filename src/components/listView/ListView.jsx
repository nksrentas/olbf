import React from 'react';
import ListViewItem from './ListViewItem';

const ListView = (props) => {
  const { projects } = props;
  return projects.map((project, index) => {
    return <ListViewItem project={project} key={index} />;
  });
};

export default ListView;
