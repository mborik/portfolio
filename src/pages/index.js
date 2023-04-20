import React from "react"
import { Helmet } from "react-helmet"
import Typewriter from "typewriter-effect"
import GraphemeSplitter from "grapheme-splitter"
import LayoutContactMe from "../components/layout/layout-contact-me"
import styles from "../css/home.css"
import SEO from "../components/seo"

const PageHome = () => {
  const { headline, intro, typewriter } = {
    headline: `Hello, I'm Martin Bórik`,
    intro: [
      `and I've been focusing on multiple areas of digital art for the last 20+ years and all of that time I worked as software developer balancing between low-level programming and full-stack JavaScript development.`,
      `Now I'm transitioning into people management, currently as Scrum Master.`,
    ],
    typewriter: [
      `Software Development Engineer III`,
      `Full-Stack JavaScript Developer`,
      `Scrum Master`,
      `Electronic Music Producer`,
      `Digital Imagery, Sound and Video Processing`,
      `Desktop Publishing and Graphic Design`,
    ],
  }

  return (
    <LayoutContactMe bgClassName="home">
      <SEO />
      <section css={styles.dataSection}>
        <div css={styles.dataContainer}>
          <div css={styles.dataContent}>
            <h1>{headline}</h1>
            <h3>
              {intro.map((el, index) => (
                <React.Fragment key={index}>
                  {el}
                  <br />
                </React.Fragment>
              ))}
            </h3>
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
