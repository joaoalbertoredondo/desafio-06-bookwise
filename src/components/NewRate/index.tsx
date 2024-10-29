import { Star } from "@phosphor-icons/react"
import { NewRateContainer } from "./styles"
import { useEffect, useState } from "react"

interface NewRateProps {
  onRateChange: (newRate: number) => void
}

export function NewRate({ onRateChange }: NewRateProps) {
  const [rate, setRate] = useState(0)

  useEffect(() => {}, [rate])

  function handleRate(
    event: React.MouseEvent<HTMLButtonElement>,
    newRate: number
  ) {
    event.preventDefault()
    setRate(newRate)
    onRateChange(newRate)
  }
  return (
    <NewRateContainer>
      {[1, 2, 3, 4, 5].map((value) => (
        <button key={value} onClick={(event) => handleRate(event, value)}>
          <Star weight={rate >= value ? "fill" : "regular"} size={28} />
        </button>
      ))}
    </NewRateContainer>
  )
}
