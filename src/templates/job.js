import React, { useLayoutEffect } from "react"
import { graphql, navigate } from "gatsby"
import styles from "./job.css"
import Slideshow from "../components/Slideshow"
import SEO from "../components/seo"
import Skill from "../components/skill"

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
      <SEO title={title} />
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
      {skills && skills.length ? (
        <Skill
          skills={skills}
          type="static"
          title="Tools &amp; Skills"
          showLoadingAnimation={false}
          description={`Languages, frameworks, libraries or the apps that I used${
            isProjects
              ? ""
              : " while I was working for this company on projects for commercial clients or on inhouse projects"
          }:`}
        />
      ) : null}
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
