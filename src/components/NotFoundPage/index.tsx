import React from 'react';
import './style.scss';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  );
};

export default React.memo(NotFoundPage);
