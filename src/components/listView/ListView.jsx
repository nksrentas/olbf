import React from 'react';
import ListViewItem from './ListViewItem';

const ListView = (props) => {
  const { projects, path } = props;
  return projects.map((project, index) => {
    return <ListViewItem project={project} path={path} key={index} />;
  });
};

export default ListView;
