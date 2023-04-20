import { css } from "@emotion/react"
import mediaQueryGenerator from "../utils/mediaQGen"

const [media80em] = mediaQueryGenerator([{ type: "max", size: "80" }])

const styles = {
  blackColor: css`
    color: #000;
  `,
  dataSection: css`
    height: 100%;
  `,
  dataContainer: css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 3em;
    margin: 0 auto;
    padding: 0 3rem;
    padding-top: 20vh;
    > div {
      flex: 1 0 auto;
      max-width: 768px;
    }
    ${media80em} {
      flex-direction: column;
      padding: 0 1rem;
      padding-top: 10vh;
      width: auto;
    }
  `,
  dataLeftPane: css`
    text-align: right;
    h3 {
      font-size: 1.3rem;
      line-height: 2rem;
      max-width: 33rem;
    }
  `,
  dataRightPane: css`
    text-align: left;
    h2 {
      font-size: 2rem;
      > kbd {
        margin: 0 0.2em;
        font-size: inherit;
      }
    }
    h4 {
      font-size: 1.15rem;
      line-height: 1.7rem;
      max-width: 33rem;
    }
    .Typewriter {
      font-size: 1.4em;
      color: #666;
    }
  `,
  dataShadow: css`
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background: transparent url("/me.png") left bottom fixed no-repeat;
    background-size: 50vmin;
    opacity: 0.1;
    z-index: -1;
  `,
}

export default styles
