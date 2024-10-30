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
import { useState } from "react"

export default function Profile() {
  const [searchTerm, setSearchTerm] = useState<string>("")

  const session = useSession()
  const router = useRouter()

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value)
  }

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
            <SearchInput
              size="lg"
              placeholder="Buscar livro avaliado"
              onChange={handleSearchChange}
              value={searchTerm}
            />

            <RatedBooksContent>
              <RatedBookCard searchTerm={searchTerm} />
            </RatedBooksContent>
          </RatedBooksContainer>

          <UserInfo />
        </div>
      </ProfileContent>
    </ProfileContainer>
  )
}
