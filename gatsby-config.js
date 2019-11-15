module.exports = {
  siteMetadata: {
    name: `Penny Pace Photography`,
    notFoundPage: {
      heading: `404 Page Not Found`,
      text: `The page you are looking for does not exist`,
    },
    homePage: {
      heroText: `“Breathtaking photography that you will remember for a lifetime”`,
    },
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        useResolveUrlLoader: true,
        cssLoaderOptions: {
          camelCase: false,
        },
        // Override the file regex for SASS
        sassRuleTest: /\.global\.s(a|c)ss$/,
        // Override the file regex for CSS modules
        sassRuleModulesTest: /\.mod\.s(a|c)ss$/,
      },
    },
  ],
}
