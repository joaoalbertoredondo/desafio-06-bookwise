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
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { Avatar } from "../Avatar"

export default function Sidebar() {
  const path = usePathname()
  const session = useSession()
  const router = useRouter()
  // const [user, setUser] = useState<User>()

  // const { username } = router.query

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

  // useEffect(() => {
  //   if (!username) {
  //     return
  //   }

  //   axios.get(`/api/user/get?username=${username}`).then((response) => {
  //     setUser(response.data.user)
  //   })
  // }, [])

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
          {isSignedIng ? (
            <button>
              <Avatar image={session.data.user.avatarUrl} size={32} />
              Logout
              <SignOut size={24} color="#F75A68" />
            </button>
          ) : (
            <button>
              Fazer login
              <SignIn size={24} color="#50B2C0" />
            </button>
          )}
        </footer>
      </SidebarContent>
    </SidebarContainer>
  )
}
