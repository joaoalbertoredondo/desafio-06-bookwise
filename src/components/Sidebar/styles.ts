import Link from "next/link"
import { styled } from "../../styles"

export const SidebarContainer = styled("div", {
  height: "calc(100vh - 40px)",
  width: "14.5rem",
  position: "relative",

  paddingTop: 40,
  paddingBottom: "1.5rem",
  borderRadius: 12,
  overflow: "hidden",
})

export const BackgroundImage = styled("div", {
  img: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
  },
})

export const SidebarContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",

  height: "100%",

  ">div": {
    display: "flex",
    flexDirection: "column",
    gap: "4rem",
  },

  footer: {
    ">button": {
      all: "unset",

      display: "flex",
      alignItems: "center",
      gap: "0.75rem",

      lineHeight: "$base",
      fontSize: "$sm",
      color: "$gray200",
    },
  },
})

export const NavLinks = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
})

export const Marker = styled("div", {
  width: "0.25rem",
  height: "1.5rem",

  backgroundImage: "$gradient-vertical",
  borderRadius: "$full",
  marginLeft: -20,
})

export const NavButton = styled(Link, {
  all: "unset",

  cursor: "pointer",
  display: "flex",
  alignItems: "flex-start",
  gap: "0.75rem",

  padding: "0.25rem 0.5rem",
  height: "2.625rem",
  width: "100%",
  color: "$gray400",
  fontWeight: "bold",
  lineHeight: "base",
  fontSize: "$md",

  svg: {
    color: "$gray400",
  },

  "&:hover": {
    color: "$gray100",
  },

  variants: {
    isActive: {
      true: {
        color: "$gray100",
      },
    },
  },
})
