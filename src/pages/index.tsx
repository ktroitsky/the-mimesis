import * as React from 'react';
import Seo from '../components/seo';
import NavigationBar from '../components/NavigationBar';
import { graphql, PageProps } from 'gatsby';
import { HeaderSlideType } from '../types/queryTypes';
import HeaderSlide from '../components/HeaderSlide';

type DataType = {
  contentfulHeaderSlide: HeaderSlideType;
};

const IndexPage: React.FC<PageProps<DataType>> = ({
  data: { contentfulHeaderSlide },
}) => {
  return (
    <div>
      <Seo title="Home" />
      <NavigationBar />
      <HeaderSlide {...contentfulHeaderSlide} />
    </div>
  );
};

export const query = graphql`
  query HeaderSlides {
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
  }
`;

export default IndexPage;
