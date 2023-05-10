import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "./menu.css"
import { defaultLinks } from "./menu.links"

const SimpleMenu = ({}) => {
  function menuGenerator({ icon, title, color, url }) {
    if (url === location.pathname) return null
    return (
      <li>
        <AniLink paintDrip key={url} to={url} hex={color}>
          <button className="simple-menu-item">
            {icon()}
            <div className="title">{title}</div>
          </button>
        </AniLink>
      </li>
    )
  }

  return (
    <main css={styles.portfolio}>
      <div css={styles.globalMenu}>
        <ul css={styles.introMenuItems}>
          {Object.entries(defaultLinks).map(([_key, value]) =>
            !Array.isArray(value)
              ? menuGenerator(value)
              : value.map(({ icon, title, color, link: url }) =>
                  menuGenerator({ icon, title, color, url })
                )
          )}
        </ul>
      </div>
    </main>
  )
}

export default SimpleMenu
