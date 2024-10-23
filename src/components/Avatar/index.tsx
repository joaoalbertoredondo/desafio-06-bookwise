import Image from "next/image"
import { AvatarContainer } from "./styles"

interface AvatarProps {
  size: number
  image: string
}

export function Avatar({ image, size }: AvatarProps) {
  return (
    <AvatarContainer>
      <Image src={image} alt="" height={size} width={size} />
    </AvatarContainer>
  )
}
