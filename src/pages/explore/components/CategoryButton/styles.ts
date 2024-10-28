import { styled } from "../../../../styles"

export const CategoryButtonContainer = styled("button", {
  all: "unset",
  cursor: "pointer",

  borderRadius: "$full",
  padding: "0.25rem 1rem",
  border: "1px solid $purple100",
  color: "$purple100",
  lineHeight: "base",
  fontSize: "$md",

  "&:hover": {
    border: "1px solid $purple100",
    backgroundColor: "$purple200",
    color: "$gray100",
  },

  variants: {
    isSelected: {
      true: {
        backgroundColor: "$purple200",
        border: "1px solid $purple200",
        color: "$gray100",
      },
    },
  },
})
