module.exports = {
  siteMetadata: {
    title: "Maxwell Novak",
    description: "Personal Site, which I'm using to show off dumb stuff",
    author: "Maxwell Novak",
  },
  pathPrefix: "/personal-site",
  plugins: [
    "gatsby-plugin-eslint",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/pie-vector.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
  ],
};
