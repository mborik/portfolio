module.exports = {
  plugins: [
    {
      resolve: `@christiandavid/gatsby-theme-byfolio`,
      options: {
        basePath: ``,
        path: `src/`,
        imagesPath: `src/images/`,
        iconFile: `src/images/icon.png`,
        typographyPath: `src/utils/typography.js`,
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
        },
        homePage: {
          availableToHire: false,
          dotColors: ["#0e3e1e", "#6CC551"],
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
        footer: `heart`,
      },
    },
  ],
}
