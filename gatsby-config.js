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
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-sass`,
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
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
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
    {
      resolve: `gatsby-source-twitter`,
      options: {
        credentials: {
          CONSUMER_KEY: process.env.TWITTER_CONSUMER_KEY,
          CONSUMER_SECRET: process.env.TWITTER_CONSUMER_SECRET,
          BEARER_TOKEN: process.env.TWITTER_BEARER_TOKEN,
        },
        queries: {
          fetchTimeline: {
            endpoint: "statuses/user_timeline",
            params: {
              screen_name: "brandiCodes",
              include_rts: false,
              exclude_replies: true,
              tweet_mode: "extended",
            },
          },
        },
      },
    },

    `gatsby-plugin-twitter`,
  ],
}
