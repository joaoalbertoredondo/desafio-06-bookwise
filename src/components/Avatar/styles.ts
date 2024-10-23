import { styled } from "../../styles"

export const AvatarContainer = styled("div", {
  display: "flex",

  backgroundImage: "$gradient-vertical",
  borderRadius: "$full",
  padding: 2,
  overflow: "hidden",

  img: {
    borderRadius: "$full",
  },
})
