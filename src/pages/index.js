import React from "react"
import Typewriter from "typewriter-effect"
import GraphemeSplitter from "grapheme-splitter"
import LayoutIntro from "../components/layout/layout-intro"
import styles from "../css/home.css"
import SEO from "../components/seo"

const PageHome = () => {
  const typewriter = [
    `Technical Analyst`,
    `Software Development Engineer III`,
    `Scrum Master`,
    `Full-Stack JavaScript Developer`,
    `Low-Level C/C++ Developer`,
    `Electronic Music Producer`,
    `Desktop Publishing and Graphic Design`,
  ]

  return (
    <LayoutIntro>
      <SEO />
      <section css={styles.dataSection}>
        <div css={styles.dataContainer}>
          <div css={styles.dataLeftPane}>
            <h1>Hello, I'm Martin Bórik</h1>
            <h3>
              and I've been focusing on multiple areas of digital art for the
              last 20+ years.
              I&nbsp;worked as software developer balancing
              between low-level programming and full-stack JavaScript development.
              <br />
              I also have experience with people management as Scrum Master,
              now acting as Technical Analyst.
            </h3>
          </div>
          <div css={styles.dataRightPane}>
            <h2>
              or <kbd>mborik</kbd> on the demoscene
            </h2>
            <h4>
              I've been involved in the 8bit demoscene for many years.
              I&nbsp;started learning BASIC on a&nbsp;micro-computer{" "}
              <b>PMD&nbsp;85</b> produced in the '80s in former Czechoslovakia,
              and my interest in computers grew stronger when my elder brother
              got a&nbsp;ZX-Spectrum+. I&nbsp;learned assembly language for the
              Zilog Z80 and still program demos and games as well as creating
              music on these up today, to keep these little gems alive. ❤️
            </h4>
            <Typewriter
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
    </LayoutIntro>
  )
}

export default PageHome
