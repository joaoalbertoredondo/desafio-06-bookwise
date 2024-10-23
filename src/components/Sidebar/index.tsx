import {
  BackgroundImage,
  Marker,
  NavButton,
  NavLinks,
  SidebarContainer,
  SidebarContent,
} from "./styles"

import circles from "../../../public/assets/sidebar/circles.svg"
import logoImg from "../../../public/assets/sidebar/logo.svg"
import Image from "next/image"
import {
  Binoculars,
  ChartLineUp,
  SignIn,
  SignOut,
  User as UserIcon,
} from "@phosphor-icons/react"
import { usePathname } from "next/navigation"
import { signOut, useSession } from "next-auth/react"
import { Avatar } from "../Avatar"
import * as Dialog from "@radix-ui/react-dialog"
import { LoginModal } from "../LoginModal"

export default function Sidebar() {
  const path = usePathname()
  const session = useSession()

  const isSignedIng = session.status === "authenticated"

  const navigationData = [
    {
      url: "feed",
      icon: ChartLineUp,
      text: "Início",
    },
    {
      url: "explore",
      icon: Binoculars,
      text: "Explorar",
    },
  ]

  return (
    <SidebarContainer>
      <BackgroundImage>
        <Image src={circles} alt="" />
      </BackgroundImage>

      <SidebarContent>
        <div>
          <Image src={logoImg} alt="" />

          <NavLinks>
            {navigationData.map((item) => {
              const Icon = item.icon
              return (
                <NavButton
                  key={item.text}
                  href={item.url}
                  isActive={path.includes(`${item.url}`)}
                >
                  {path && path.includes(item.url) && <Marker />}
                  <Icon size={24} />
                  {item.text}
                </NavButton>
              )
            })}

            {isSignedIng && (
              <NavButton href={"/profile"} isActive={path.includes("/profile")}>
                {path && path.includes("/profile") && <Marker />}
                <UserIcon size={24} />
                Perfil
              </NavButton>
            )}
          </NavLinks>
        </div>

        <footer>
          <Dialog.Root>
            {isSignedIng ? (
              <button onClick={() => signOut()}>
                <Avatar image={session.data.user.avatarUrl} size={32} />
                Logout
                <SignOut size={24} color="#F75A68" />
              </button>
            ) : (
              <>
                <Dialog.Trigger asChild>
                  <button>
                    Fazer login
                    <SignIn size={24} color="#50B2C0" />
                  </button>
                </Dialog.Trigger>

                <LoginModal />
              </>
            )}
          </Dialog.Root>
        </footer>
      </SidebarContent>
    </SidebarContainer>
  )
}
