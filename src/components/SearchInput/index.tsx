import { MagnifyingGlass } from "@phosphor-icons/react"
import { SearchInputContainer } from "./styles"

interface SearchInputprops {
  placeholder: string
  size: "lg" | "md"
}

export function SearchInput({ placeholder, size }: SearchInputprops) {
  return (
    <SearchInputContainer size={size}>
      <input type="text" placeholder={placeholder} />

      <button>
        <MagnifyingGlass size={20} />
      </button>
    </SearchInputContainer>
  )
}
