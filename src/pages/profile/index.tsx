import { CaretLeft, User } from "@phosphor-icons/react"
import Sidebar from "../../components/Sidebar"
import {
  ProfileContainer,
  ProfileContent,
  RatedBooksContainer,
  RatedBooksContent,
} from "./styles"
import { SearchInput } from "../../components/SearchInput"
import { UserInfo } from "./components/UserInfo"
import { RatedBookCard } from "./components/RatedBookCard"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"

export default function Profile() {
  const session = useSession()
  const router = useRouter()

  return (
    <ProfileContainer>
      <Sidebar />

      <ProfileContent>
        {session.status === "authenticated" ? (
          <header>
            <User size={32} color="#50B2C0" />
            <h1>Perfil</h1>
          </header>
        ) : (
          <button onClick={() => router.push("/feed")}>
            <CaretLeft size={20} /> Voltar
          </button>
        )}

        <div>
          <RatedBooksContainer>
            <SearchInput size="lg" placeholder="Buscar livro avaliado" />

            <RatedBooksContent>
              <RatedBookCard />
            </RatedBooksContent>
          </RatedBooksContainer>

          <UserInfo />
        </div>
      </ProfileContent>
    </ProfileContainer>
  )
}
