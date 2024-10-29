import {
  BookmarkSimple,
  BookOpen,
  Check,
  Trash,
  X,
} from "@phosphor-icons/react"
import {
  BookInfoBody,
  BookInfoContainer,
  BookInfoHeader,
  Box,
  ButtonsContainer,
  Content,
  DialogClose,
  LeaveReview,
  Overlay,
  ReviewCard,
  Reviews,
  ReviewsContainer,
} from "./styles"
import * as Dialog from "@radix-ui/react-dialog"
import { Book } from "next-auth"
import Image from "next/image"
import { Rating } from "../Rating"
import { Avatar } from "../Avatar"
import { ptBR } from "date-fns/locale/pt-BR"
import { formatDistanceToNow } from "date-fns/formatDistanceToNow"
import { LoginModal } from "../LoginModal"
import { useSession } from "next-auth/react"
import React, { useEffect, useState } from "react"
import { NewRate } from "../NewRate"
import axios from "axios"

interface BookModalProps {
  book: Book
  setRefetch: (value: boolean) => void
  refetch: boolean
}

export function BookModal({ book, refetch, setRefetch }: BookModalProps) {
  const [showLeaveReview, setShowLeaveReview] = useState(false)
  const [newReview, setNewReview] = useState("")
  const [newRate, setNewRate] = useState(0)
  const session = useSession()

  const isSignedIn = session.status === "authenticated"

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewReview(event.target.value)
  }

  function handleLeaveReview() {
    setShowLeaveReview(true)
  }

  function handleCloseLeaveReview() {
    setShowLeaveReview(false)
  }

  function handleRateChange(rate: number) {
    setNewRate(rate)
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const submittedReview = {
      rate: newRate,
      description: newReview,
      userId: session.data?.user?.id,
      bookId: book.id,
    }

    try {
      await axios.post(
        "http://localhost:3000/api/rating/create",
        submittedReview
      )
      setNewReview("")
      setNewRate(0)
      setShowLeaveReview(false)
      setRefetch(!refetch)
    } catch (error) {
      console.error("Error submitting review:", error)
    }
  }

  async function handleDeleteReview(reviewId: string) {
    try {
      await axios.delete(
        `http://localhost:3000/api/rating/delete?id=${reviewId}`
      )
      setRefetch(!refetch)
    } catch (error) {
      console.error("Error deleting review:", error)
    }
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Box>
        <DialogClose>
          <X size={24} />
        </DialogClose>

        <Content>
          <BookInfoContainer>
            <BookInfoHeader>
              <Image src={book.coverUrl} alt="" height={242} width={172} />

              <div>
                <header>
                  <h3>{book.name}</h3>
                  <span>{book.author}</span>
                </header>

                <section>
                  <Rating rate={book.finalRating} size={20} />
                  {book.numberOfRatings > 0 && (
                    <p>{book.numberOfRatings} avaliações</p>
                  )}
                </section>
              </div>
            </BookInfoHeader>

            <BookInfoBody>
              <div>
                <BookmarkSimple size={24} color="#50B2C0" />
                <section>
                  <p>Categoria</p>
                  <h4>{book.category}</h4>
                </section>
              </div>

              <div>
                <BookOpen size={24} color="#50B2C0" />
                <section>
                  <p>Páginas</p>
                  <h4>{book.totalPages}</h4>
                </section>
              </div>
            </BookInfoBody>
          </BookInfoContainer>
        </Content>

        <ReviewsContainer>
          <div>
            <p>Avaliações</p>

            {!book.ratings?.some(
              (rating: any) => rating?.User?.id === session?.data?.user?.id
            ) &&
              showLeaveReview === false &&
              (isSignedIn ? (
                <button onClick={handleLeaveReview}>Avaliar</button>
              ) : (
                <Dialog.Root key={book.id}>
                  <Dialog.Trigger asChild>
                    <button>Avaliar</button>
                  </Dialog.Trigger>

                  <LoginModal />
                </Dialog.Root>
              ))}
          </div>

          <Reviews>
            {showLeaveReview === true && (
              <form onSubmit={handleSubmit}>
                <LeaveReview>
                  <header>
                    <section>
                      <Avatar image={session.data?.user.avatarUrl} size={40} />

                      <h4>{session.data?.user.name}</h4>
                    </section>

                    <NewRate onRateChange={handleRateChange} />
                  </header>

                  <textarea
                    placeholder="Escreva sua avaliação"
                    value={newReview}
                    onChange={handleTextChange}
                  />

                  <ButtonsContainer>
                    <button onClick={handleCloseLeaveReview}>
                      <X size={24} color="#8381D9" />
                    </button>
                    <button type="submit">
                      <Check size={24} color="#50B2C0" />
                    </button>
                  </ButtonsContainer>
                </LeaveReview>
              </form>
            )}

            {book.ratings
              ?.sort(
                (a: any, b: any) =>
                  new Date(b.createdAt).getTime() -
                  new Date(a.createdAt).getTime()
              )
              .map((rating: any) => {
                const formattedDate = formatDistanceToNow(rating.createdAt, {
                  locale: ptBR,
                  addSuffix: true,
                })

                return (
                  <ReviewCard key={rating.id}>
                    <header>
                      <Avatar image={rating.User.avatarUrl} size={40} />

                      <section>
                        <h4>{rating.User.name}</h4>
                        <p>{formattedDate}</p>
                      </section>

                      <div>
                        <Rating rate={rating.rate} />

                        {session.data?.user.id === rating.User.id && (
                          <button onClick={() => handleDeleteReview(rating.id)}>
                            <Trash />
                          </button>
                        )}
                      </div>
                    </header>

                    <span>{rating.description}</span>
                  </ReviewCard>
                )
              })}
          </Reviews>
        </ReviewsContainer>
      </Box>
    </Dialog.Portal>
  )
}
