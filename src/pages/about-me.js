import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import aboutMe from "../contentJSON/about-me.json"
import LayoutContactMe from "../components/layout/layout-contact-me"
import styles from "../css/aboutme.css"
import siteTitle from "../utils/siteTitle"

export default () => {
  return (
    <LayoutContactMe bgClassName="aboutme">
      <Helmet>
        <title>{siteTitle("About")}</title>
      </Helmet>
      <section css={styles.aboutSection}>
        <div css={styles.aboutContainer}>
          <div css={styles.aboutContent}>
            <span css={styles.aboutShadow}>borik.net</span>
            {aboutMe.map(({ id, subtitle, content, image, description }) =>
              image ? (
                <figure css={styles.heroImg}>
                  <img src={image} />
                  <figcaption
                    dangerouslySetInnerHTML={{ __html: description }}
                  ></figcaption>
                </figure>
              ) : (
                <Fragment key={id}>
                  <h2
                    css={styles.hTag}
                    dangerouslySetInnerHTML={{ __html: subtitle }}
                  ></h2>
                  <p dangerouslySetInnerHTML={{ __html: content }}></p>
                </Fragment>
              )
            )}
          </div>
        </div>
      </section>
    </LayoutContactMe>
  )
}
