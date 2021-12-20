import React, { useState } from "react"
import Helmet from "react-helmet"
import Obfuscate from "react-obfuscate"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"
import styles from "./contact-me.css"
import ContactButton from "./contactButton"
import ContactContent from "./contactContent"
import Menu from "../../menu"
import siteTitle from "../../../utils/siteTitle"
import { siteMetadata } from "../../../../gatsby-config"

const LayoutContactMe = ({ children, bgClassName }) => {
  const [isContactOpen, setIsContactOpen] = useState(false)

  const { email, social, siteDescription, siteKeywords } = siteMetadata

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
        <Helmet
          title={siteTitle()}
          meta={[
            { name: "description", content: siteDescription },
            { name: "keywords", content: siteKeywords },
            { charSet: "utf-8" },
          ]}
        >
          <html lang="en" />
        </Helmet>
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
          <div css={styles.pageTab} className="tab"></div>
          <div css={styles.pageTab} className="tab"></div>
          <div css={styles.pageTab} className="tab"></div>
          <div css={styles.mainContainer} className="tab">
            <div className="layout-inner">
              <div css={styles.layoutMagin}>
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
