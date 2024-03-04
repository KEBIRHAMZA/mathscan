/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

 import React from 'react';
 import { IntlProvider } from 'gatsby-plugin-intl';
 
 /**
  * @type {import('gatsby').GatsbySSR['onRenderBody']}
  */
 export const onRenderBody = ({ setHtmlAttributes }) => {
   setHtmlAttributes({ lang: `en` })
 }
 
 export const wrapRootElement = ({ element }) => (
   <IntlProvider>
     {element}
   </IntlProvider>
 );
 