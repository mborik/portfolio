const siteMetadata = {
  siteUrl: `https://borik.net`,
  siteTitle: `Martin Bórik ▪ borik.net`,
  siteName: `Martin Bórik`,
  siteShortName: `borik.net`,
  siteDescription: `frontend developer, 8bit freak, loving father and electronic music producer`,
  siteKeywords: `frontend software engineer, full stack javascript developer`,
  email: `martin@borik.net`,
  social: {
    twitter: `mborik128`,
    gitHub: `mborik`,
    linkedIn: `in/mborik/`,
    resumeInPdf: `/Martin_Borik_CV_2020.pdf`,
    stackOverflow: ``,
  },
}

module.exports = {
  siteMetadata,
  plugins: [
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
