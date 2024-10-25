import { styled } from "../../../../styles"

export const UserInfoContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2rem",

  borderLeft: "1px solid $gray700",
  width: "19.25rem",
  height: "fit-content",
})

export const PersonalInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1.25rem",

  ">div": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    h3: {
      fontSize: "$xl",
    },

    p: {
      lineHeight: "$base",
      color: "$gray400",
      fontSize: "$sm",
    },
  },
})

export const Separator = styled("div", {
  height: "0.25rem",
  width: "2rem",
  backgroundImage: "$gradient-horizontal",
  borderRadius: "$full",
})

export const UserStats = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "2.5rem",
  marginTop: "1.5rem",

  ">section": {
    display: "flex",
    alignItems: "center",
    gap: "1.25rem",

    span: {
      fontWeight: "bold",
      fontSize: "$md",
      color: "$gray200",
    },

    p: {
      lineHeight: "$base",
      fontSize: "$sm",
      color: "$gray300",
    },
  },
})
