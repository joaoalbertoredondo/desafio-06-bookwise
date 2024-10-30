import { CaretRight, ChartLineUp } from "@phosphor-icons/react"
import Sidebar from "../../components/Sidebar"
import {
  FeedContainer,
  FeedContent,
  LatestReviewsContainer,
  PopularBooksContainer,
  UserLastReadingContainer,
} from "./styles"
import LatestReviews from "./components/LatestReviews"
import UserLastReading from "./components/UserLastReading"
import { useEffect, useState } from "react"
import axios from "axios"
import { useRouter } from "next/router"
import { BookCard } from "../../components/BookCard"
import * as Dialog from "@radix-ui/react-dialog"
import { BookModal } from "../../components/BookModal"

export default function Feed() {
  const [ratings, setRatings] = useState<any>([])
  const [books, setBooks] = useState<any>([])
  const [selectedBook, setSelectedBook] = useState<any>({})
  const [refetch, setRefetch] = useState(true)

  const router = useRouter()

  function handleViewAllUserReviews() {
    router.push("/profile")
  }

  function handleViewAllBooks() {
    router.push("/explore")
  }

  useEffect(() => {
    axios.get("/api/rating/get-all").then((response) => {
      setRatings(response.data.ratings)

      console.log("ratings:", response.data.ratings)
    })
  }, [])

  useEffect(() => {
    axios.get("/api/book/get-all").then((response) => {
      setBooks(response.data.books)
      if (Object.keys(selectedBook).length > 0) {
        setSelectedBook(
          response.data.books.find((book: any) => book.id === selectedBook.id)
        )
      }

      console.log("books:", response.data.books)
    })
  }, [refetch])

  return (
    <FeedContainer>
      <Sidebar />

      <FeedContent>
        <header>
          <ChartLineUp size={32} color="#50B2C0" />
          <h1>Início</h1>
        </header>

        <div>
          <section>
            <UserLastReadingContainer>
              <div>
                <p>Sua última leitura</p>
                <button onClick={handleViewAllUserReviews}>
                  Ver todas
                  <CaretRight weight="bold" />
                </button>
              </div>

              <UserLastReading />
            </UserLastReadingContainer>

            <LatestReviewsContainer>
              <div>
                <p>Avaliações mais recentes</p>
              </div>

              {ratings
                .sort(
                  (a: any, b: any) =>
                    new Date(b.createdAt).getTime() -
                    new Date(a.createdAt).getTime()
                )
                .map((rating: any) => {
                  return <LatestReviews key={rating.id} rating={rating} />
                })}
            </LatestReviewsContainer>
          </section>

          <PopularBooksContainer>
            <div>
              <p>Livros populares</p>
              <button onClick={handleViewAllBooks}>
                Ver todos
                <CaretRight weight="bold" />
              </button>
            </div>

            {books
              .filter((book: any) => book.numberOfRatings > 0)
              .sort((a: any, b: any) => b.numberOfRatings - a.numberOfRatings)
              .map((book: any) => (
                <Dialog.Root>
                  <BookCard
                    key={book.id}
                    book={book}
                    setSelectedBook={setSelectedBook}
                  />

                  <BookModal
                    book={selectedBook}
                    setRefetch={setRefetch}
                    refetch={refetch}
                  />
                </Dialog.Root>
              ))}
          </PopularBooksContainer>
        </div>
      </FeedContent>
    </FeedContainer>
  )
}
