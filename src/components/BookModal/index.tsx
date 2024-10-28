import {
  BookmarkSimple,
  BookOpen,
  Check,
  TrayArrowUp,
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
import { useState } from "react"
import { NewRate } from "../NewRate"

interface BookModalProps {
  book: Book
}

export function BookModal({ book }: BookModalProps) {
  const [showLeaveReview, setShowLeaveReview] = useState(false)
  const session = useSession()

  const isSignedIn = session.status === "authenticated"

  function handleLeaveReview() {
    setShowLeaveReview(true)
  }

  function handleCloseLeaveReview() {
    setShowLeaveReview(false)
  }

  console.log("book:", book)

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
              <LeaveReview>
                <header>
                  <section>
                    <Avatar image={session.data?.user.avatarUrl} size={40} />

                    <h4>{session.data?.user.name}</h4>
                  </section>

                  <NewRate  />
                </header>

                <textarea placeholder="Escreva sua avaliação" />

                <ButtonsContainer>
                  <button onClick={handleCloseLeaveReview}>
                    <X size={24} color="#8381D9" />
                  </button>
                  <button>
                    <Check size={24} color="#50B2C0" />
                  </button>
                </ButtonsContainer>
              </LeaveReview>
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
                  <ReviewCard key={book.id}>
                    <header>
                      <Avatar image={rating.User.avatarUrl} size={40} />

                      <section>
                        <h4>{rating.User.name}</h4>
                        <p>{formattedDate}</p>
                      </section>

                      <Rating rate={rating.rate} />
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
