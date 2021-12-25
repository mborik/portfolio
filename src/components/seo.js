import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import siteTitle from "../utils/siteTitle"
import { siteMetadata } from "../../gatsby-config"

const SEO = ({ title }) => {
  const { pathname } = useLocation()
  const { siteDescription, siteKeywords, siteUrl, social } = siteMetadata

  const seoTitle = siteTitle(title)
  const seoImage = `${siteUrl}${social.openGraphImage}`
  const url = `${siteUrl}${pathname}`

  return (
    <Helmet title={seoTitle}>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />
      <meta name="image" content={seoImage} />

      <meta property="og:url" content={url} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:description" content={siteDescription} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={social.twitter} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={seoImage} />
    </Helmet>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
}

export default SEO
