import React from "react"
import { graphql } from "gatsby"
import LayoutContactMe from "../components/layout/layout-contact-me"
import Experience from "../components/experience"
import SEO from "../components/seo"

const PageProjects = ({ data, transitionStatus }) => {
  return (
    <LayoutContactMe bgClassName="projects">
      <SEO title="Hobby projects" />
      <Experience
        jobs={data.allMarkdownRemark.edges}
        transitionStatus={transitionStatus}
        title="Side &amp; hobby projects"
        description="Working on side or hobby projects pushes me forward and probably it taught me the most."
      />
    </LayoutContactMe>
  )
}

export const query = graphql`
  query projects {
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/projects/" } } }
      sort: { frontmatter: { dateFrom: DESC } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            company
            logo {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, aspectRatio: 1)
              }
            }
            jobTitle
            dateFrom(formatString: "YYYY")
            dateTo(formatString: "YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default PageProjects
