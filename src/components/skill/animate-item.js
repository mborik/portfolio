import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import anime from "animejs"
import styles from "./skills.css"
import CompatibleImg from "./compatible-image"

function AnimateItem({ type, title, image }) {
  const ref = useRef(null)
  const imageRef = useRef()

  useEffect(() => {
    /**
     * Run the animation on the child tags
     *
     * @param {*} e
     * @param {*} callback "Animation to run"
     * @param {boolean} [mEnter=true]
     */
    function animateItems(e, callback, mEnter = true) {
      const { target } = e
      if (mEnter) {
        target.style.zIndex = 2
      }
      callback(imageRef.current)
    }

    function handleMouseEnter(e) {
      // Set animation
      animateItems(e, item => {
        anime.remove(item)
        type === "static"
          ? anime({
              targets: item,
              translateX: 50,
              translateY: -50,
              duration: 500,
              easing: "cubicBezier(.2, 1, .2, 1)",
              delay: 20,
            })
          : anime({
              targets: item,
              translateX: -50,
              translateY: -50,
            })
      })
    }

    function handleMouseLeave(e) {
      animateItems(
        e,
        item => {
          anime.remove(item)
          anime({
            targets: item,
            translateX: 0,
            translateY: 0,
            rotateZ: 0,
            duration: 400,
            easing:
              type === "static" ? "easeInOutExpo" : "easeOutElastic(1, .5)",
            complete: () => {
              e.target.style.zIndex = 1
            },
          })
        },
        false
      )
    }

    const node = ref.current
    if (node) {
      node.addEventListener("mouseenter", handleMouseEnter)
      node.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        node.removeEventListener("mouseenter", handleMouseEnter)
        node.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [type])

  return (
    <li css={styles.gridItem} ref={ref}>
      <div css={styles.gridImgContainer}>
        <div css={styles.gridImg} ref={imageRef}>
          <CompatibleImg
            imageInfo={image}
            style={{
              overflow: "visible",
            }}
            alt={title}
          />
        </div>
        <span css={styles.gridTitle}>{title}</span>
      </div>
    </li>
  )
}
AnimateItem.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
}

export default AnimateItem
