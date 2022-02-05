import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { ArticlePreviewType } from '../../types/queryTypes';
import './style.scss';

interface ArticlePreviewProps extends ArticlePreviewType {
  className?: string;
}

const ArticlePreview: React.FC<ArticlePreviewProps> = ({
  title,
  header,
  className,
}) => {
  const image = getImage(header.gatsbyImageData)!;

  return (
    <div className={`${className}`}>
      <div className="preview">
        <GatsbyImage image={image} alt={header.description ?? ''} />
      </div>
    </div>
  );
};

export default React.memo(ArticlePreview);
