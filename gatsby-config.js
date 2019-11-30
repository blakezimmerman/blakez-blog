module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID || "none",
      },
    },
  ],
  siteMetadata: {
    title: `Blake's Developer Blog`,
    author: `Blake Zimmerman`,
    description: `A place where I turn my thoughts into words`,
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/__blakez`,
      },
      {
        name: `Github`,
        url: `https://github.com/blakezimmerman`,
      },
    ],
  },
};
