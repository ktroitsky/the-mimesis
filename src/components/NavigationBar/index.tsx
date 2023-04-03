import { useI18next } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { Locale } from '../../types/queryTypes';
import Layout from '../Layout';
import Text from '../Text';
import TMLink from '../TMLink/TMLink';
import './style.scss';

const NavigationBar = () => {
  const { changeLanguage, language } = useI18next();

  const otherLanguage = language === Locale.EN ? Locale.UK : Locale.EN;
  const toggleLanguage = () => changeLanguage(otherLanguage);

  return (
    <Layout className="navbar">
      <TMLink href="/" className="navbar__title">
        <Text type="h3" fontFamily="spartan" fontWeight="700" color="light">
          THE MIMESIS
        </Text>
      </TMLink>

      <button className="navbar__language-button" onClick={toggleLanguage}>
        {otherLanguage.toUpperCase()}
      </button>
    </Layout>
  );
};

export default React.memo(NavigationBar);
