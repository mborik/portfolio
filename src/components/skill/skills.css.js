import { css } from "@emotion/core"
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
      font-weight: 700;
      max-width: 60%;
      ${media50em} {
        font-size: 1em;
        line-height: 1.2em;
        max-width: 500px;
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
    z-index: 1;
  `,
  fixed: css`
    position: fixed;
  `,
  gridLayer: css`
    width: 100%;
  `,
  gridLayerRight: css`
    margin-top: -5rem;
    transform: perspective(3000px) translateY(-70px) rotateX(55deg)
      rotateZ(-45deg);
    transform-origin: center center;
    ${media50em} {
      width: calc(100% + 450px);
      transform: perspective(3000px) translateY(-17rem) rotateX(55deg)
        rotateZ(-45deg);
      transform-origin: center bottom;
    }
  `,
  gridLayerLeft: css`
    transform: translateX(0) translateY(0) rotateX(0) rotateZ(45deg);
    position: fixed;
    z-index: 2;
    transform-origin: top left;
    padding-top: 10rem;
    // padding-left: 20rem;
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
    ${media36em} {
      width: 100px;
    }
    &:hover span {
      opacity: 1;
      transform: translate3d(0, -5px, 0);
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
    width: 100%;
    height: 100%;
    border-radius: 2%;
    background: #fff;
    margin: 0;
    padding: 0;
    position: relative;
  `,
  gridTitle: css`
    font-size: 1.1em;
    font-weight: 600;
    position: absolute;
    z-index: -1;
    bottom: 0;
    width: 100%;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #fff;
    opacity: 0;
    transform: translate3d(0, -20px, 0);
    transition: transform 0.3s, opacity 0.3s;
  `,
}

export default styles
