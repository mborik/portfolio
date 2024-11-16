import { siteMetadata } from "../../gatsby-config"

export default (part) => {
  const result = []
  if (part) {
    result.push(part)
  }
  if (siteMetadata && siteMetadata.siteTitle) {
    result.push(siteMetadata.siteTitle)
  }
  return result.join(" – ")
}
