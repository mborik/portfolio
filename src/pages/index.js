import React from "react"
import { Helmet } from "react-helmet"
import Typewriter from "typewriter-effect"
import GraphemeSplitter from "grapheme-splitter"
import LayoutContactMe from "../components/layout/layout-contact-me"
import styles from "../css/home.css"

const Home = () => {
  const { siteName, h1Text, h2Text, typewriter } = {
    siteName: `Martin Bórik`,
    h1Text: `Hello, I'm Martin Bórik`,
    h2Text: `and for more than 20 years I'm acting as a programmer and I'm focusing on other areas of digital arts:`,
    typewriter: [
      `Frontend Software Engineer`,
      `Full-Stack Javascript Developer`,
      `Alternative Electronic Music Producer`,
      `Digital imaginary, sound and video processing`,
    ],
  }

  function stringSplitter(string) {
    const splitter = new GraphemeSplitter()
    return splitter.splitGraphemes(string)
  }

  return (
    <LayoutContactMe bgClassName="home">
      <Helmet>
        <title>{siteName}</title>
        <meta charset="UTF-8" />
      </Helmet>
      <section css={styles.dataSection}>
        <div css={styles.dataContainer}>
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
