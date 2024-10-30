import { UserLastReadingContent } from "./styles"
import { Rating } from "../../../../components/Rating"
import Image from "next/image"
import { useEffect, useState } from "react"
import axios from "axios"
import { useSession } from "next-auth/react"
import { ptBR } from "date-fns/locale/pt-BR"
import { formatDistanceToNow } from "date-fns/formatDistanceToNow"

export default function UserLastReading() {
  const [lastRating, setLastRating] = useState<any>([])
  const { data: session } = useSession()

  useEffect(() => {
    if (!session?.user.id) return

    axios.get("/api/rating/get-all").then((response) => {
      const userRatings = response.data.ratings
        .filter((rating: any) => rating.User.id === session.user.id)
        .sort(
          (a: any, b: any) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
      setLastRating(userRatings[0] || null)
    })
  }, [session?.user.id])

  if (!lastRating) {
    return <p>Você ainda não fez nenhuma avaliação.</p>
  }

  console.log("lastRating:", lastRating)

  return (
    <UserLastReadingContent>
      <Image src={lastRating?.Book?.coverUrl} width={108} height={152} alt="" />

      <section>
        <main>
          <header>
            {/* {formatDistanceToNow(lastRating?.createdAt, {
            locale: ptBR,
            addSuffix: true,
          })} */}
            <p>{lastRating?.createdAt}</p>
            <Rating rate={lastRating?.Book?.finalRating} />
          </header>

          <div>
            <h3>{lastRating?.Book?.name}</h3>
            <span>{lastRating?.Book?.author}</span>
          </div>

          <p>{lastRating?.description}</p>
        </main>
      </section>
    </UserLastReadingContent>
  )
}
