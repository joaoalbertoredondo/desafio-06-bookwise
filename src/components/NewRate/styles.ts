import { styled } from "../../styles"

export const NewRateContainer = styled("div", {
  display: "flex",
  gap: "0.25rem",

  ">button": {
    all: "unset",

    cursor: "pointer",
    color: "$purple100",
  },
})
