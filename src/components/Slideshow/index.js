import React, { useRef, useState } from "react"
import PropTypes from "prop-types"
import useEventListener from "@use-it/event-listener"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useWnResize } from "../hooks"
import Icon from "../icon"
import Slide from "./Slide"
import styles from "./slideshow.css"

const KEYCODE = {
  LEFT: 37,
  RIGHT: 39,
}

const Slideshow = ({ backLink = "/", images, children }) => {
  const slideshow = useRef()
  const dimentions = useWnResize(slideshow, 10)
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState("next")
  const slidesTotal = images.length - 1

  const goToNext = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setDirection("next")
      setCurrent(current < slidesTotal ? current + 1 : 0)
    }
  }

  const goToPrevious = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setDirection("previous")
      setCurrent(current > 0 ? current - 1 : slidesTotal)
    }
  }

  useEventListener("keydown", event => {
    const evt = event || window.event
    const keyCode = evt.which || evt.keyCode
    if (keyCode === KEYCODE.LEFT) {
      goToPrevious()
    } else if (keyCode === KEYCODE.RIGHT) {
      goToNext()
    }
  })

  return (
    <section>
      <main css={styles.job}>
        <header>
          <AniLink
            cover
            to={backLink}
            css={styles.arrowBack}
            direction="right"
            data-test="goback"
            bg="#666"
            style={{ opacity: 1 }}
          >
            <Icon.Back css={styles.iconJob} />
          </AniLink>
        </header>
        <div css={styles.slideshow} data-test="slideshow" ref={slideshow}>
          {dimentions &&
            images.map((item, index) => (
              <Slide
                {...item}
                active={current === index}
                key={item.title}
                dimentions={dimentions}
                direction={direction}
                onEndAnimating={() => {
                  setIsAnimating(false)
                }}
              />
            ))}
          {!!slidesTotal && (
            <nav css={styles.slideshowNav}>
              <button
                onClick={goToPrevious}
                css={styles.btnjob}
                aria-label="Previous slide"
                data-test="previous"
              >
                <Icon.Prev />
              </button>
              <button
                onClick={goToNext}
                css={styles.btnjob}
                aria-label="Next slide"
                data-test="next"
              >
                <Icon.Next />
              </button>
            </nav>
          )}
          <div css={styles.gradient}></div>
        </div>
        {children}
      </main>
    </section>
  )
}

Slideshow.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      layout: PropTypes.string.isRequired,
      files: PropTypes.arrayOf(
        PropTypes.shape({
          image: PropTypes.object.isRequired,
        }).isRequired
      ).isRequired,
      caption: PropTypes.string,
    }).isRequired
  ).isRequired,
  children: PropTypes.node.isRequired,
}

export default Slideshow

// Inspired by https://github.com/codrops/MultiLayoutSlideshow/
