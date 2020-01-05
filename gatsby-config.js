module.exports = {
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
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1380,
              linkImagesToOriginal: false,
            },
          },
          { resolve: `gatsby-remark-copy-linked-files` },
          { resolve: `gatsby-remark-smartypants` },
          { resolve: `gatsby-remark-prismjs` },
        ],
        remarkPlugins: [require(`remark-slug`)],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID || "none",
      },
    },
  ],
};
