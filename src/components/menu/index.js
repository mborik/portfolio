import React from "react"
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { css } from "@emotion/react"
import styles from "./menu.css"
import { defaultLinks } from "./menu.links"

const Menu = ({
  numPoints,
  duration,
  delayPointsMax,
  delayPerPath,
  fixedMenuPosition,
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(null)
  const elmHamburger = React.useRef()
  const isAnimating = React.useRef(false)
  const arrPathRef = Array(3).fill("")
  const pathRef = React.useRef(arrPathRef.map(React.createRef))

  React.useEffect(() => {
    const delayPointsArray = []
    let timeStart = Date.now()

    function cubicInOut(t) {
      return t < 0.5
        ? 4.0 * t * t * t
        : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0
    }

    function updatePath(time) {
      const points = []
      for (let i = 0; i < numPoints + 1; i++) {
        points[i] =
          cubicInOut(
            Math.min(Math.max(time - delayPointsArray[i], 0) / duration, 1)
          ) * 100
      }

      let str = ""
      str += isMenuOpen ? `M 0 0 V ${points[0]} ` : `M 0 ${points[0]} `
      for (let i = 0; i < numPoints - 1; i++) {
        const p = ((i + 1) / (numPoints - 1)) * 100
        const cp = p - ((1 / (numPoints - 1)) * 100) / 2
        str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${
          points[i + 1]
        } `
      }
      str += isMenuOpen ? `V 0 H 0` : `V 100 H 0`
      return str
    }

    function render() {
      for (let i = 0; i < pathRef.current.length; i++) {
        pathRef.current[i].current.setAttribute(
          "d",
          updatePath(
            Date.now() -
              (timeStart +
                delayPerPath *
                  (isMenuOpen ? i : pathRef.current.length - i - 1))
          )
        )
      }
    }

    function renderLoop() {
      render()
      if (
        Date.now() - timeStart <
        duration + delayPerPath * (pathRef.current.length - 1) + delayPointsMax
      ) {
        requestAnimationFrame(() => {
          renderLoop()
        })
      } else {
        isAnimating.current = false
      }
    }

    function toggle() {
      isAnimating.current = true
      const range = 4 * Math.random() + 6
      for (let i = 0; i < numPoints; i++) {
        const radian = (i / (numPoints - 1)) * Math.PI
        delayPointsArray[i] =
          ((Math.sin(-radian) + Math.sin(-radian * range) + 2) / 4) *
          delayPointsMax
      }

      timeStart = Date.now()
      renderLoop()
    }

    // Just animate when change the status
    if (isMenuOpen !== null) {
      toggle()
    }
  }, [delayPerPath, delayPointsMax, duration, isMenuOpen, numPoints])

  function elmHamburgerClick() {
    if (isAnimating.current) {
      return false
    }
    setIsMenuOpen(!isMenuOpen)
  }

  function svgIcos(shapeColor) {
    const shapePath = css`
      &:nth-of-type(1) {
        fill: ${shapeColor.shape1.color};
        opacity: ${shapeColor.shape1.opacity};
      }
      &:nth-of-type(2) {
        fill: ${shapeColor.shape2.color};
        opacity: ${shapeColor.shape2.opacity};
      }
      &:nth-of-type(3) {
        fill: ${shapeColor.shape3.color};
        opacity: ${shapeColor.shape3.opacity};
      }
    `

    return (
      <svg
        css={styles.shape}
        {...(isMenuOpen && { className: "is-opened" })}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {arrPathRef.map((_item, index) => (
          <path
            key={`path${index}`}
            ref={pathRef.current[index]}
            css={shapePath}
          ></path>
        ))}
      </svg>
    )
  }

  function menuGenerator({ title, color, url, icon }) {
    let additionalProps = {}
    if (url.startsWith("http")) {
      additionalProps = { target: "_blank", rel: "noopener norefferer" }
    }
    return (
      <AniLink
        paintDrip
        key={url}
        to={url}
        hex={color}
        className={`global-menu-item${isMenuOpen ? " is-opened" : ""}`}
        {...additionalProps}
      >
        <span>{title}</span>
        {icon && icon()}
      </AniLink>
    )
  }

  const shapeColor = {
    link: { color: "#111", hover: "#fff" },
    shape1: {
      color: `#333`,
      opacity: `0.7`,
    },
    shape2: {
      color: `#666`,
      opacity: `0.7`,
    },
    shape3: {
      color: `#eee`,
      opacity: `0.7`,
    },
  }

  const linkColor = css`
    & a {
      color: ${shapeColor.link.color};
    }
    & a:hover {
      color: ${shapeColor.link.hover};
    }
  `

  const mainClass = fixedMenuPosition
    ? [styles.portfolio, styles.fixedPosition]
    : styles.portfolio

  // Generates the menu
  let menu = Object.entries(defaultLinks).map(([_key, value]) =>
    !Array.isArray(value)
      ? menuGenerator(value)
      : value.map(({ title, color, link: url, icon }) =>
          menuGenerator({ title, color, url, icon })
        )
  )
  menu = [].concat(...menu)

  return (
    <main css={mainClass}>
      <div>
        <button
          ref={elmHamburger}
          className={`hamburger${isMenuOpen ? " is-opened-navi" : ""}`}
          onClick={elmHamburgerClick}
        >
          <div className="hamburger-line hamburger-line-1">
            <div className="hamburgercolr hamburger-line-in hamburger-line-in-1"></div>
          </div>
          <div className="hamburger-line hamburger-line-2">
            <div className="hamburgercolr hamburger-line-in hamburger-line-in-2"></div>
          </div>
          <div className="hamburger-line hamburger-line-3">
            <div className="hamburgercolr hamburger-line-in hamburger-line-in-3"></div>
          </div>
          <div className="hamburger-line hamburger-line-cross-1">
            <div className="hamburgercolr hamburger-line-in hamburger-line-in-cross-1"></div>
          </div>
          <div className="hamburger-line hamburger-line-cross-2">
            <div className="hamburgercolr hamburger-line-in hamburger-line-in-cross-2"></div>
          </div>
        </button>
        <div css={[styles.globalMenu, linkColor]}>
          <div>{menu}</div>
        </div>
        {svgIcos(shapeColor)}
      </div>
    </main>
  )
}

Menu.propTypes = {
  numPoints: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  delayPointsMax: PropTypes.number.isRequired,
  delayPerPath: PropTypes.number.isRequired,
  fixedMenuPosition: PropTypes.bool.isRequired,
}

export default Menu

// Inspired by https://github.com/ykob/shape-overlays
