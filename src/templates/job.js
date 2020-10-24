import React, { useLayoutEffect } from "react"
import { graphql, navigate } from "gatsby"
import { Helmet } from "react-helmet"
import styles from "./job.css"
import Slideshow from "../components/Slideshow"
import Skill from "../components/skill"

export default ({ data }) => {
  const post = data.markdownRemark
  useLayoutEffect(() => {
    if (!post) {
      navigate("/404")
      return <></>
    }
  }, [post])

  function createMarkup() {
    return { __html: post.html }
  }

  return !post ? (
    <></>
  ) : (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {post.frontmatter.jobTitle} on {post.frontmatter.company}
        </title>
      </Helmet>
      <Slideshow images={post.frontmatter.images}>
        <div css={styles.jobtitle}>
          <div css={styles.jobtitleContent} data-test="content">
            <h1>{post.frontmatter.company}</h1>
            <h3>
              {post.frontmatter.jobTitle}, {post.frontmatter.dateFrom}{" "}
              {post.frontmatter.dateTo
                ? ` to ${post.frontmatter.dateTo}`
                : " Present"}
            </h3>
          </div>
        </div>
        {post.html && (
          <div
            css={styles.contentText}
            dangerouslySetInnerHTML={createMarkup()}
          />
        )}
      </Slideshow>
      <Skill
        skills={post.frontmatter.skills}
        type="static"
        title="Tools &amp; Skills"
        style={{ overflow: "hidden", backgroundColor: "#fff" }}
        showLoadingAnimation={false}
        description="Languages, frameworks, libraries or apps that I used or learned."
      />
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug }, hideOnExperience: { eq: false } }
    ) {
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
