const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `title`,
    description: `description`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: path.resolve(__dirname, `src/markdown-pages`),
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
  ],
}
