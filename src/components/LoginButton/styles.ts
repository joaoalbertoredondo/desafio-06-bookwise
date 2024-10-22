import { styled } from "../../styles"

export const LoginButtonContainer = styled("button", {
  all: "unset",

  display: "flex",
  alignItems: "center",
  gap: "1.25rem",

  padding: "20px 24px",
  width: "324px",
  backgroundColor: "$gray600",
  color: "$gray200",
  borderRadius: 8,
  fontWeight: "$bold",
  fontSize: "$lg",

  cursor: "pointer",

  "&:hover": {
    backgroundColor: "$gray500",
  },

  "&:disabled": {
    backgroundColor: "$gray700",
    color: "$gray400",
    cursor: "not-allowed",
  },
})
