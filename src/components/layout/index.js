import React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/react"
import styles from "./layout.css"
import SEO from "../seo"
import Menu from "../menu"

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
        <SEO title={title} />
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
