import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import styles from "./layout.css"
import Menu from "../menu"

const Layout = ({
  title,
  children,
  bgClassName,
  fixedMenuPosition = false,
}) => {
  return (
    <>
      <Helmet
        title={title || "borik.net"}
        meta={[
          {
            name: "description",
            content:
              "frontend developer, 8bit freak, loving father and former alternative electronic music producer",
          },
          {
            name: "keywords",
            content:
              "frontend software engineer, full stack javascript developer",
          },
          { charSet: "utf-8" },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <div className="layout-inner">
        <div css={styles.layout}>
          <Menu
            bgClassName={bgClassName}
            numPoints={18}
            duration={600}
            delayPointsMax={300}
            delayPerPath={100}
            fixedMenuPosition={fixedMenuPosition}
          />
        </div>
        <div css={styles.pageContainer}>{children}</div>
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
