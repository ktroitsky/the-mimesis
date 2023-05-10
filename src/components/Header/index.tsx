import classNames from 'classnames';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import React from 'react';
import { HeaderSlideType } from '../../types/queryTypes';
import Layout from '../Layout';
import Text from '../Text';
import './style.scss';

interface HeaderSlideProps extends HeaderSlideType {
  alignment?: 'left' | 'center';
  isDarkened?: boolean;
  isVerticallyCentered?: boolean;
  titleClassName?: string;
}

const Header: React.FC<HeaderSlideProps> = ({
  backgroundImage,
  title,
  description,
  alignment = 'left',
  isDarkened = false,
  isVerticallyCentered = false,
  titleClassName,
}) => {
  const image = getImage(backgroundImage)!;

  return (
    <BgImage image={image}>
      <Layout
        className={classNames(`slide`, {
          slide_centered: alignment === 'center',
          slide_darkened: isDarkened,
        })}
      >
        <Text
          type="h1"
          fontWeight="700"
          className={classNames('slide__title', titleClassName, {
            'slide__title_centered-vertically': isVerticallyCentered,
          })}
          color="light"
        >
          {title.title}
        </Text>
        <Text type="p" color="light">
          {description.description}
        </Text>
      </Layout>
    </BgImage>
  );
};

export default React.memo(Header);
