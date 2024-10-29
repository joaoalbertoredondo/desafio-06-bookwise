import { MagnifyingGlass } from "@phosphor-icons/react"
import { SearchInputContainer } from "./styles"

interface SearchInputprops {
  placeholder: string
  size: "lg" | "md"
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function SearchInput({
  placeholder,
  size,
  onChange,
  value,
}: SearchInputprops) {
  return (
    <SearchInputContainer size={size}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      <button>
        <MagnifyingGlass size={20} />
      </button>
    </SearchInputContainer>
  )
}
