import React from "react"
import Layout from "../components/layout"
import styles from "../css/home.css"

export default () => {
  return (
    <Layout title="404 Not Found">
      <section css={[styles.dataSection, styles.blackColor]}>
        <div css={styles.dataContainer}>
          <div css={styles.dataContent}>
            <h1>4O4</h1>
            <h2>definitely, this is not what you looking for 🤷‍♂️</h2>
            <a href="/">🏠</a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
