import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  googleFonts: [
    {
      name: "Open Sans",
      styles: ["400", "700"],
    },
    {
      name: "Quicksand",
      styles: ["400", "700"],
    },
  ],
  headerFontFamily: [
    "Quicksand",
    "Calibri",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
  ],
  bodyFontFamily: [
    "Open Sans",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
  ],
  overrideStyles: () => {},
})

export default typography
export const rhythm = typography.rhythm
