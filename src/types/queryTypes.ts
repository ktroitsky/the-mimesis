export type HeaderSlideType = {
  backgroundImage: any;
  title: {
    title: string;
  };
  description: {
    description: string;
  };
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
