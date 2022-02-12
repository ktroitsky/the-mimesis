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
  return (
    <div>
      <Seo title="Home" />
      <NavigationBar />

      <Header {...contentfulHeaderSlide} />

      <ArticlePreviewList articles={allContentfulArticle.nodes} />

      <Footer />
    </div>
  );
};

export const query = graphql`
  query IndexData {
    contentfulHeaderSlide {
      backgroundImage {
        gatsbyImageData(height: 550)
      }
      title {
        title
      }
      description {
        description
      }
    }
    allContentfulArticle {
      nodes {
        title
        description {
          description
        }
        slug
        id
        header {
          description
          gatsbyImageData(height: 240, width: 350)
        }
      }
    }
    allContentfulQuote {
      nodes {
        authorLink
        author
        body {
          body
        }
      }
    }
  }
`;

export default IndexPage;
