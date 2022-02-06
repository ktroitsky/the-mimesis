import React from 'react';
import './style.scss';
import Text from '../Text';

const Footer = () => {
  return (
    <div className="footer">
      <Text color="light">&copy; The Mimesis 2022</Text>
    </div>
  );
};

export default React.memo(Footer);
