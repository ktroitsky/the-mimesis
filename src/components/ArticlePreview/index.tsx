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
}) => {
  const image = getImage(header.gatsbyImageData)!;

  return (
    <div className={`${className}`}>
      <TMLink className="preview" href={`/${slug}`}>
        <GatsbyImage
          image={image}
          alt={header.description ?? ''}
          className="preview__image"
        />
        <Text type="h3" fontWeight="700" className="preview__title">
          {title}
        </Text>
        <Text color="caption">{description.description}</Text>
      </TMLink>
    </div>
  );
};

export default React.memo(ArticlePreview);
