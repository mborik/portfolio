import React from "react"
import PropTypes from "prop-types"
import styles from "./contact-me.css"

const ContactButton = ({ openContact }) => (
  <div css={styles.contactContactme}>
    <button
      css={[styles.btn, styles.btnContactme]}
      className="btn-contact-color"
      onClick={openContact}
      title="Contact me"
      data-test="contactme"
    >
      Contact&ensp;
      <svg className="icon">
        <use xlinkHref="#icon-contact"></use>
      </svg>
    </button>
  </div>
)

ContactButton.propTypes = {
  openContact: PropTypes.func.isRequired,
}

export default ContactButton
