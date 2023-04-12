import * as React from 'react';
import Seo from '../components/seo';
import NavigationBar from '../components/NavigationBar';
import { graphql, PageProps } from 'gatsby';
import {
  ArticlePreviewType,
  HeaderSlideType,
  QuoteType,
} from '../types/queryTypes';
import Header from '../components/Header';
import ArticlePreviewList from '../components/ArticlePreviewList';
import Footer from '../components/Footer';
import QuoteBlock from '../components/QuoteBlock';
import { useLayoutEffect, useState } from 'react';
import quotes from '../../static/quotes';
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';

type DataType = {
  contentfulHeaderSlide: HeaderSlideType;
  allContentfulArticle: {
    nodes: ArticlePreviewType[];
  };
  allContentfulQuote: {
    nodes: QuoteType[];
  };
};

const IndexPage: React.FC<PageProps<DataType>> = ({
  data: { contentfulHeaderSlide, allContentfulArticle },
}) => {
  const [randomQuote, setRandomQuote] = useState<QuoteType>();
  const { t } = useTranslation();
  const { language } = useI18next();

  useLayoutEffect(() => {
    if (!language) return;
    const rightQuotes = quotes?.[language]?.quotes;

    setRandomQuote(
      rightQuotes[Math.floor(Math.random() * rightQuotes?.length)]
    );
  }, [language]);

  return (
    <div>
      <Seo title={t('Home')} />

      <NavigationBar />

      <Header {...contentfulHeaderSlide} />

      <QuoteBlock
        {...randomQuote}
        backgroundColor={contentfulHeaderSlide.quoteBackground}
      />

      <ArticlePreviewList articles={allContentfulArticle.nodes} />

      <Footer />
    </div>
  );
};

export const query = graphql`
  query IndexData($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }

    contentfulHeaderSlide(locale: { eq: $language }) {
      backgroundImage {
        gatsbyImageData(
          height: 700
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
      title {
        title
      }
      description {
        description
      }
      quoteBackground
    }
    allContentfulArticle(
      sort: { fields: customCreatedAt, order: DESC }
      filter: { locale: { eq: $language } }
    ) {
      nodes {
        title
        description {
          description
        }
        hidden
        slug
        id
        header {
          description
          gatsbyImageData(
            height: 240
            width: 350
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
        previewImage {
          description
          gatsbyImageData(
            height: 240
            width: 350
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
`;

export default IndexPage;
