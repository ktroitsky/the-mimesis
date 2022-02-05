import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import React from 'react';
import { HeaderSlideType } from '../../types/queryTypes';
import Text from '../Text';
import './style.scss';

const HeaderSlide: React.FC<HeaderSlideType> = ({
  backgroundImage,
  title,
  description,
}) => {
  const image = getImage(backgroundImage)!;

  return (
    <BgImage image={image}>
      <div className="slide">
        <Text type="h2" fontWeight="700" className="slide__title">
          {title.title}
        </Text>
        <Text type="p">{description.description}</Text>
      </div>
    </BgImage>
  );
};

export default React.memo(HeaderSlide);
