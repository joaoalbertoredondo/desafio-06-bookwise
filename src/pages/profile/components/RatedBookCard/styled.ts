import { styled } from "../../../../styles"

export const RatedBookCardContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  width: "39rem",

  ">p": {
    color: "$gray300",
    fontSize: "$sm",
    lineHeight: "$base",
    marginTop: "1.5rem",
  },
})

export const RatedBookCardContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",

  backgroundColor: "$gray700",
  borderRadius: 8,
  padding: "1.5rem",

  p: {
    fontSize: "$sm",
    lineHeight: "$base",
    color: "$gray300",
  },
})

export const BookInfo = styled("div", {
  display: "flex",
  gap: "1.5rem",

  img: {
    borderRadius: 4,
  },

  ">section": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    h1: {
      fontSize: "$lg",
    },

    p: {
      fontSize: "$sm",
      lineHeight: "$base",
      color: "$gray400",
    },
  },
})
