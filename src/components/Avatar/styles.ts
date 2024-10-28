import { styled } from "../../styles"

export const AvatarContainer = styled("div", {
  display: "flex",

  backgroundImage: "$gradient-vertical",
  borderRadius: "$full",
  padding: 2,
  overflow: "hidden",

  height: "fit-content",
  width: "fit-content",

  img: {
    borderRadius: "$full",
  },
})
