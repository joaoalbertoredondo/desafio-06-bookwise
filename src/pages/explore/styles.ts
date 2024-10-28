import { styled } from "../../styles"

export const ExploreContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  padding: "1.25rem",
})

export const ExploreContent = styled("div", {
  marginLeft: "6rem",
  width: "62.25rem",

  ">header": {
    display: "flex",
    alignItems: "top",
    justifyContent: "space-between",

    marginTop: 52,
    marginBottom: 40,

    ">div": {
      display: "flex",
      alignItems: "start",
      gap: "0.75rem",

      h1: {
        fontSize: "$2xl",
      },
    },
  },
})

export const CategoriesContainer = styled("div", {
  display: "flex",
  gap: "0.75rem",
  marginBottom: "3rem",
})

export const BookCardContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "1.25rem",

  ">button": {
    all: "unset",
  },
})
