import React from "react"
import PropTypes from "prop-types"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import AnimateItem from "./animate-item"
import Delay from "../delay"
import styles from "./skills.css"

const Skill = ({
  skills,
  title,
  description,
  showLoadingAnimation = true,
  type = "static",
  style = false,
}) => {
  const [loaded, setLoaded] = React.useState(false)
  const gridRef = React.useRef(null)
  const gridHeightRef = React.useRef(null)
  const wrapperDiv = React.useRef(null)

  const getSkills = () => {
    // Remove transform css to let work fix position
    if (wrapperDiv.current) {
      if (wrapperDiv.current.style.removeProperty) {
        wrapperDiv.current.style.removeProperty("transform")
      } else {
        wrapperDiv.current.style.removeAttribute("transform")
      }
    }
    return loaded
      ? skills.map(({ title, image }) => (
          <AnimateItem type={type} title={title} key={title} image={image} />
        ))
      : null
  }

  useScrollPosition(({ currPos }) => {
    if (type !== "static" && loaded) {
      gridRef.current.style.transform = `translate3d(0, ${currPos.y}px, 0)`
    }
  })

  React.useEffect(() => {
    wrapperDiv.current = document.querySelector(".tl-wrapper")
    if (type !== "static" && loaded) {
      gridHeightRef.current.style.height = `calc(${gridRef.current.clientHeight}px + 45rem)`
    }
  }, [type, loaded])

  const cssStyles =
    type === "static"
      ? {
          header: [styles.header, styles.headerStatic, styles.noPointerEvents],
          h2: [styles.textRight, styles.noPointerEvents],
          p: [styles.textRight, styles.elementRight, styles.noPointerEvents],
          div: [styles.gridLayer, styles.gridLayerRight],
        }
      : {
          header: [styles.header, styles.fixed, styles.noPointerEvents],
          h2: styles.noPointerEvents,
          p: styles.noPointerEvents,
          div: [styles.gridLayer, styles.gridLayerLeft],
        }

  return (
    <main css={styles.section} {...(style && { style })}>
      <header css={cssStyles.header}>
        <h2 css={cssStyles.h2}>{title}</h2>
        <p css={cssStyles.p}>{description}</p>
      </header>
      <Delay
        wait={1000}
        cb={() => {
          setLoaded(true)
        }}
        showLoadingAnimation={showLoadingAnimation}
      >
        <div css={cssStyles.div}>
          <ul css={styles.grid} ref={gridRef}>
            {getSkills()}
          </ul>
        </div>
      </Delay>
      <div css={styles.gridHeight} ref={gridHeightRef}></div>
    </main>
  )
}

Skill.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.object.isRequired,
    }).isRequired
  ).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showLoadingAnimation: PropTypes.bool,
  type: PropTypes.string,
  style: PropTypes.object,
}

export default Skill

// Inspired by https://github.com/codrops/IsometricGrids
