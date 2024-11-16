const siteMetadata = {
  siteUrl: `https://borik.net`,
  siteTitle: `Martin Bórik ∙ borik.net`,
  siteName: `Martin Bórik`,
  siteShortName: `borik.net`,
  siteDescription: `software analyst, scrum master, former software developer, 8bit freak and cinematic music composer`,
  siteKeywords: `software analyst scrum master frontend software engineer full stack javascript developer cinematic music composer`,
  email: `martin@borik.net`,
  social: {
    gitHub: `mborik`,
    linkedIn: `in/mborik/`,
    resumeInPdf: `/Martin_Borik_CV_2024.pdf`,
    twitter: `mborik128`,
    openGraphImage: `/og-image-borik-net.jpg`,
  },
}

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        defaultQuality: 90,
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        checkSupportedExtensions: false,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `${__dirname}/src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteMetadata.siteName,
        short_name: siteMetadata.siteShortName,
        description: siteMetadata.siteDescription,
        lang: `en`,
        start_url: `/`,
        background_color: `#333`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `${__dirname}/src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-transition-link`,
      options: {
        layout: require.resolve(`./src/layout`),
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        // color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
  ],
}
