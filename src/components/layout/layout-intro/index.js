import React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/react"
import styles from "../layout-contact-me/contact-me.css"
import bokeh from "../bokeh"
import SimpleMenu from "../../menu/simple"
import SEO from "../../seo"

const LayoutIntro = ({ children }) => {
  const canvasRef = React.useRef(null)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(bokeh(canvasRef), [canvasRef])

  return (
    <>
      <Global
        styles={css`
          .tl-edges {
            max-width: 100%;
            overflow-x: inherit;
          }
        `}
      />
      <div css={styles.wrapper} className={`layout-wrapper home`}>
        <SEO />
        <div className="page">
          <canvas ref={canvasRef} css={styles.bokeh} className="bokeh"></canvas>
          <div css={styles.pageTab} className="tab"></div>
          <div css={styles.pageTab} className="tab"></div>
          <div css={styles.pageTab} className="tab"></div>
          <div css={styles.mainContainer} className="tab">
            <div className="layout-inner">
              <div css={styles.layoutMargin}>
                <SimpleMenu />
              </div>
              <div css={styles.pageContainer}>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

LayoutIntro.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutIntro
