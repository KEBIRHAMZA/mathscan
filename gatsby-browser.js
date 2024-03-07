/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
import './src/styles/global.css'

import React from 'react';
import { IntlProvider } from 'gatsby-plugin-intl';
import { Helmet } from 'react-helmet';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <Helmet key="helmet">
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet"/>
    </Helmet>,
  ]);
};

export const wrapRootElement = ({ element }) => (
  <IntlProvider>
    {element}
  </IntlProvider>
);