import React from "react"
import PropTypes from "prop-types"
import capitalize from "../../../utils/capitalize"
import Icon from "../../icon"
import styles from "./contact-me.css"

const BASE_LINKS = {
  gitHub: "https://github.com/",
  twitter: "https://twitter.com/",
  linkedIn: "https://www.linkedin.com/",
}

const ContactContent = ({ children, isContactOpen, social, closeContact }) => (
  <div className={`contact${isContactOpen ? " contactme-open" : ""}`}>
    <button
      css={[styles.btn, styles.blackPgColor]}
      className="btn-contactme-close"
      aria-label="Close contact me"
      title="Close contact me"
      data-test="contactmeClose"
      onClick={closeContact}
    >
      <Icon.Cross />
    </button>
    <div className="contactme-container">
      <div className="contactme-info">
        <p>{children}</p>
        <p className="contactme-social">
          {Object.entries(social)
            .filter(([_key, value]) => value)
            .map(([key, value]) => {
              let title = capitalize(key),
                ico = title
              if (key === "resumeInPdf") {
                title = "CV in PDF"
                ico = "CV"
              }
              return (
                <a
                  key={value}
                  target="_blank"
                  href={`${BASE_LINKS[key] || ""}${value}`}
                  css={styles.whiteLink}
                  rel="noopener noreferrer"
                  title={title}
                >
                  {Icon[ico]()}
                </a>
              )
            })}
        </p>
      </div>
    </div>
  </div>
)

ContactContent.propTypes = {
  children: PropTypes.node.isRequired,
  social: PropTypes.objectOf(PropTypes.string).isRequired,
  isContactOpen: PropTypes.bool.isRequired,
  closeContact: PropTypes.func.isRequired,
}

export default ContactContent
