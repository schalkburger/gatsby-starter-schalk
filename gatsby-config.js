require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

console.log('env test--->', process.env.CLOUD_NAME);

module.exports = {
  siteMetadata: {
    name: `Penny Pace Photography`,
    description: `Breathtaking photography that you will remember for a lifetime`,
    titleSeparator: ` – `,
    notFoundPage: {
      heading: `404 Page Not Found`,
      text: `The page you are looking for does not exist`,
    },
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-transformer-cloudinary`,
      options: {
        cloudName: `${process.env.CLOUD_NAME}`,
        apiKey: `${process.env.CLOUD_API_KEY}`,
        apiSecret: `${process.env.CLOUD_API_SECRET}`,
        uploadFolder: 'uploads',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        useResolveUrlLoader: true,
      },
    },
  ],
}
