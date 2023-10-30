
if (process.env.NODE_ENV == "development") {
  require("dotenv").config({
    path: `.env`,
  })
}

console.log(`******\n\t gatsby-config, process.env.NODE_ENV = ${process.env.NODE_ENV}\nprocess.env.GATSBY_API_ENDPOINT = ${process.env.GATSBY_API_ENDPOINT}`);

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    author: "suneil.bansi@area23hc.com",
    description: "AREA 23 GatsbyJS Framework",
    siteUrl: "https://www.speakupinbronchiectasis.com",
    title: "AREA 23 GatsbyJS",
    image: "images/icon.png",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-htaccess",
    "gatsby-plugin-anchor-links",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: `${__dirname}/src/images/favicon.png`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/static/images/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Nunito`,
            file: `https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap`,
          },
          {
            name: `Nunito Sans`,
            file: `https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,100;0,300;0,400;0,600;0,700;0,800;1,100;1,300;1,400;1,600;1,700;1,800&display=swap`,
          },
          {
            name: `Caveat`,
            file: `https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap`,
          },
        ],
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.speakupinbronchiectasis.com`,
        stripQueryString: true,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        defaultDataLayer: function () {
          return [];
        },
        id: "GTM-WTQZLKV",
        includeInDevelopment: true,
        routeChangeEventName: "gatsby-route-change",
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "944842393471522",
      },
    },
  ],
};