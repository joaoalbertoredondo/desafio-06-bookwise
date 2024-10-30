import { styled } from "../../styles"

export const FeedContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  padding: "1.25rem",
})

export const FeedContent = styled("div", {
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

  ">div": {
    display: "flex",
    gap: "2.5rem",

    ">section": {
      display: "flex",
      flexDirection: "column",
      gap: "2.5rem",
    },
  },
})

export const LatestReviewsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
  width: "38rem",

  ">div": {
    ">p": {
      color: "$gray300",
      fontSize: "$sm",
      lineHeight: "$base",
    },
  },
})

export const PopularBooksContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
  width: "20.25rem",
  marginLeft: "1.5rem",

  ">button": {
    all: "unset",
    cursor: "pointer",
  },

  ">div": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    ">p": {
      color: "$gray300",
      fontSize: "$sm",
      lineHeight: "$base",
    },

    ">button": {
      all: "unset",
      cursor: "pointer",

      display: "flex",
      gap: "0.5rem",
      alignItems: "center",

      color: "$purple100",
      fontSize: "$sm",
      fontWeight: "bold",
      lineHeight: "$base",
      backgroundColor: "$gray800",
      borderRadius: 4,
      padding: "0.24rem 0.5rem",

      "&:hover": {
        backgroundColor: "$gray700",
      },
    },
  },
})

export const UserLastReadingContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  width: "38rem",

  ">div": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    ">p": {
      color: "$gray300",
      fontSize: "$sm",
      lineHeight: "$base",
    },

    ">button": {
      all: "unset",
      cursor: "pointer",

      display: "flex",
      gap: "0.5rem",
      alignItems: "center",

      color: "$purple100",
      fontSize: "$sm",
      fontWeight: "bold",
      lineHeight: "$base",
      backgroundColor: "$gray800",
      borderRadius: 4,
      padding: "0.24rem 0.5rem",

      "&:hover": {
        backgroundColor: "$gray700",
      },
    },
  },
})