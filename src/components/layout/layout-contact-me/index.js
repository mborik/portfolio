import React from "react"
import Obfuscate from "react-obfuscate"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/react"
import styles from "./contact-me.css"
import bokeh from "../bokeh"
import ContactButton from "./contactButton"
import ContactContent from "./contactContent"
import Menu from "../../menu"
import SEO from "../../seo"
import { siteMetadata } from "../../../../gatsby-config"

const LayoutContactMe = ({ children, bgClassName }) => {
  const [isContactOpen, setIsContactOpen] = React.useState(false)
  const canvasRef = React.useRef(null)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(bokeh(canvasRef), [canvasRef])

  const { email, social } = siteMetadata

  return (
    <>
      <Global
        styles={css`
          .tl-edges {
            max-width: 100%;
            overflow-x: inherit;
          }
        `}
      />
      <div
        css={styles.wrapper}
        className={`layout-wrapper ${bgClassName || "white"}`}
      >
        <SEO />
        <ContactContent
          social={social}
          isContactOpen={isContactOpen}
          closeContact={() => {
            setIsContactOpen(false)
          }}
        >
          <b>Martin Bórik - borik.net</b>
          <br />
          <span style={{ color: "#848484" }}>Košice, Slovakia</span>
          <br />
          <Obfuscate email={email} />
          <br />
          <Obfuscate tel="+421908343277">+421 908 343 277</Obfuscate>
        </ContactContent>
        <div className={`page${isContactOpen ? " page-move" : ""}`}>
          <canvas ref={canvasRef} css={styles.bokeh} className="bokeh"></canvas>
          <div css={styles.pageTab} className="tab"></div>
          <div css={styles.pageTab} className="tab"></div>
          <div css={styles.pageTab} className="tab"></div>
          <div css={styles.mainContainer} className="tab">
            <div className="layout-inner">
              <div css={styles.layoutMargin}>
                <Menu
                  numPoints={18}
                  duration={600}
                  delayPointsMax={300}
                  delayPerPath={100}
                  fixedMenuPosition={false}
                />
                <ContactButton
                  openContact={() => {
                    setIsContactOpen(true)
                  }}
                />
              </div>
              <div css={styles.pageContainer}>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

LayoutContactMe.propTypes = {
  children: PropTypes.node.isRequired,
  bgClassName: PropTypes.string,
}

export default LayoutContactMe
