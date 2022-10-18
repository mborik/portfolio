import React from "react"
import Layout from "../components/layout"
import styles from "../css/home.css"

const Page403 = () => {
  return (
    <Layout title="403 Forbidden">
      <section css={[styles.dataSection, styles.blackColor]}>
        <div css={styles.dataContainer}>
          <div css={styles.dataContent}>
            <h1>4O3</h1>
            <h2>keep this frequency clear ☝</h2>
            <a href="/">🏠</a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Page403
