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
import { useContext, useEffect } from "react"
import axios from "axios"
import { UserContext } from "../../contexts/UserContext"
import { useRouter } from "next/router"

export default function Sidebar() {
  const path = usePathname()
  const session = useSession()
  const router = useRouter()

  const isSignedIn = session.status === "authenticated"
  const { setUser, user } = useContext(UserContext)

  useEffect(() => {
    const { username } = router.query

    if (isSignedIn && !user) {
      axios
        .get(`/api/user/get-by-id?id=${session.data?.user.id}`)
        .then((response) => {
          setUser(response.data.user)
        })
    }

    if (!isSignedIn && username) {
      axios.get(`/api/user/get?username=${username}`).then((response) => {
        setUser(response.data.user)
      })
    }
  }, [isSignedIn, router.query])

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

            {isSignedIn && (
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
            {isSignedIn ? (
              <button
                onClick={() => {
                  setUser(null)
                  signOut()
                }}
              >
                <Avatar image={session.data.user.avatarUrl} size={32} />
                <p>{session.data.user.name}</p>
                <SignOut size={24} color="#F75A68" />
              </button>
            ) : (
              <>
                <Dialog.Trigger asChild>
                  <button>
                    <p>Fazer login</p>
                    <SignIn size={24} color="#50B2C0" />
                  </button>
                </Dialog.Trigger>

                <LoginModal showLeaveReview={false} />
              </>
            )}
          </Dialog.Root>
        </footer>
      </SidebarContent>
    </SidebarContainer>
  )
}
