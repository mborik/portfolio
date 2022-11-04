import { css } from "@emotion/react"
import mediaQueryGenerator from "../utils/mediaQGen"

const [media45em] = mediaQueryGenerator([{ type: "max", size: "45" }])

const styles = {
  blackColor: css`
    color: #000;
  `,
  dataSection: css`
    height: 100%;
  `,
  dataContainer: css`
    margin: 0 auto;
    padding: 0 3rem;
    max-width: 768px;
    height: 100%;
    ${media45em} {
      padding: 0 1rem;
      width: auto;
    }
  `,
  dataContent: css`
    padding-top: 20vh;
    h3 {
      max-width: 34rem;
    }
    .Typewriter {
      font-size: 1.5em;
      color: #666;
    }
  `,
  dataShadow: css`
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background: transparent url("/me.png") 75% bottom fixed no-repeat;
    background-size: 75vmin;
    opacity: 0.1;
  `,
}

export default styles
