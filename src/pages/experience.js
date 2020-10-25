import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import LayoutContactMe from "../components/layout/layout-contact-me"
import Experience from "../components/experience"
import siteTitle from "../utils/siteTitle"

export default ({ data, transitionStatus }) => {
  return (
    <LayoutContactMe bgClassName="experience">
      <Helmet>
        <title>{siteTitle("Work Experience")}</title>
      </Helmet>
      <Experience
        jobs={data.allMarkdownRemark.edges}
        transitionStatus={transitionStatus}
        title="Work Experience"
        description="My work experience is pretty long and this timeline will guide you through all companies I've worked for and projects I've worked on."
      />
    </LayoutContactMe>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fields: {
          slug: { regex: "/experience/" }
          hideOnExperience: { eq: false }
        }
      }
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
