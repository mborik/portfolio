import React from "react"
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

const Slideshow = ({ backLink = "/", images, website, children }) => {
  const slideshow = React.useRef()
  const dimensions = useWnResize(slideshow, 10)
  const [current, setCurrent] = React.useState(0)
  const [isAnimating, setIsAnimating] = React.useState(false)
  const [direction, setDirection] = React.useState("next")
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

  const getVisitLinkIcon = (url) => {
    let iconName = "Visit"
    if (/\bgithub\.com\//.test(url)) {
      iconName = "GitHub"
    } else if (/\byoutu\.?be(\.com)?\//.test(url)) {
      iconName = "Play"
    }
    return Icon[iconName]({
      className: "visitLinkIcon",
      css: styles.visitLinkIcon,
    })
  }

  useEventListener("keydown", (event) => {
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
            bg="#666"
            style={{ opacity: 1 }}
          >
            <Icon.Back className="back-icon" css={styles.iconJob} />
          </AniLink>
        </header>
        <div css={styles.slideshow} ref={slideshow}>
          {dimensions &&
            images.map((item, index) => (
              <Slide
                {...item}
                active={current === index}
                key={item.title}
                dimentions={dimensions}
                direction={direction}
                onEndAnimating={() => {
                  setIsAnimating(false)
                }}
              />
            ))}
          {slidesTotal || website ? (
            <nav css={styles.slideshowNav}>
              {website && (
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={website.replace(/^https?:\/\//, "")}
                  css={styles.visitLink}
                >
                  {getVisitLinkIcon(website)}
                </a>
              )}
              {slidesTotal ? (
                <div css={{ marginTop: "1.5rem" }}>
                  <button
                    key="previous"
                    onClick={goToPrevious}
                    css={styles.btnjob}
                    aria-label="Previous slide"
                  >
                    <Icon.Prev />
                  </button>
                  <button
                    key="next"
                    onClick={goToNext}
                    css={styles.btnjob}
                    aria-label="Next slide"
                  >
                    <Icon.Next />
                  </button>
                </div>
              ) : null}
            </nav>
          ) : null}
          <div css={styles.gradient}></div>
        </div>
        {children}
      </main>
    </section>
  )
}

Slideshow.propTypes = {
  backLink: PropTypes.string,
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
  website: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Slideshow

// Inspired by https://github.com/codrops/MultiLayoutSlideshow/
