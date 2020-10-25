import { css } from "@emotion/core"
import lineSvg from "../../static/assets/line.svg"

const styles = css`
  .e404.layout-wrapper .layout-inner,
  .home.layout-wrapper .layout-inner {
    background: #eee;
    background: radial-gradient(ellipse at center, #eee 0%, #666 100%);
  }
  .aboutme.layout-wrapper .layout-inner {
    background: #eee;
    background: radial-gradient(ellipse at center, #eee 0%, #999 100%);
  }
  .e404 .data-section,
  .aboutme .data-section,
  .home.layout-wrapper h1,
  .home.layout-wrapper h2 {
    color: #000;
  }
  .aboutme .hamburgercolr::before,
  .aboutme .hamburgercolr::after,
  .e404 .hamburgercolr::before,
  .e404 .hamburgercolr::after {
    background-color: #000;
  }
  .skill.layout-wrapper .layout-inner {
    color: #fff;
    background: #888;
    background: radial-gradient(ellipse at center, #888 0%, #666 100%);
  }
  .experience.layout-wrapper .layout-inner {
    background: #666;
    background: radial-gradient(ellipse at center, #666 0%, #444 100%);
  }
  .home .hamburgercolr::before,
  .home .hamburgercolr::after,
  .skill .hamburgercolr::before,
  .skill .hamburgercolr::after,
  .experience .hamburgercolr::before,
  .experience .hamburgercolr::after {
    background-color: #fff;
  }
  .home .btn-contact-color,
  .experience .btn-contact-color {
    color: #fff;
  }
  .aboutme .btn-contact-color,
  .e404 .btn-contact-color {
    color: #000;
  }
`

export default styles
