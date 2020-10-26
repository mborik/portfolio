import { css } from "@emotion/core"

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
  `,
  dataContent: css`
    padding-top: 20vh;
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
