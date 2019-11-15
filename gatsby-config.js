module.exports = {
  siteMetadata: {
    name: `Schalk Gatsby Starter`,
    tagline: `Gatsby + SASS + Typescript + Helmet`,
    notfoundheading: `404 Page Not Found`,
    notfoundtext: `The page you are looking for does not exist`,
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
