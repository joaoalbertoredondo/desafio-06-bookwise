import { useEffect, useState } from "react"
import Sidebar from "../../components/Sidebar"
import {
  BookCardContainer,
  CategoriesContainer,
  ExploreContainer,
  ExploreContent,
} from "./styles"
import axios from "axios"
import { Binoculars } from "@phosphor-icons/react"
import { SearchInput } from "../../components/SearchInput"
import { CategoryButton } from "./components/CategoryButton"
import { BookCard } from "../../components/BookCard"
import * as Dialog from "@radix-ui/react-dialog"
import { BookModal } from "../../components/BookModal"

export default function Explore() {
  const categories = [
    {
      text: "Tudo",
    },
    {
      text: "Computação",
    },
    {
      text: "Educação",
    },
    {
      text: "Fantasia",
    },
    {
      text: "Ficção científica",
    },
    {
      text: "Horror",
    },
    {
      text: "HQs",
    },
    {
      text: "Suspense",
    },
  ]

  const [books, setBooks] = useState<any>([])
  const [selectedBook, setSelectedBook] = useState<any>({})
  const [selectedCategory, setSelectedCategory] = useState<string>("Tudo")
  const [refetch, setRefetch] = useState(true)
  const [searchTerm, setSearchTerm] = useState<string>("")

  function handleSelectCategory(category: string) {
    setSelectedCategory(category)
  }

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    axios.get("/api/book/get-all").then((response) => {
      setBooks(response.data.books)
      if (Object.keys(selectedBook).length > 0) {
        setSelectedBook(
          response.data.books.find((book: any) => book.id === selectedBook.id)
        )
      }
    })
  }, [refetch])

  const filteredBooks = books.filter((book: any) => {
    const matchesCategory =
      selectedCategory === "Tudo" || book.category === selectedCategory
    const matchesSearch =
      book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesCategory && matchesSearch
  })

  return (
    <ExploreContainer>
      <Sidebar />

      <ExploreContent>
        <header>
          <div>
            <Binoculars size={32} color="#50B2C0" />
            <h1>Explore</h1>
          </div>

          <SearchInput
            size="md"
            placeholder="Buscar livro ou autor"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </header>

        <CategoriesContainer>
          {categories.map((item) => {
            return (
              <CategoryButton
                key={item.text}
                isSelected={selectedCategory === item.text}
                onClick={() => handleSelectCategory(item.text)}
              >
                {item.text}
              </CategoryButton>
            )
          })}
        </CategoriesContainer>

        <BookCardContainer>
          <Dialog.Root>
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book: any) => (
                <BookCard
                  key={book.id}
                  book={book}
                  setSelectedBook={setSelectedBook}
                />
              ))
            ) : (
              <p>Nenhum livro encontrado para a categoria selecionada.</p>
            )}

            <BookModal
              book={selectedBook}
              setRefetch={setRefetch}
              refetch={refetch}
            />
          </Dialog.Root>
        </BookCardContainer>
      </ExploreContent>
    </ExploreContainer>
  )
}
