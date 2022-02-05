import React from 'react';
import { ArticlePreviewType } from '../../types/queryTypes';
import Text from '../Text';
import './style.scss';

type ArticlePreviewListProps = {
  articles: ArticlePreviewType[];
};

const ArticlePreviewList: React.FC<ArticlePreviewListProps> = () => {
  return (
    <div className="list">
      <Text type="h2" fontWeight="700">
        Latest articles
      </Text>
    </div>
  );
};

export default React.memo(ArticlePreviewList);
