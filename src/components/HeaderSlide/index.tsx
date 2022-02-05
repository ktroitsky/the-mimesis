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
}

const HeaderSlide: React.FC<HeaderSlideProps> = ({
  backgroundImage,
  title,
  description,
  alignment = 'left',
}) => {
  const image = getImage(backgroundImage)!;

  return (
    <BgImage image={image}>
      <Layout
        className={classNames(`slide`, {
          slide_centered: alignment === 'center',
        })}
      >
        <Text type="h2" fontWeight="700" className="slide__title" color="light">
          {title.title}
        </Text>
        <Text type="p" color="light">
          {description.description}
        </Text>
      </Layout>
    </BgImage>
  );
};

export default React.memo(HeaderSlide);
