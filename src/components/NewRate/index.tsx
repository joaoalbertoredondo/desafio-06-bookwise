import { Star } from "@phosphor-icons/react"
import { NewRateContainer } from "./styles"
import { useState } from "react"

export function NewRate() {
  const [rate, setRate] = useState(0)

  function handleRate(newRate: number) {
    setRate(newRate)
  }
  return (
    <NewRateContainer>
      {[1, 2, 3, 4, 5].map((value) => (
        <button key={value} onClick={() => handleRate(value)}>
          <Star weight={rate >= value ? "fill" : "regular"} size={28} />
        </button>
      ))}
    </NewRateContainer>
  )
}
