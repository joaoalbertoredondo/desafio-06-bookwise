import { styled } from "../../styles"

export const LoginContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  padding: "1.25rem",

  ">img": {
    height: "54rem",
  },
})

export const LoginContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "2.5rem",
  marginLeft: "14.125rem",

  width: "372px",

  h1: {
    fontSize: "$2xl",
    lineHeight: "$short",
  },

  p: {
    fontsize: "$md",
    lineHeight: "base",
    color: "$gray200",
  },
})

export const ButtonsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
})
