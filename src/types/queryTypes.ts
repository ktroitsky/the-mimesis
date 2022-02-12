export type HeaderSlideType = {
  backgroundImage: any;
  title: {
    title: string;
  };
  description: {
    description: string;
  };
  quoteBackground?: string;
};

export type ArticlePreviewType = {
  title: string;
  description: {
    description: string;
  };
  slug: string;
  id: string;
  header: {
    description?: string;
    gatsbyImageData: any;
  };
};

export interface ExtendedArticleType extends ArticlePreviewType {
  body: {
    body: string;
  };
}

export type QuoteType = {
  author: string;
  autorLink?: string;
  body: {
    body: string;
  };
};
