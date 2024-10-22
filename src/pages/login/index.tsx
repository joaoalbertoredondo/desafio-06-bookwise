import { ButtonsContainer, LoginContent, LoginContainer } from "./styles"
import { LoginButton } from "../../components/LoginButton"
import Image from "next/image"

import loginImg from "../../../public/assets/login-image.svg"
import googleImg from "../../../public/assets/google.svg"
import githubImg from "../../../public/assets/github.svg"
import planeImg from "../../../public/assets/plane.svg"

export default function Login() {
  return (
    <LoginContainer>
      <Image src={loginImg} alt="" />

      <LoginContent>
        <div>
          <h1>Boas vindas!</h1>
          <p>Faça seu login ou acesse como visitante.</p>
        </div>

        <ButtonsContainer>
          <LoginButton>
            <Image src={googleImg} alt="" />
            Entrar com Google
          </LoginButton>

          <LoginButton>
            <Image src={githubImg} alt="" />
            Entrar com GitHub
          </LoginButton>

          <LoginButton>
            <Image src={planeImg} alt="" />
            Acessar como visitante
          </LoginButton>
        </ButtonsContainer>
      </LoginContent>
    </LoginContainer>
  )
}
