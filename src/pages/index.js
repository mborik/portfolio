import React from "react"
import { Helmet } from "react-helmet"
import Typewriter from "typewriter-effect"
import GraphemeSplitter from "grapheme-splitter"
import LayoutContactMe from "../components/layout/layout-contact-me"
import styles from "../css/home.css"
import SEO from "../components/seo"

const Home = () => {
  const { h1Text, h2Text, typewriter } = {
    h1Text: `Hello, I'm Martin Bórik`,
    h2Text: `and for more than 20 years I've been a programmer and I've focused on multiple areas of digital arts...`,
    typewriter: [
      `Frontend Software Engineer`,
      `Full-Stack Javascript Developer`,
      `Electronic Music Producer`,
      `Digital Imagery, Sound and Video Processing`,
      `Desktop Publishing, Typesetting and Graphic design`,
    ],
  }

  function stringSplitter(string) {
    const splitter = new GraphemeSplitter()
    return splitter.splitGraphemes(string)
  }

  return (
    <LayoutContactMe bgClassName="home">
      <SEO />
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
