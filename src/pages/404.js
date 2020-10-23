import React from "react"
import { Helmet } from "react-helmet"
import LayoutContactMe from "../components/layout/layout-contact-me"
import styles from "../css/home.css"

export default () => {
  return (
    <LayoutContactMe bgClassName="e404">
      <Helmet>
        <title>404 Not Found</title>
      </Helmet>
      <section css={[styles.dataSection, styles.blackColor]}>
        <div css={styles.dataContainer}>
          <div css={styles.dataContent} data-test="404">
            <h1>4O4</h1>
            <h2>definitely, this is not what you looking for</h2>
            <a href="/">Go to Home</a>
          </div>
        </div>
      </section>
    </LayoutContactMe>
  )
}
