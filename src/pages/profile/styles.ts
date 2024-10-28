import { styled } from "../../styles"

export const ProfileContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  padding: "1.25rem",
})

export const ProfileContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginLeft: "6rem",

  ">header": {
    display: "flex",
    gap: "0.75rem",

    marginTop: 52,
    marginBottom: 40,

    h1: {
      fontSize: "$2xl",
    },
  },

  ">button": {
    all: "unset",

    display: "flex",
    alignItems: "center",
    gap: "0.25rem",

    cursor: "pointer",
    borderRadius: 4,
    width: "fit-content",
    padding: "0.25rem 0.5rem",
    color: "$gray200",
    fontWeight: "$bold",
    lineHeight: 0,
    fontSize: "$md",
    marginTop: "3.5rem",
    marginBottom: "2.74rem",

    "&:hover": {
      backgroundColor: "$gray700",
    },
  },

  ">div": {
    display: "flex",
    gap: "4rem",
  },
})

export const RatedBooksContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
})

export const RatedBooksContent = styled("div", {
  display: "flex",
  flexDirection: "column",
})
