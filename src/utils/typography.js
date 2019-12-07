import Typography from 'typography'

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.44,
  scaleRatio: 2.15,
  blockMarginBottom: 0.75,
  googleFonts: [
    {
      name: "Libre Baskerville",
      styles: ["400"],
    },
    {
      name: "Lato",
      styles: ["400", "400i", "700", "700i"],
    },
  ],
  headerFontFamily: ["Libre Baskerville", "serif"],
  bodyFontFamily: ["Lato", "sans-serif"],
  headerColor: "hsla(0,0%,0%,1)",
  bodyColor: "hsla(0,0%,0%,0.8)",
  headerWeight: 400,
  bodyWeight: 400,
  boldWeight: 700,
})

export default typography;