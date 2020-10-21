module.exports = {
  plugins: [
    {
      resolve: `@christiandavid/gatsby-theme-byfolio`,
      options: {
        basePath: ``,
        path: `src/`,
        imagesPath: `src/images/`,
        iconFile: `src/images/icon.png`,
        siteTitle: `borik.net`,
        siteUrl: `https://borik.net`,
        siteName: `Martin Bórik`,
        siteShortName: `mbr`,
        siteDescription: `programátor, 8-biťák, milujúci otec`,
        siteKeywords: `frontend software engineer, full stack javascript developer`,
        useMozJpeg: true,
        menuLinks: [
          // title = Link text
          // color = Animation background color on click
          { name: `home`, title: `Domov`, color: `#000`, link: `` },
          {
            name: `experience`,
            title: `Moje práce`,
            color: `#3a3d98`,
            link: ``,
          },
          { name: `skills`, title: `Zručnosti`, color: `#d52d43`, link: `` },
          { name: `about`, title: `O mne`, color: `#fff`, link: `` },
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
          availableToHire: true,
          dotColors: ["#0e3e1e", "#6CC551"],
          h1Text: `Vitajte, som Martin Bórik`,
          h2Text: `a už viac ako 20 rokov sa živým programovaním a venujem sa aj ďalších oblastiam digitálneho umenia.`,
          typewriter: [
            `Frontend Software Engineer`,
            `Full-Stack Javascript Developer`,
            `Skladateľ pôvodnej elektronickej alternatívnej hudby`,
            `Spracovanie digitálneho obrazu a zvuku`,
          ],
        },
        // Color for menu background
        shapeColor: {
          link: { color: "#171616", hover: "#fff" },
          shape1: {
            color: `#413f46`,
            opacity: `0.7`,
          },
          shape2: {
            color: `#e6e5ea`,
            opacity: `0.7`,
          },
          shape3: {
            color: `#fff`,
            opacity: `0.7`,
          },
        },
        footer: `heart`,
      },
    },
  ],
}
