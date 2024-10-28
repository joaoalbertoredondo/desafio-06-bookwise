import {
  BookmarkSimple,
  BookOpen,
  Books,
  UserList,
} from "@phosphor-icons/react"
import { Avatar } from "../../../../components/Avatar"
import { PersonalInfo, Separator, UserInfoContainer, UserStats } from "./styles"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../../contexts/UserContext"
import { useRouter } from "next/router"
import axios from "axios"

export function UserInfo() {
  const [userInfo, setUserInfo] = useState<any>({})
  const { user } = useContext(UserContext)
  const router = useRouter()

  useEffect(() => {
    const { username } = router.query
    if (username) {
      axios.get(`/api/user/get?username=${username}`).then((response) => {
        setUserInfo(response.data.user)
      })
    } else {
      setUserInfo(user)
    }
  }, [user])

  console.log("user:", userInfo)

  const handlePlural = userInfo?.ratings?.length === 1 ? "" : "s"

  const totalPages = userInfo?.ratings?.reduce(
    (total: any, user: any) => total + user.Book.totalPages,
    0
  )

  function getMostReadCategory() {
    const categoryCount: Record<string, number> = {}

    userInfo?.ratings?.forEach((user: any) => {
      const category = user.Book.category

      if (category) {
        categoryCount[category] = (categoryCount[category] || 0) + 1
      }
    })

    return Object.keys(categoryCount).reduce(
      (a, b) => (categoryCount[a] > categoryCount[b] ? a : b),
      ""
    )
  }

  const mostReadCategory = getMostReadCategory()

  const uniqueAuthors = new Set(
    userInfo?.ratings?.map((user: any) => user.Book.author)
  )
  const numberOfUniqueAuthors = uniqueAuthors.size

  return (
    <UserInfoContainer>
      <PersonalInfo>
        <Avatar image={userInfo?.avatarUrl} size={72} />

        <div>
          <h3>{userInfo?.name}</h3>
          <p>
            membro desde{" "}
            {userInfo?.createdAt && new Date(userInfo.createdAt).getFullYear()}
          </p>
        </div>
      </PersonalInfo>

      <Separator />

      <UserStats>
        <section>
          <BookOpen size={32} color="#50B2C0" />
          <div>
            <span>{totalPages}</span>
            <p>Páginas lidas</p>
          </div>
        </section>

        <section>
          <Books size={32} color="#50B2C0" />
          <div>
            <span>{userInfo?.ratings?.length}</span>
            <p>
              Livro{handlePlural} avaliado
              {handlePlural}
            </p>
          </div>
        </section>

        <section>
          <UserList size={32} color="#50B2C0" />
          <div>
            <span>{numberOfUniqueAuthors}</span>
            <p>Autores lidos</p>
          </div>
        </section>

        <section>
          <BookmarkSimple size={32} color="#50B2C0" />
          <div>
            <span>{mostReadCategory}</span>
            <p>Categoria mais lida</p>
          </div>
        </section>
      </UserStats>
    </UserInfoContainer>
  )
}
