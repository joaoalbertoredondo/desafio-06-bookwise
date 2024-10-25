import { User } from "@phosphor-icons/react"
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

export default function Profile() {
  return (
    <ProfileContainer>
      <Sidebar />

      <ProfileContent>
        <header>
          <User size={32} color="#50B2C0" />
          <h1>Perfil</h1>
        </header>

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
