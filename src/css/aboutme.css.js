import { css } from "@emotion/core"
import mediaQueryGenerator from "../utils/mediaQGen"
import typography from "../utils/typography"

const [media45em] = mediaQueryGenerator([{ type: "max", size: "45" }])

const styles = {
  aboutSection: css`
    color: #000;
    font-size: 1.2rem;
  `,
  aboutContainer: css`
    margin: 0 auto;
    padding: 0 3rem;
    max-width: 800px;
  `,
  aboutContent: css`
    padding-top: 10vh;
  `,
  hTag: css`
    text-transform: uppercase;
    font-size: 2.4rem;
    line-height: 1.2em;
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    display: inline-block;
    position: relative;
    &:not(:first-of-type) {
      padding-top: 5vh;
    }
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      background: #000;
      height: 7px;
      width: 7rem;
    }
  `,
  aboutShadow: css`
    color: rgba(0, 0, 0, 0.04);
    position: absolute;
    top: 20vh;
    left: 20vw;
    font-size: 12rem;
  `,
  heroImg: css`
    width: 100%;
    position: relative;
    ${media45em} {
      margin: 0 -4rem;
      width: auto;
    }
    > img {
      margin: 0;
      box-shadow: 0px 2px 7px 1px #0004;
    }
    > figcaption {
      position: absolute;
      display: flex;
      top: 1rem;
      bottom: 1rem;
      left: 1rem;
      max-height: 100%;
      align-items: flex-end;
      font-family: ${typography.options.headerFontFamily.join(",")};
      font-size: 1rem;
      font-weight: 100;
      color: #fff;
      text-shadow: 1px 1px 1px #000;
      z-index: 1;
    }
  `,
}

export default styles
