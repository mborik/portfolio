const {
  basePath,
  path,
  imagesPath,
  iconFile,
  typographyPath,
  siteTitle,
  siteUrl,
  siteName,
  siteShortName,
  siteDescription,
  siteKeywords,
  useMozJpeg,
  menuLinks,
  email,
  social,
  homePage,
  shapeColor,
} = {
  basePath: ``,
  path: `${__dirname}/src/`,
  imagesPath: `${__dirname}/src/images/`,
  iconFile: `${__dirname}/src/images/icon.png`,
  typographyPath: `${__dirname}/src/utils/typography.js`,
  siteTitle: `borik.net`,
  siteUrl: `https://borik.net`,
  siteName: `Martin Bórik`,
  siteShortName: `mbr`,
  siteDescription: `frontend developer, 8bit freak, loving father and former alternative electronic music producer`,
  siteKeywords: `frontend software engineer, full stack javascript developer`,
  useMozJpeg: true,
  menuLinks: [
    // title = Link text
    // color = Animation background color on click
    {
      name: `home`,
      title: `Home`,
      color: `#eee`,
      link: ``,
    },
    {
      name: `experience`,
      title: `Experience`,
      color: `#666`,
      link: ``,
    },
    { name: `skills`, title: `Skills`, color: `#666`, link: `` },
    { name: `aboutMe`, title: `Who am I?`, color: `#eee`, link: `` },
  ],
  email: `martin@borik.net`,
  social: {
    // Usernames
    twitter: `mborik128`,
    gitHub: `mborik`,
    linkedIn: `in/mborik/`,
    resumeInPdf: `/Martin_Borik_CV_2020.pdf`,
    stackOverflow: ``,
  },
  homePage: {
    h1Text: `Hello, I'm Martin Bórik`,
    h2Text: `and for more than 20 years I'm acting as a programmer and I'm focusing on other areas of digital arts:`,
    typewriter: [
      `Frontend Software Engineer`,
      `Full-Stack Javascript Developer`,
      `Alternative Electronic Music Producer`,
      `Digital imaginary, sound and video processing`,
    ],
  },
  // Color for menu background
  shapeColor: {
    link: { color: "#111", hover: "#fff" },
    shape1: {
      color: `#333`,
      opacity: `0.7`,
    },
    shape2: {
      color: `#666`,
      opacity: `0.7`,
    },
    shape3: {
      color: `#eee`,
      opacity: `0.7`,
    },
  },
}

module.exports = {
  siteMetadata: {
    title: siteTitle,
    siteName,
    siteKeywords,
    siteDescription,
    siteUrl,
    basePath,
    menuLinks,
    email,
    social,
    homePage,
    shapeColor,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg,
      },
    },
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
        path: path,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: imagesPath,
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: typographyPath,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteName,
        short_name: siteShortName,
        description: siteDescription,
        lang: `en`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: iconFile,
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
      options: {
        exclude: [`/experience/_additionalSkills`],
      },
    },
  ],
}
