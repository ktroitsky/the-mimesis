import BackgroundImage from 'gatsby-background-image';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import React from 'react';
import { HeaderSlideType } from '../../types/queryTypes';
import './style.scss';

const HeaderSlide: React.FC<HeaderSlideType> = ({ backgroundImage }) => {
  const image = getImage(backgroundImage)!;
  const bgImage = convertToBgImage(image);

  return (
    <BackgroundImage {...bgImage} Tag="section">
      <GatsbyImage
        image={image}
        alt={'testimage'}
        objectFit="cover"
        className="slide"
      />
    </BackgroundImage>
  );
};

export default React.memo(HeaderSlide);
