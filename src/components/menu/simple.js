import React, { useMemo } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "./menu.css"
import { defaultLinks } from "./menu.links"

const SimpleMenu = ({}) => {
  function menuGenerator({ icon, title, color, url }) {
    const pathname =
      typeof window !== "undefined" ? window.location.pathname : "/"
    if (url === pathname) return null
    return (
      <li key={url}>
        <AniLink paintDrip to={url} hex={color}>
          <button className="simple-menu-item">
            {icon()}
            <div className="title">{title}</div>
          </button>
        </AniLink>
      </li>
    )
  }

  const menu = useMemo(() => {
    return Object.entries(defaultLinks).map(([_key, value]) =>
      !Array.isArray(value)
        ? menuGenerator(value)
        : value.map(({ icon, title, color, link: url }) =>
            menuGenerator({ icon, title, color, url })
          )
    )
  }, [])

  return (
    <main css={styles.portfolio}>
      <div css={styles.globalMenu}>
        <ul css={styles.introMenuItems}>{menu}</ul>
      </div>
    </main>
  )
}

export default SimpleMenu
