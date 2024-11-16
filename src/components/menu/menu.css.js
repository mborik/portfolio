import { css } from "@emotion/react"
import mediaQueryGenerator from "../../utils/mediaQGen"

const [media55em] = mediaQueryGenerator([{ type: "max", size: "55" }])

const styles = {
  portfolio: css`
    &::after {
      content: "";
      width: 100vw;
      height: 100vh;
      position: fixed;
      pointer-events: none;
      top: 0;
      left: 0;
      transform: translateZ(1000px);
    }
    .hamburger {
      width: 64px;
      height: 64px;
      display: block;
      position: relative;
      cursor: pointer;
      position: absolute;
      top: 0.5em;
      left: 1.25em;
      z-index: 110;
      pointer-events: auto;
      background: none;
      border: none;
      outline: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      &::after {
        width: 64px;
        height: 64px;
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
      }
      ${media55em} {
        position: fixed;
      }
    }
    .global-menu-item {
      font-size: 3vmax;
      opacity: 0;
      transform: translateY(-100%);
      pointer-events: none;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 0.25em 0;
      transition: transform 0.3s, opacity 0.3s;
      transition-timing-function: ease-in;
      outline: none;
      flex: 1 0 100%;
      white-space: nowrap;
      > svg {
        flex: 0 0 3rem;
        margin: 0 1rem !important;
      }
      &:nth-of-type(1) {
        transition-delay: 0s;
      }
      &:nth-of-type(2) {
        transition-delay: 0.05s;
      }
      &:nth-of-type(3) {
        transition-delay: 0.1s;
      }
      &:nth-of-type(4) {
        transition-delay: 0.15s;
      }
      &:nth-of-type(5) {
        transition-delay: 0.2s;
      }
      &:nth-of-type(6) {
        transition-delay: 0.25s;
      }
      &:nth-of-type(7) {
        transition-delay: 0.3s;
      }
      &:nth-of-type(8) {
        transition-delay: 0.35s;
      }
      &:nth-of-type(9) {
        transition-delay: 0.4s;
      }
      &:nth-of-type(10) {
        transition-delay: 0.45s;
      }
      &.is-opened {
        opacity: 1;
        transform: translateY(0) rotate(0);
        pointer-events: auto;
        transition-timing-function: ease;
      }
      &.is-opened:nth-of-type(1) {
        transition-delay: 0.85s;
      }
      &.is-opened:nth-of-type(2) {
        transition-delay: 0.8s;
      }
      &.is-opened:nth-of-type(3) {
        transition-delay: 0.75s;
      }
      &.is-opened:nth-of-type(4) {
        transition-delay: 0.6s;
      }
      &.is-opened:nth-of-type(5) {
        transition-delay: 0.9s;
      }
      &.is-opened:nth-of-type(6) {
        transition-delay: 0.95s;
      }
      &.is-opened:nth-of-type(7) {
        transition-delay: 1s;
      }
      &.is-opened:nth-of-type(8) {
        transition-delay: 1.05s;
      }
      &.is-opened:nth-of-type(9) {
        transition-delay: 1.1s;
      }
      &.is-opened:nth-of-type(10) {
        transition-delay: 1.15s;
      }
    }
    .hamburger-line {
      width: 28px;
      height: 2px;
      overflow: hidden;
      position: absolute;
      z-index: 10;
    }
    .hamburger-line-in {
      width: 84px;
      height: 2px;
      position: absolute;
      top: 0;
      left: 0;
      transition-duration: 0.6s;
      transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
      &::before {
        left: -56px;
      }
      &::after {
        left: 0;
      }
      &::before,
      &::after {
        width: 28px;
        height: 2px;
        content: "";
        display: block;
        position: absolute;
        top: 0;
        transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
        transition-property: transform;
      }
    }
    .hamburger-line-1 {
      top: 24.6px;
    }
    .hamburger-line-1,
    .hamburger-line-2,
    .hamburger-line-3,
    .hamburger-line-cross-1,
    .hamburger-line-cross-2 {
      left: 18px;
    }
    .hamburger-line-2,
    .hamburger-line-cross-1,
    .hamburger-line-cross-2 {
      top: 31px;
    }
    .hamburger-line-3 {
      top: 37.4px;
    }
    .hamburger-line-cross-1 {
      transform: rotate(45deg);
    }
    .hamburger-line-cross-2 {
      transform: rotate(-45deg);
    }
    .hamburger-line {
      transition-duration: 0.6s;
      transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
    }
    .hamburger-line-in-cross-1,
    .hamburger-line-in-cross-2 {
      transform: translateX(-33.3%);
    }
    .hamburger-line-in-1 {
      transition-delay: 0.2s;
    }
    .hamburger-line-in-2 {
      transition-delay: 0.25s;
      &::before,
      &::after {
        transition-delay: 0.05s;
      }
    }
    .hamburger-line-in-3 {
      transition-delay: 0.3s;
      &::before,
      &::after {
        transition-delay: 0.1s;
      }
    }
    .hamburger-line-in-cross-1 {
      transition-delay: 0s;
    }
    .hamburger-line-in-cross-2 {
      transition-delay: 0.05s;
      &::before,
      &::after {
        transition-delay: 0.1s;
      }
    }
    .hamburger.is-opened-navi .hamburger-line-in::before,
    .hamburger.is-opened-navi .hamburger-line-in::after {
      background-color: #000;
    }
    .hamburger.is-opened-navi .hamburger-line-in-1,
    .hamburger.is-opened-navi .hamburger-line-in-2,
    .hamburger.is-opened-navi .hamburger-line-in-3 {
      transform: translateX(33.3%);
    }
    .hamburger.is-opened-navi .hamburger-line-in-cross-1,
    .hamburger.is-opened-navi .hamburger-line-in-cross-2 {
      transform: translateX(0);
    }
    .hamburger.is-opened-navi .hamburger-line-in-1 {
      transition-delay: 0s;
    }
    .hamburger.is-opened-navi .hamburger-line-in-2 {
      transition-delay: 0.05s;
    }
    .hamburger.is-opened-navi .hamburger-line-in-3 {
      transition-delay: 0.1s;
    }
    .hamburger.is-opened-navi .hamburger-line-in-cross-1 {
      transition-delay: 0.25s;
    }
    .hamburger.is-opened-navi .hamburger-line-in-cross-2 {
      transition-delay: 0.3s;
    }
    .hamburger:hover .hamburger-line-in::before,
    .hamburger:hover .hamburger-line-in::after {
      transform: translateX(200%);
    }
    .hamburger:hover .hamburger-line-in-1::before,
    .hamburger:hover .hamburger-line-in-1::after,
    .hamburger:hover .hamburger-line-in-2::before,
    .hamburger:hover .hamburger-line-in-2::after,
    .hamburger:hover .hamburger-line-in-3::before,
    .hamburger:hover .hamburger-line-in-3::after {
      transition-duration: 1s;
    }
    .hamburger:hover .hamburger-line-in-cross-1::before,
    .hamburger:hover .hamburger-line-in-cross-1::after,
    .hamburger:hover .hamburger-line-in-cross-2::before,
    .hamburger:hover .hamburger-line-in-cross-2::after {
      transition-duration: 0s;
    }
    .hamburger.is-opened-navi:hover .hamburger-line-in-cross-1::before,
    .hamburger.is-opened-navi:hover .hamburger-line-in-cross-1::after,
    .hamburger.is-opened-navi:hover .hamburger-line-in-cross-2::before,
    .hamburger.is-opened-navi:hover .hamburger-line-in-cross-2::after {
      transition-duration: 1s;
    }
    .hamburger.is-opened-navi:hover .hamburger-line-in-1::before,
    .hamburger.is-opened-navi:hover .hamburger-line-in-1::after,
    .hamburger.is-opened-navi:hover .hamburger-line-in-2::before,
    .hamburger.is-opened-navi:hover .hamburger-line-in-2::after,
    .hamburger.is-opened-navi:hover .hamburger-line-in-3::before,
    .hamburger.is-opened-navi:hover .hamburger-line-in-3::after {
      transition-duration: 0s;
    }
  `,
  fixedPosition: css`
    position: fixed;
    top: 0;
    left: 0;
  `,
  globalMenu: css`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 100;
  `,
  introMenuItems: css`
    margin: 0;
    padding: 0;
    position: fixed;
    top: 2em;
    left: 2em;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    &::after {
      width: 90vw;
      height: 200%;
      content: "";
      display: block;
      position: absolute;
      left: -30vw;
      top: -50%;
      opacity: 0;
      transition-timing-function: ease-in;
      transition: opacity 0.3s;
      background: #999;
      background: radial-gradient(ellipse at center, #999f 0%, #9990 60%);
      z-index: -1;
    }
    &:hover {
      &::after {
        opacity: 1;
      }
    }

    button.simple-menu-item {
      width: 3em;
      height: 3em;
      display: block;
      cursor: pointer;
      position: relative;
      pointer-events: auto;
      background: none;
      border: none;
      outline: none;
      color: #222;
      transition: color 0.3s;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

      .icon {
        display: block;
        width: 3em;
        height: 3em;
        background: #999;
        border-radius: 50%;
      }
      .title {
        display: flex;
        align-items: center;
        position: absolute;
        left: 2.5em;
        top: 0;
        font-size: 2em;
        width: auto;
        height: 100%;
        white-space: nowrap;
        text-align: left;
        color: #fff;
        opacity: 0;
        transform: translateX(100%);
        pointer-events: none;
        transition: transform 0.5s, opacity 0.3s;
        transition-delay: 0.1s;
        transition-timing-function: ease-in;
        text-shadow: 0 0 8px #222;

        ${media55em} {
          font-size: 1.6em;
        }
      }

      &:hover {
        color: #fff;

        .icon {
          background: #222;
          filter: drop-shadow(0 0 8px #222);
        }
        .title {
          opacity: 1;
          transform: translateX(0);
          pointer-events: auto;
          transition: transform 0.3s, opacity 0.3s;
        }
      }
    }
  `,
  shape: css`
    width: 100vw;
    height: 100%;
    pointer-events: none;
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    &.is-opened {
      pointer-events: auto;
      z-index: 3;
    }
  `,
}

export default styles
