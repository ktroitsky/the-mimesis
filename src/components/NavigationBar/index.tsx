import React from 'react';
import Layout from '../Layout';
import Text from '../Text';
import './style.scss';

const NavigationBar = () => {
  return (
    <Layout className="navbar">
      <Text
        type="h3"
        fontFamily="spartan"
        fontWeight="700"
        className="navbar__title"
        color="light"
      >
        THE MIMESIS
      </Text>
    </Layout>
  );
};

export default React.memo(NavigationBar);
