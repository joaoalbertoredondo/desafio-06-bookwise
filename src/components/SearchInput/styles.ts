import { styled } from "../../styles"

export const SearchInputContainer = styled("div", {
  display: "flex",
  alignItems: "center",

  border: "1px solid $gray500",
  borderRadius: 4,
  padding: "14px 20px",

  input: {
    all: "unset",
    lineHeight: "base",
    fontSize: "$sm",
    width: "100%",

    "&::placeholder": {
      color: "$gray400",
    },
  },

  button: {
    all: "unset",
    lineHeight: 0,
    color: "$gray500",
  },

  variants: {
    size: {
      lg: {
        width: "39rem",
      },
      md: {
        width: "27rem",
      },
    },
  },
})
