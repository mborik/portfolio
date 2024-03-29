import React from "react"
import { Global } from "@emotion/react"
import styles from "./layout.css"
import styleColors from "./layoutColors.css"

const Layout = ({ children }) => {
  return (
    <>
      <div className="pgContainer">
        <div className="pgContent">
          <Global styles={[styles, styleColors]} />
          {children}
        </div>
      </div>
      <span className="bgPageColor">.</span>
    </>
  )
}

export default Layout
