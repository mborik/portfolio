import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import styles from "../css/home.css"

export default () => {
  return (
    <Layout title="404 Not Found">
      <section css={[styles.dataSection, styles.blackColor]}>
        <div css={styles.dataContainer}>
          <div css={styles.dataContent} data-test="404">
            <h1>4O4</h1>
            <h2>definitely, this is not what you looking for 🤷‍♂️</h2>
            <a href="/">🏠</a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
