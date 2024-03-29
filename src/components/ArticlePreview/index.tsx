import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { ArticlePreviewType } from '../../types/queryTypes';
import Text from '../Text';
import TMLink from '../TMLink/TMLink';
import './style.scss';

interface ArticlePreviewProps extends ArticlePreviewType {
  className?: string;
}

const ArticlePreview: React.FC<ArticlePreviewProps> = ({
  title,
  header,
  className,
  description,
  slug,
  previewImage,
}) => {
  const image = getImage(
    previewImage?.gatsbyImageData ?? header.gatsbyImageData
  )!;

  return (
    <div className={`${className}`}>
      <TMLink className="preview" href={`/${slug}`}>
        <div className="image-wrapper">
          <GatsbyImage
            loading="lazy"
            image={image}
            alt={header.description ?? ''}
            className="preview__image image-wrapper__image"
          />
        </div>
        <Text type="p" fontWeight="700" className="preview__title">
          {title}
        </Text>
        <Text color="caption">{description.description}</Text>
      </TMLink>
    </div>
  );
};

export default React.memo(ArticlePreview);
