import * as Dialog from "@radix-ui/react-dialog"
import { styled } from "../../styles"

export const Overlay = styled(Dialog.Overlay, {
  position: "fixed",
  width: "100vw",
  height: "100vh",
  inset: 0,
  background: "rgba(0, 0, 0, 0.6)",
})

export const Box = styled(Dialog.Content, {
  width: "41.25rem",
  height: "100vh",
  padding: "1.5rem 3rem",
  backgroundColor: "$gray800",

  display: "flex",
  flexDirection: "column",
  alignItems: "end",
  gap: 16,

  position: "fixed",
  top: 0,
  right: 0,

  overflowY: "scroll",

  "&::-webkit-scrollbar": {
    backgroundColor: "$gray700",
    borderRadius: "$full",
    width: 6,
  },

  "&::-webkit-scrollbar-thumb": {
    borderRadius: "$full",
    backgroundColor: "$gray600",
  },
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
  borderRadius: 10,
  padding: "1.5rem 2rem",
  backgroundColor: "$gray700",
})

export const BookInfoContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "2.4rem",
})

export const BookInfoHeader = styled("div", {
  display: "flex",
  gap: "2rem",

  ">img": {
    borderRadius: 10,
  },

  ">div": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    ">header": {
      display: "flex",
      flexDirection: "column",

      ">h3": {
        fontSize: "$lg",
      },

      ">span": {
        fontSize: "$md",
        lineHeight: "$base",
        color: "$gray300",
      },
    },

    ">section": {
      ">p": {
        marginTop: "0.25rem",
        fontSize: "$sm",
        lineHeight: "$base",
        color: "$gray400",
      },
    },
  },
})

export const BookInfoBody = styled("div", {
  display: "flex",
  gap: "3.5rem",
  borderTop: "1px solid $gray600",

  padding: "1.5rem 0",

  ">div": {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    padding: "0 0.25rem",
    width: "100%",

    ">section": {
      ">p": {
        fontSize: "$sm",
        lineHeight: "$base",
        color: "$gray300",

        ">h3": {
          fontSize: "$md",
          color: "$gray200",
        },
      },
    },
  },
})

export const ReviewsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",

  width: "100%",
  marginTop: "1.5rem",

  ">div": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    ">p": {
      fontSize: "$sm",
      lineHeight: "$base",
      color: "$gray200",
    },

    ">button": {
      all: "unset",
      cursor: "pointer",

      color: "$purple100",
      fontWeight: "bold",
      lineHeight: "$base",
      backgroundColor: "$gray800",
      borderRadius: 4,
      padding: "0.24rem 0.5rem",

      "&:hover": {
        backgroundColor: "$gray700",
      },
    },
  },
})

export const Reviews = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",

  form: {
    width: "100%",
  },
})

export const ReviewCard = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1.25rem",

  backgroundColor: "$gray700",
  borderRadius: 8,
  padding: "1.5rem",
  width: "100%",

  ">header": {
    display: "flex",
    gap: "1rem",

    ">button": {
      all: "unset",
      cursor: "pointer",
    },

    ">section": {
      flex: 1,

      ">h4": {
        fontSize: "$md",
      },

      ">p": {
        fontSize: "$sm",
        lineHeight: "$base",
        color: "$gray400",
      },
    },

    ">div": {
      display: "flex",
      flexDirection: "column",
      alignItems: "end",
      gap: "1rem",

      ">button": {
        all: "unset",
        cursor: "pointer",
        lineHeight: 0,
        color: "#F75A68",

        "&:hover": {
          color: "#ff717d",
        },
      },
    },
  },

  ">span": {
    fontSize: "$sm",
    lineHeight: "$base",
    color: "$gray300",
    textAlign: "justify",
  },
})

export const LeaveReview = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1.25rem",

  backgroundColor: "$gray700",
  borderRadius: 8,
  padding: "1.5rem",
  width: "100%",

  ">header": {
    display: "flex",
    gap: "1rem",

    ">section": {
      display: "flex",
      alignItems: "center",
      gap: "1rem",

      flex: 1,

      ">h4": {
        fontSize: "$md",
      },
    },
  },

  ">textarea": {
    all: "unset",

    backgroundColor: "$gray800",
    padding: "1rem 1.25rem",
    borderRadius: 4,
    border: "1px solid $gray500",
    height: "10.25rem",

    "&::placeholder": {
      fontSize: "$sm",
      lineHeight: "$base",
      color: "$gray400",
    },
  },
})

export const ButtonsContainer = styled("div", {
  display: "flex",
  justifyContent: "end",
  gap: "0.5rem",

  button: {
    all: "unset",
    cursor: "pointer",

    backgroundColor: "$gray600",
    borderRadius: 4,
    padding: "0.5rem",
    lineHeight: 0,

    "&:hover": {
      backgroundColor: "$gray500",
    },
  },
})
