import React from "react"
import { Helmet } from "react-helmet"
import Typewriter from "typewriter-effect"
import GraphemeSplitter from "grapheme-splitter"
import LayoutContactMe from "../components/layout/layout-contact-me"
import styles from "../css/home.css"
import SEO from "../components/seo"

const PageHome = () => {
  const { h1Text, h2Text, typewriter } = {
    h1Text: `Hello, I'm Martin Bórik`,
    h2Text: `and I've been a programmer for more than 20 years and for nearly all of that time, I've been focusing on multiple areas of digital arts...`,
    typewriter: [
      `Frontend Software Development Engineer`,
      `Full-Stack Javascript Developer`,
      `Electronic Music Producer`,
      `Digital Imagery, Sound and Video Processing`,
      `Desktop Publishing, Typesetting and Graphic design`,
    ],
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
                stringSplitter: (string) =>
                  new GraphemeSplitter().splitGraphemes(string),
              }}
            />
          </div>
        </div>
      </section>
    </LayoutContactMe>
  )
}

export default PageHome
