import { graphql, PageProps } from 'gatsby';
import React, { useMemo } from 'react';
import ArticlePageContent from '../../components/ArticlePageContent';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import NavigationBar from '../../components/NavigationBar';
import Seo from '../../components/seo';
import { ExtendedArticleType, HeaderSlideType } from '../../types/queryTypes';

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
      <Seo
        title={contentfulArticle?.title}
        description={contentfulArticle.description.description ?? ''}
      />
      <NavigationBar />
      <Header
        {...headerSliderProps}
        alignment="center"
        isDarkened
        isVerticallyCentered
      />
      <ArticlePageContent body={contentfulArticle.body.body} />
      <Footer />
    </div>
  );
};

export const query = graphql`
  query Article($id: String!) {
    contentfulArticle(id: { eq: $id }) {
      title
      locale
      description {
        description
      }
      slug
      id
      header {
        description
        gatsbyImageData(
          height: 400
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
      body {
        body
      }
    }
  }
`;

export default React.memo(ArticlePage);
