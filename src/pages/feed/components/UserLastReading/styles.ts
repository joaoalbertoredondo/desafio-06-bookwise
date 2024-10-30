import { styled } from "../../../../styles"

export const UserLastReadingContent = styled("div", {
  display: "flex",
  gap: "1.5rem",

  backgroundColor: "$gray600",
  borderRadius: 8,
  padding: "1.5rem",

  img: {
    borderRadius: 4,
  },

  ">section": {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    width: "100%",
    height: "100%",

    ">main": {
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem",

      ">header": {
        display: "flex",
        justifyContent: "space-between",

        ">p": {
          fontSize: "$sm",
          lineHeight: "$base",
          color: "$gray300",
        },
      },

      ">div": {
        ">h3": {
          fontSize: "$md",
        },

        ">span": {
          fontSize: "$sm",
          lineHeight: "$base",
          color: "$gray400",
        },
      },

      ">p": {
        fontSize: "$sm",
        lineHeight: "$base",
        color: "$gray300",
        marginTop: "0.5rem",
      },
    },
  },
})
