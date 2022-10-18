import React from "react"
import { graphql } from "gatsby"
import LayoutContactMe from "../components/layout/layout-contact-me"
import Experience from "../components/experience"
import SEO from "../components/seo"

const PageExperience = ({ data, transitionStatus }) => {
  return (
    <LayoutContactMe bgClassName="experience">
      <SEO title="Work Experience" />
      <Experience
        jobs={data.allMarkdownRemark.edges}
        transitionStatus={transitionStatus}
        title="Work Experience"
        description="My work experience is pretty long and this timeline will guide you through all companies or customers I've been working for and projects I've been working on."
      />
    </LayoutContactMe>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/experience/" } } }
      sort: { fields: [frontmatter___dateFrom], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            company
            logo {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
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

export default PageExperience
