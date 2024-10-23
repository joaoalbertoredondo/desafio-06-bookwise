import * as Dialog from "@radix-ui/react-dialog"
import { styled } from "../../styles"

export const Overlay = styled(Dialog.Overlay, {
  position: "fixed",
  width: "100vw",
  height: "100vh",
  inset: 0,
  background: "rgba(0, 0, 0, 0.75)",
})

export const Box = styled(Dialog.Content, {
  width: 516,
  padding: 16,
  backgroundColor: "$gray700",
  borderRadius: 12,

  display: "flex",
  flexDirection: "column",
  alignItems: "end",
  gap: 16,

  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
})

export const DialogClose = styled(Dialog.Close, {
  all: "unset",

  cursor: "pointer",
  color: "$gray400",

  "&:hover": {
    color: "$gray200",
  },
})

export const Content = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 40,
  padding: "16px 72px",

  ">span": {
    color: "$gray200",
    fontWeight: "bold",
    fontSize: "$md",
  },
})

export const ButtonsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 16,
  width: "100%",
  marginBottom: 40,

  ">button": {
    width: "100%",
  },
})
