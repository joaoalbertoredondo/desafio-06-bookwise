import * as Dialog from "@radix-ui/react-dialog"
import { DialogClose, Box, Overlay, ButtonsContainer, Content } from "./styles"
import { X } from "@phosphor-icons/react"
import Image from "next/image"

import google from "../../../public/assets/google.svg"
import gitHub from "../../../public/assets/github.svg"
import { signIn } from "next-auth/react"
import { LoginButton } from "../LoginButton"

interface LoginMOdalProps {
  showLeaveReview: boolean
}

export function LoginModal({ showLeaveReview }: LoginMOdalProps) {
  function handleSignIn(provider: "google") {
    signIn(provider, { callbackUrl: "/feed" })
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Box>
        <DialogClose>
          <X size={24} />
        </DialogClose>

        <Content>
          {showLeaveReview && <span>Faça login para deixar sua avaliação</span>}

          <ButtonsContainer>
            <LoginButton onClick={() => handleSignIn("google")}>
              <Image src={google} alt="" />
              Entrar com Google
            </LoginButton>

            <LoginButton>
              <Image src={gitHub} alt="" />
              Entrar com GitHub
            </LoginButton>
          </ButtonsContainer>
        </Content>
      </Box>
    </Dialog.Portal>
  )
}
