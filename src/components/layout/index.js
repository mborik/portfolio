import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { Global, css } from "@emotion/core"
import styles from "./layout.css"
import Menu from "../menu"
import siteTitle from "../../utils/siteTitle"
import { siteMetadata } from "../../../gatsby-config"

const Layout = ({
  title,
  children,
  bgClassName,
  fixedMenuPosition = false,
}) => {
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
          title={siteTitle(title)}
          meta={[
            { name: "description", content: siteMetadata.siteDescription },
            { name: "keywords", content: siteMetadata.siteKeywords },
            { charSet: "utf-8" },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div className="layout-inner">
          <div css={styles.layout}>
            <Menu
              numPoints={18}
              duration={600}
              delayPointsMax={300}
              delayPerPath={100}
              fixedMenuPosition={fixedMenuPosition}
            />
          </div>
          <div css={styles.pageContainer}>{children}</div>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  bgClassName: PropTypes.string,
  fixedMenuPosition: PropTypes.bool,
}

export default Layout
