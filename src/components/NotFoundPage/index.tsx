import { Trans } from 'gatsby-plugin-react-i18next';
import React from 'react';
import './style.scss';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h1>
        <Trans>404: Not Found</Trans>
      </h1>
      <p>
        <Trans>
          You just hit a route that doesn&#39;t exist... the sadness.
        </Trans>
      </p>
    </div>
  );
};

export default React.memo(NotFoundPage);
