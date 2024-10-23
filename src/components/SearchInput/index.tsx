import { MagnifyingGlass } from "@phosphor-icons/react"
import { SearchInputContainer } from "./styles"

interface SearchInputprops {
  placeholder: string
}

export function SearchInput({ placeholder }: SearchInputprops) {
  return (
    <SearchInputContainer>
      <input type="text" placeholder={placeholder} />

      <button>
        <MagnifyingGlass size={20} />
      </button>
    </SearchInputContainer>
  )
}
