import * as React from 'react';
import Seo from '../components/seo';
import NavigationBar from '../components/NavigationBar';
import NotFoundPage from '../components/NotFoundPage';

const Page = () => (
  <div>
    <Seo title="404: Not found" />
    <NavigationBar />
    <NotFoundPage />
  </div>
);

export default React.memo(Page);
