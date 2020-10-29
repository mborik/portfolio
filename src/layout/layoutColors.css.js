import { css } from "@emotion/core"

const styles = css`
  .home.layout-wrapper .layout-inner {
    background: #eee;
    background: radial-gradient(ellipse at center, #eee 0%, #666 100%);
  }
  .white.layout-wrapper .layout-inner,
  .aboutme.layout-wrapper .layout-inner {
    background: #eee;
    background: radial-gradient(ellipse at center, #eee 0%, #999 100%);
  }
  .white .data-section,
  .aboutme .data-section,
  .home.layout-wrapper h1,
  .home.layout-wrapper h2 {
    color: #000;
  }
  .aboutme .hamburgercolr::before,
  .aboutme .hamburgercolr::after,
  .white .hamburgercolr::before,
  .white .hamburgercolr::after {
    background-color: #000;
  }
  .projects.layout-wrapper .layout-inner {
    color: #fff;
    background: #888;
    background: radial-gradient(ellipse at center, #888 0%, #666 100%);
  }
  .experience.layout-wrapper .layout-inner {
    background: #777;
    background: radial-gradient(ellipse at center, #777 0%, #333 100%);
  }
  .home .hamburgercolr::before,
  .home .hamburgercolr::after,
  .projects .hamburgercolr::before,
  .projects .hamburgercolr::after,
  .experience .hamburgercolr::before,
  .experience .hamburgercolr::after {
    background-color: #fff;
  }
  .home .btn-contact-color,
  .projects .btn-contact-color,
  .experience .btn-contact-color {
    color: #fff;
  }
  .aboutme .btn-contact-color {
    color: #000;
  }
`

export default styles
