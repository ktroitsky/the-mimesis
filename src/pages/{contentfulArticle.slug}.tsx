import { graphql, PageProps } from 'gatsby';
import React, { useMemo } from 'react';
import Seo from '../components/seo';
import { ExtendedArticleType, HeaderSlideType } from '../types/queryTypes';
import Text from '../components/Text';
import HeaderSlide from '../components/HeaderSlide';
import NavigationBar from '../components/NavigationBar';

const ArticlePage: React.FC<
  PageProps<{ contentfulArticle: ExtendedArticleType }>
> = ({ data: { contentfulArticle } }) => {
  const headerSliderProps = useMemo<HeaderSlideType>(
    () => ({
      title: { title: contentfulArticle.title },
      backgroundImage: contentfulArticle.header,
      description: contentfulArticle.description,
    }),
    [
      contentfulArticle.description,
      contentfulArticle.header,
      contentfulArticle.title,
    ]
  );

  return (
    <div>
      <Seo title="Home" />

      <NavigationBar />

      <HeaderSlide {...headerSliderProps} alignment="center" />
    </div>
  );
};

export const query = graphql`
  query Article($id: String!) {
    contentfulArticle(id: { eq: $id }) {
      title
      description {
        description
      }
      slug
      id
      header {
        description
        gatsbyImageData(height: 400)
      }
      body {
        body
      }
    }
  }
`;

export default React.memo(ArticlePage);