import React from "react"
import aboutMe from "../contentJSON/about-me.json"
import LayoutContactMe from "../components/layout/layout-contact-me"
import styles from "../css/aboutme.css"
import SEO from "../components/seo"

const PageAboutMe = () => {
  return (
    <LayoutContactMe bgClassName="aboutme">
      <SEO title="About" />
      <section css={styles.aboutSection}>
        <div css={styles.aboutContainer}>
          <div css={styles.aboutContent}>
            <span css={styles.aboutShadow}>borik.net</span>
            {aboutMe.map(({ id, subtitle, content, image, description }) =>
              image ? (
                <figure key={id} css={styles.heroImg}>
                  <img src={image} />
                  <figcaption
                    dangerouslySetInnerHTML={{ __html: description }}
                  ></figcaption>
                </figure>
              ) : (
                <React.Fragment key={id}>
                  <h2
                    css={styles.hTag}
                    dangerouslySetInnerHTML={{ __html: subtitle }}
                  ></h2>
                  <p dangerouslySetInnerHTML={{ __html: content }}></p>
                </React.Fragment>
              )
            )}
          </div>
        </div>
      </section>
    </LayoutContactMe>
  )
}

export default PageAboutMe
