import { graphql, PageProps } from 'gatsby';
import React from 'react';
import Text from '../Text';
import './style.scss';

const NavigationBar = () => {
  return (
    <div className="navbar">
      <Text></Text>
    </div>
  );
};

export default React.memo(NavigationBar);
