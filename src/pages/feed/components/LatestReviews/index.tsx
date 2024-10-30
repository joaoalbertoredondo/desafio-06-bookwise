import { LatestReviewsContent } from "./styles"
import Image from "next/image"
import { ptBR } from "date-fns/locale/pt-BR"
import { formatDistanceToNow } from "date-fns/formatDistanceToNow"
import { Avatar } from "../../../../components/Avatar"
import { Rating } from "../../../../components/Rating"
import { useRouter } from "next/router"

interface LatestReviewsProps {
  rating: any
}

export default function LatestReviews({ rating }: LatestReviewsProps) {
  const router = useRouter()

  const formattedDate = formatDistanceToNow(rating.createdAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleRedirectToProfile(username: string) {
    router.push(`/profile?username=${username}`)
  }

  return (
    <LatestReviewsContent>
      <header>
        <section>
          <button onClick={() => handleRedirectToProfile(rating.User.username)}>
            <Avatar size={40} image={rating.User.avatarUrl} />
          </button>

          <div>
            <h3>{rating.User.name}</h3>
            <p>{formattedDate}</p>
          </div>
        </section>

        <Rating rate={rating.rate} size={16} />
      </header>

      <section>
        <Image src={rating.Book.coverUrl} alt="" width={108} height={152} />

        <div>
          <div>
            <h4>{rating.Book.name}</h4>
            <p>{rating.Book.author}</p>
          </div>

          <span>{rating.description}</span>
        </div>
      </section>
    </LatestReviewsContent>
  )
}
