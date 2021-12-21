import React, { useLayoutEffect } from "react"
import { graphql, navigate } from "gatsby"
import { Helmet } from "react-helmet"
import styles from "./job.css"
import Slideshow from "../components/Slideshow"
import Skill from "../components/skill"
import siteTitle from "../utils/siteTitle"

export default ({ path, data }) => {
  const post = data.markdownRemark
  const { company, jobTitle, website, images, skills } = post.frontmatter

  useLayoutEffect(() => {
    if (!post) {
      navigate("/404")
      return <></>
    }
  }, [post])

  const backLinkMatch = /^(\/\w+)\//.exec(path)
  const backLink = (backLinkMatch && backLinkMatch[1]) || "/"
  const isProjects = backLink === "/projects"

  const title = isProjects
    ? company
    : [jobTitle, company].filter(part => part).join(" @ ")

  const formatDateRange = ({ dateFrom, dateTo }) => {
    const result = [dateFrom]

    if (dateTo) {
      if (dateTo !== dateFrom) {
        result.push(dateTo)
      }
    } else {
      result.push("Present")
    }

    return result.join(" to ")
  }

  return post ? (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{siteTitle(title)}</title>
      </Helmet>
      <Slideshow backLink={backLink} images={images} website={website}>
        <div css={styles.jobtitle}>
          <div css={styles.jobtitleContent}>
            {!isProjects ? <h1>{company}</h1> : null}
            <h3>
              {!isProjects && jobTitle ? <>{jobTitle},&nbsp;</> : null}
              {formatDateRange(post.frontmatter)}
            </h3>
          </div>
        </div>
        {post.html && (
          <div
            css={styles.contentText}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        )}
      </Slideshow>
      <Skill
        skills={skills}
        type="static"
        title="Tools &amp; Skills"
        style={{ overflow: "hidden", backgroundColor: "#fff" }}
        showLoadingAnimation={false}
        description="Languages, frameworks, libraries or the apps that I used while I worked for this company, customer or on the project:"
      />
    </>
  ) : null
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        company
        jobTitle
        website
        dateFrom(formatString: "MMM YYYY")
        dateTo(formatString: "MMM YYYY")
        images {
          title
          description
          layout
          caption
          files {
            image {
              childImageSharp {
                fluid(maxWidth: 1100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        skills {
          title
          image {
            publicURL
            childImageSharp {
              fluid(maxWidth: 200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
