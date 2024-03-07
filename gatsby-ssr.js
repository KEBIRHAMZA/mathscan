import React from 'react';
import { IntlProvider } from 'gatsby-plugin-intl';
import { Helmet } from 'react-helmet';

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
export const onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` });

  // Google Fonts link for 'Montserrat'
  setHeadComponents([
    <Helmet key="helmet">
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  ]);
};

export const wrapRootElement = ({ element }) => (
  <IntlProvider>
    {element}
  </IntlProvider>
);