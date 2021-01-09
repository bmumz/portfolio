module.exports = {
  siteMetadata: {
    title: `Brandi Mummery, Web Developer.`,
    description: `Web developer with a passion for UX design.`,
    keywords: [
      `web developer`,
      `web developer Toronto`,
      `self-taught web developer`,
      `web developer for hire`,
      `Brandi Mummery`,
      `Brandi Mummery, Web Developer`,
    ],
    author: `Brandi Mummery`,
    siteUrl: `https://www.brandimummery.dev`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/blogPosts`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-anchor-links`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Brandi Mummery, Web Developer`,
        short_name: `Brandi Mummery`,
        start_url: `/`,
        background_color: `#dcc7b6`,
        theme_color: `#dcc7b6`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || `none`,
        head: true,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
  ],
}
