import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Typewriter from "typewriter-effect"
import GraphemeSplitter from "grapheme-splitter"
import LayoutContactMe from "../components/layout/layout-contact-me"
import styles from "../css/home.css"

const Home = ({
  data: {
    site: {
      siteMetadata: {
        siteName,
        homePage: { h1Text, h2Text, typewriter },
      },
    },
  },
}) => {
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

Home.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        siteName: PropTypes.string.isRequired,
        homePage: PropTypes.shape({
          h1Text: PropTypes.string.isRequired,
          h2Text: PropTypes.string.isRequired,
          typewriter: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }),
}

export default Home

export const query = graphql`
  {
    site {
      siteMetadata {
        siteName
        homePage {
          h1Text
          h2Text
          typewriter
        }
      }
    }
  }
`
