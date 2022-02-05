import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { ArticlePreviewType } from '../../types/queryTypes';
import Text from '../Text';
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
      <Link className="preview" to={`/${slug}`}>
        <GatsbyImage
          image={image}
          alt={header.description ?? ''}
          className="preview__image"
        />
        <Text type="h3" fontWeight="700" className="preview__title">
          {title}
        </Text>
        <Text color="caption">{description.description}</Text>
      </Link>
    </div>
  );
};

export default React.memo(ArticlePreview);
