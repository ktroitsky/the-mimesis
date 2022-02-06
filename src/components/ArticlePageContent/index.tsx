import React from 'react';
import Markdown from '../Text/Markdown';
import './style.scss';

type ArticlePageContentProps = {
  body: string;
};

const ArticlePageContent: React.FC<ArticlePageContentProps> = ({ body }) => {
  return (
    <div className="article-page">
      <Markdown source={body} />
    </div>
  );
};

export default React.memo(ArticlePageContent);
