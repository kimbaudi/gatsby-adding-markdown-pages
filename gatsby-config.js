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
        name: `pages`,
        path: path.resolve(__dirname, `src/pages`),
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
  ],
}
