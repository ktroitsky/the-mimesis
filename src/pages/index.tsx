import * as React from 'react';
import Seo from '../components/seo';
import NavigationBar from '../components/NavigationBar';
import { graphql, PageProps } from 'gatsby';
import { ArticlePreviewType, HeaderSlideType } from '../types/queryTypes';
import HeaderSlide from '../components/HeaderSlide';
import ArticlePreviewList from '../components/ArticlePreviewList';

type DataType = {
  contentfulHeaderSlide: HeaderSlideType;
  allContentfulArticle: {
    nodes: ArticlePreviewType[];
  };
};

const IndexPage: React.FC<PageProps<DataType>> = ({
  data: { contentfulHeaderSlide, allContentfulArticle },
}) => {
  return (
    <div>
      <Seo title="Home" />
      <NavigationBar />

      <HeaderSlide {...contentfulHeaderSlide} />

      <ArticlePreviewList articles={allContentfulArticle.nodes} />
    </div>
  );
};

export const query = graphql`
  query IndexData {
    contentfulHeaderSlide {
      backgroundImage {
        gatsbyImageData(height: 400)
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
  }
`;

export default IndexPage;
