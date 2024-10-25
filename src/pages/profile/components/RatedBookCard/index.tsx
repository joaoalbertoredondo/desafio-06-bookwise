import Image from "next/image"
import {
  BookInfo,
  RatedBookCardContainer,
  RatedBookCardContent,
} from "./styled"

import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../../contexts/UserContext"
import axios from "axios"
import { useRouter } from "next/router"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale/pt-BR"

export function RatedBookCard() {
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

  return (
    <RatedBookCardContainer>
      {userInfo?.ratings?.map((book: any) => (
        <>
          <p>
            {formatDistanceToNow(book.createdAt, {
              locale: ptBR,
              addSuffix: true,
            })
              .charAt(0)
              .toUpperCase() +
              formatDistanceToNow(book.createdAt, {
                locale: ptBR,
                addSuffix: true,
              }).slice(1)}
          </p>

          <RatedBookCardContent>
            <BookInfo>
              <Image src={book.Book.coverUrl} alt="" height={134} width={98} />

              <section>
                <div>
                  <h1>{book.Book.name}</h1>
                  <p>{book.Book.author}</p>
                </div>

                <span>{book.rate}</span>
              </section>
            </BookInfo>

            <p>{book.description}</p>
          </RatedBookCardContent>
        </>
      ))}
    </RatedBookCardContainer>
  )
}
