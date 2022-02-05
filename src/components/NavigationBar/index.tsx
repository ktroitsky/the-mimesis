import React from 'react';
import Text from '../Text';
import './style.scss';

const NavigationBar = () => {
  return (
    <div className="navbar">
      <Text
        type="h3"
        fontFamily="spartan"
        fontWeight="700"
        className="navbar__title"
      >
        THE MIMESIS
      </Text>
    </div>
  );
};

export default React.memo(NavigationBar);
