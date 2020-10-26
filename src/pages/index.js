import React from "react"
import { Helmet } from "react-helmet"
import Typewriter from "typewriter-effect"
import GraphemeSplitter from "grapheme-splitter"
import LayoutContactMe from "../components/layout/layout-contact-me"
import styles from "../css/home.css"
import { siteMetadata } from "../../gatsby-config"

const Home = () => {
  const { siteTitle, homePage } = siteMetadata
  const { h1Text, h2Text, typewriter } = homePage

  function stringSplitter(string) {
    const splitter = new GraphemeSplitter()
    return splitter.splitGraphemes(string)
  }

  return (
    <LayoutContactMe bgClassName="home">
      <Helmet>
        <title>{siteTitle}</title>
        <meta charset="UTF-8" />
      </Helmet>
      <section css={styles.dataSection}>
        <div css={styles.dataContainer}>
          <span css={styles.dataShadow}></span>
          <div css={styles.dataContent}>
            <h1>{h1Text}</h1>
            <h2>{h2Text}</h2>
            <Typewriter
              css={styles.typewriter}
              options={{
                strings: typewriter,
                autoStart: true,
                loop: true,
                delay: 55,
                stringSplitter,
              }}
            />
          </div>
        </div>
      </section>
    </LayoutContactMe>
  )
}

export default Home
