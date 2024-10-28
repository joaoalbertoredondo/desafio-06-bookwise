import { BookCardContent, BookTag } from "./styles"
import Image from "next/image"
import { Rating } from "../Rating"
import { Book } from "next-auth"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import * as Dialog from "@radix-ui/react-dialog"

interface BookCardProps {
  book: Book
  setSelectedBook: (book: Book) => void
}

export function BookCard({ book, setSelectedBook }: BookCardProps) {
  const { user } = useContext(UserContext)

  const isBookAlreadyRead = book.ratings.some(
    (rating: any) => rating.User.id === user?.id
  )
  return (
    <Dialog.Trigger asChild>
      <button onClick={() => setSelectedBook(book)}>
        <BookCardContent>
          {isBookAlreadyRead && <BookTag>LIDO</BookTag>}

          <Image src={book.coverUrl} width={108} height={152} alt="" />

          <section>
            <div>
              <p>{book.name}</p>
              <span>{book.author}</span>
            </div>

            <Rating rate={book.finalRating} />
          </section>
        </BookCardContent>
      </button>
    </Dialog.Trigger>
  )
}
