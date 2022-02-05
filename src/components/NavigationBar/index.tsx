import { Link } from 'gatsby';
import React from 'react';
import Layout from '../Layout';
import Text from '../Text';
import TMLink from '../TMLink/TMLink';
import './style.scss';

const NavigationBar = () => {
  return (
    <Layout className="navbar">
      <TMLink href="/" className="navbar__title">
        <Text type="h3" fontFamily="spartan" fontWeight="700" color="light">
          THE MIMESIS
        </Text>
      </TMLink>
    </Layout>
  );
};

export default React.memo(NavigationBar);
