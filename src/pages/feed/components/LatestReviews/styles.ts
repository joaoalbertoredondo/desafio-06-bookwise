import { styled } from "../../../../styles"

export const LatestReviewsContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",

  backgroundColor: "$gray700",
  borderRadius: 8,
  padding: "1.5rem",

  ">header": {
    display: "flex",
    justifyContent: "space-between",

    ">section": {
      display: "flex",
      gap: "1rem",

      ">button": {
        all: "unset",
        cursor: "pointer",
      },

      ">div": {
        ">h3": {
          lineHeight: "$base",
          fontSize: "$md",
          fontWeight: "$regular",
        },

        ">p": {
          lineHeight: "$base",
          fontSize: "$sm",
          color: "$gray400",
        },
      },
    },
  },

  ">section": {
    display: "flex",
    gap: "1.25rem",

    img: {
      borderRadius: 4,
    },

    ">div": {
      display: "flex",
      flexDirection: "column",
      gap: "1.25rem",

      ">span": {
        lineHeight: "$base",
        fontSize: "$sm",
        color: "$gray300",
      },

      ">div": {
        ">h4": {
          fontSize: "$md",
        },

        ">p": {
          lineHeight: "$base",
          fontSize: "$sm",
          color: "$gray400",
        },
      },
    },
  },
})
