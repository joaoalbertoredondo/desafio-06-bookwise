import { ComponentProps } from "react"
import { CategoryButtonContainer } from "./styles"

interface CategoryButtonProps
  extends ComponentProps<typeof CategoryButtonContainer> {}

export function CategoryButton({ children, ...props }: CategoryButtonProps) {
  return (
    <CategoryButtonContainer {...props}>{children}</CategoryButtonContainer>
  )
}
