import React, { useCallback } from 'react';
import { ArticlePreviewType } from '../../types/queryTypes';
import ArticlePreview from '../ArticlePreview';
import Layout from '../Layout';
import Text from '../Text';
import './style.scss';

type ArticlePreviewListProps = {
  articles: ArticlePreviewType[];
};

const ArticlePreviewList: React.FC<ArticlePreviewListProps> = ({
  articles,
}) => {
  const renderArticlePreview = useCallback<
    (article: ArticlePreviewType) => JSX.Element
  >((article) => <ArticlePreview {...article} className="list__item" />, []);

  return (
    <Layout className="wrapper">
      <Text type="p" fontWeight="700" className="wrapper__title">
        Latest articles
      </Text>
      <div className="list">{articles.map(renderArticlePreview)}</div>
    </Layout>
  );
};

export default React.memo(ArticlePreviewList);
