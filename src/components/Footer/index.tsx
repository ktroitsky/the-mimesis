import React from 'react';
import InstagramIcon from '../../icons/InstagramIcon';
import YoutubeIcon from '../../icons/YoutubeIcon';
import Text from '../Text';
import './style.scss';

const Footer = () => {
  return (
    <div className="footer">
      <Text color="light">&copy; The Mimesis 2024</Text>

      <a href="https://www.youtube.com/@the.mimesis" className="footer__social">
        <YoutubeIcon />
      </a>

      <a
        href="https://www.instagram.com/the.mimesis.ua/"
        className="footer__social"
      >
        <InstagramIcon />
      </a>
    </div>
  );
};

export default React.memo(Footer);
