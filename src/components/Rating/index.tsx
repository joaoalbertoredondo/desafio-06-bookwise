import { Star } from "@phosphor-icons/react"
import { RatingContainer } from "./styles"

interface RatingProps {
  rate: number
  size?: number
}

export function Rating({ rate, size }: RatingProps) {
  return (
    <RatingContainer>
      {rate > 0 ? (
        <>
          <Star weight={rate >= 1 ? "fill" : "regular"} size={size} />
          <Star weight={rate >= 2 ? "fill" : "regular"} size={size} />
          <Star weight={rate >= 3 ? "fill" : "regular"} size={size} />
          <Star weight={rate >= 4 ? "fill" : "regular"} size={size} />
          <Star weight={rate >= 5 ? "fill" : "regular"} size={size} />
        </>
      ) : (
        <>Sem avaliações</>
      )}
    </RatingContainer>
  )
}
