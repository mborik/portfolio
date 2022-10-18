import { css } from "@emotion/react"
import mediaQueryGenerator from "../../utils/mediaQGen"

const [media36em, media50em] = mediaQueryGenerator([
  { type: "max", size: "36" },
  { type: "max", size: "50" },
])

const styles = {
  textRight: css`
    text-align: right;
  `,
  elementRight: css`
    margin: 1em 0 0 auto;
  `,
  section: css`
    width: 100%;
    padding: 0 3vmax;
    min-height: 50vh;
    overflow: hidden;
    background: #fff;
    h2 {
      margin: 0 0 1rem;
      font-size: 3rem;
      line-height: 1.25;
      ${media50em} {
        font-size: 2.4rem;
      }
    }
    p {
      padding: 0;
      max-width: 33%;
      ${media50em} {
        font-size: 1em;
        line-height: 1.2em;
        max-width: 320px;
      }
    }
  `,
  noPointerEvents: css`
    pointer-events: none;
  `,
  header: css`
    padding: 0 3vmax 0 0;
  `,
  headerStatic: css`
    position: relative;
    z-index: 0;
  `,
  fixed: css`
    position: fixed;
  `,
  gridLayer: css`
    width: 100%;
  `,
  gridLayerRight: css`
    max-width: calc(136px * 5);
    margin: 3rem 0;
    transition: transform 0.3s;
    transform: perspective(3000px) rotateX(55deg) translateX(-5vw)
      rotateZ(-45deg) translateZ(2rem);
    transform-origin: center top;
    ${media50em} {
      width: calc(80px * 5);
      margin: 8rem 0;
      transform: perspective(3000px) rotateX(45deg) rotateZ(320deg)
        translateZ(8rem);
    }
    ${media36em} {
      transform: perspective(3000px) translateX(-1rem) rotateX(45deg)
        rotateZ(350deg) translateZ(4rem);
    }
  `,
  gridLayerLeft: css`
    transform: translateX(0) translateY(0) rotateX(0) rotateZ(45deg);
    position: fixed;
    z-index: 2;
    transform-origin: top left;
    padding-top: 10rem;
    width: calc(80% + 20rem);
  `,
  gridHeight: css`
    width: 100%;
    pointer-events: none;
  `,
  grid: css`
    margin: 0 auto;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    transform-style: flat;
    transform: translate3d(0, 0, 0);
    justify-content: flex-start;
  `,
  gridItem: css`
    width: 128px;
    padding: 8px;
    margin: 0;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    transition: none;
    &:hover span {
      opacity: 1;
      transform: translate3d(0, -5px, 0);
    }
    ${media50em} {
      width: 72px;
      span {
        overflow-wrap: normal;
        font-size: 0.7rem;
        font-weight: 100;
      }
    }
    &::before {
      content: "";
      position: absolute;
      z-index: -1;
      top: 5px;
      right: 5px;
      bottom: 5px;
      left: 5px;
      background: rgba(0, 0, 0, 0.4);
      box-shadow: 0 0 14px 1px rgba(0, 0, 0, 0.4);
      transform: translateZ(-1px) scale(0.9);
      transition: transform 0.3s, opacity 0.3s, box-shadow 0.3s;
      backface-visibility: hidden;
      border-radius: 2%;
    }
    &:hover {
      &::before {
        box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.4);
      }
    }
  `,
  gridImgContainer: css`
    position: relative;
    cursor: pointer;
    z-index: 1;
    display: block;
  `,
  gridImg: css`
    box-shadow: 0 0 7px 1px rgba(0, 0, 0, 0.1);
    width: 120px;
    height: 120px;
    border-radius: 2%;
    background: #fff;
    margin: 0;
    padding: 0;
    position: relative;
    ${media50em} {
      width: 70px;
      height: 70px;
    }
    img {
      width: 82% !important;
      height: 82% !important;
      margin: 8%;
    }
  `,
  gridTitle: css`
    font-size: 1em;
    font-weight: 600;
    position: absolute;
    z-index: -1;
    bottom: 0;
    width: 100%;
    text-align: center;
    letter-spacing: 1px;
    color: #000;
    opacity: 0;
    transform: translate3d(0, -20px, 0);
    transition: transform 0.3s, opacity 0.3s;
  `,
}

export default styles
