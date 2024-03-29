import React from "react"

/**
 * Get the previous props or state
 *
 * @param {*} value
 * @returns {*} re
 */
const usePrevious = (value) => {
  const ref = React.useRef()
  React.useEffect(() => {
    ref.current = value
  })
  return ref.current
}

export default usePrevious
