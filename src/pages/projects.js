import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import LayoutContactMe from "../components/layout/layout-contact-me"
import Experience from "../components/experience"
import siteTitle from "../utils/siteTitle"

export default ({ data, transitionStatus }) => {
  return (
    <LayoutContactMe bgClassName="projects">
      <Helmet>
        <title>{siteTitle("Hobby projects")}</title>
      </Helmet>
      <Experience
        jobs={data.allMarkdownRemark.edges}
        transitionStatus={transitionStatus}
        title="Side & hobby projects"
        description="Working on side or hobby projects pushes me forward and probably it taught me the most."
      />
    </LayoutContactMe>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/projects/" } } }
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
                fluid(maxWidth: 481) {
                  ...GatsbyImageSharpFluid
                }
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
