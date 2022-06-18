const dotenv = require('dotenv');
const serialize = require('./src/utils/configHelpers.ts');

dotenv.config();

const siteUrl = `https://themimesis.art`;

module.exports = {
  siteMetadata: {
    title: `The Mimesis`,
    description: `A blog about literature, arts and culture`,
    author: `@ktroitsky`,
    siteUrl,
  },
  trailingSlash: 'always',
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl,
        noQueryString: true,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      host: siteUrl,
      sitemap: `${siteUrl}/sitemap/sitemap-index.xml`,
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        excludes: ['/404', '/404.html'],
        query: serialize.sitemapQuery,
        resolveSiteUrl: () => siteUrl,
        resolvePages: serialize.resolvePages,
        serialize: serialize.serialize,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
