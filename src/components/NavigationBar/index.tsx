import { Link } from 'gatsby';
import React from 'react';
import Layout from '../Layout';
import Text from '../Text';
import './style.scss';

const NavigationBar = () => {
  return (
    <Layout className="navbar">
      <Link to="/" className="navbar__title">
        <Text type="h3" fontFamily="spartan" fontWeight="700" color="light">
          THE MIMESIS
        </Text>
      </Link>
    </Layout>
  );
};

export default React.memo(NavigationBar);
