import { styled } from "../../styles"

export const BookCardContent = styled("div", {
  cursor: "pointer",

  display: "flex",
  gap: "1.25rem",

  position: "relative",

  backgroundColor: "$gray700",
  borderRadius: 8,
  padding: "1.5rem",

  img: {
    borderRadius: 4,
  },

  ">section": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    ">div": {
      ">p": {
        fontWeight: "bold",
        fontSize: "$md",
      },

      ">span": {
        fontSize: "$sm",
        color: "$gray400",
        lineHeight: "$base",
      },
    },
  },
})

export const BookTag = styled("div", {
  position: "absolute",
  top: 0,
  right: 0,

  padding: "0.25rem 0.75rem",
  backgroundColor: "$green300",
  color: "$green100",
  fontSize: "0.75rem",
  fontWeight: "bold",

  borderRadius: "0px 8px 0px 4px",
})
