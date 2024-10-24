import { globalCss } from "."

export const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
  },

  body: {
    backgroundColor: "#0E1116",
    color: "#F8F9FC",
    "-webkit-font-smoothing": "antialiased",

    "&::-webkit-scrollbar": {
      display: "none",
    },
  },

  "body, input, textarea, button": {
    fontFamily: "Nunito Sans",
  },
})
