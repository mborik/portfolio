import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image"

const CompatibleImg = ({ alt = "", imageInfo, style }) => {
  const { childImageSharp, publicURL } = imageInfo

  if (childImageSharp) {
    return (
      <GatsbyImage
        style={style}
        image={childImageSharp.gatsbyImageData}
        alt={alt}
      />
    )
  } else if (typeof publicURL === "string") {
    return <img style={style} src={publicURL} alt={alt} />
  }

  return null
}

CompatibleImg.propTypes = {
  alt: PropTypes.string,
  style: PropTypes.object,
  imageInfo: PropTypes.shape({
    childImageSharp: PropTypes.object,
    publicURL: PropTypes.string,
  }).isRequired,
}

export default CompatibleImg
