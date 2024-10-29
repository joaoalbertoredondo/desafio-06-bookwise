import Image from "next/image"
import {
  BookInfo,
  RatedBookCardContainer,
  RatedBookCardContent,
} from "./styled"

import { useCallback, useContext, useEffect, useState } from "react"
import { UserContext } from "../../../../contexts/UserContext"
import axios from "axios"
import { useRouter } from "next/router"
import { ptBR } from "date-fns/locale/pt-BR"
import { formatDistanceToNow } from "date-fns/formatDistanceToNow"
import { Rating } from "../../../../components/Rating"
import { useSession } from "next-auth/react"

export function RatedBookCard() {
  const [userInfo, setUserInfo] = useState<any>({})
  const { user } = useContext(UserContext)
  const router = useRouter()
  const session = useSession()

  const fetchUserInfo = useCallback(async () => {
    try {
      const response = await axios.get(
        `/api/user/get-by-id?id=${session.data?.user.id}`
      )
      setUserInfo(response.data.user)
    } catch (error) {
      console.error("Failed to fetch user info:", error)
    }
  }, [session.data?.user.id])

  useEffect(() => {
    if (session.data?.user.id) {
      fetchUserInfo()
    }
  }, [session.data?.user.id, fetchUserInfo])

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

  return (
    <RatedBookCardContainer>
      {userInfo?.ratings
        ?.sort(
          (a: any, b: any) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        .map((rating: any) => {
          const formattedDate =
            formatDistanceToNow(rating?.createdAt, {
              locale: ptBR,
              addSuffix: true,
            })
              .charAt(0)
              .toUpperCase() +
            formatDistanceToNow(rating?.createdAt, {
              locale: ptBR,
              addSuffix: true,
            }).slice(1)

          return (
            <>
              <p>{formattedDate ? formattedDate : ""}</p>

              <RatedBookCardContent>
                <BookInfo>
                  <Image
                    src={rating.Book.coverUrl}
                    alt=""
                    height={134}
                    width={98}
                  />

                  <section>
                    <div>
                      <h1>{rating.Book.name}</h1>
                      <p>{rating.Book.author}</p>
                    </div>

                    <span>
                      <Rating rate={rating.rate} />
                    </span>
                  </section>
                </BookInfo>

                <p>{rating.description}</p>
              </RatedBookCardContent>
            </>
          )
        })}
    </RatedBookCardContainer>
  )
}
