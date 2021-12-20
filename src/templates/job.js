import React, { useLayoutEffect } from "react"
import { graphql, navigate } from "gatsby"
import { Helmet } from "react-helmet"
import styles from "./job.css"
import Slideshow from "../components/Slideshow"
import Skill from "../components/skill"
import siteTitle from "../utils/siteTitle"

export default ({ path, data }) => {
  const post = data.markdownRemark
  useLayoutEffect(() => {
    if (!post) {
      navigate("/404")
      return <></>
    }
  }, [post])

  const backLinkMatch = /^(\/\w+)\//.exec(path)
  const backLink = (backLinkMatch && backLinkMatch[1]) || "/"
  const isProjects = backLink === "/projects"

  console.log(path, backLink)
  const title = isProjects
    ? post.frontmatter.company
    : [
        ...([post.frontmatter.jobTitle] || []),
        ...([post.frontmatter.company] || []),
      ]

  const formatDateRange = (dateFrom, dateTo) => {
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
      <Slideshow backLink={backLink} images={post.frontmatter.images}>
        <div css={styles.jobtitle}>
          <div css={styles.jobtitleContent} data-test="content">
            {!isProjects ? <h1>{post.frontmatter.company}</h1> : null}
            <h3>
              {!isProjects && post.frontmatter.jobTitle ? (
                <>{post.frontmatter.jobTitle},&nbsp;</>
              ) : null}
              {formatDateRange(
                post.frontmatter.dateFrom,
                post.frontmatter.dateTo
              )}
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
        skills={post.frontmatter.skills}
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
