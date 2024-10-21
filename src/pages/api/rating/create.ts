import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(501).json({ message: "Method not implemented." })
    return
  }

  const { rate, description, userId, bookId } = req.body

  const newRating = await prisma.rating.create({
    data: {
      rate,
      description,
      userId,
      bookId,
    },
  })

  const book = await prisma.book.findFirst({
    where: {
      id: bookId,
    },
  })

  if (!book) {
    res.status(404).json({ message: "Book not found." })
    return
  }

  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
  })

  if (!user) {
    res.status(404).json({ message: "User not found." })
    return
  }

  const newFinalRating =
    (book.finalRating * book.numberOfRatings + rate) /
    (book.numberOfRatings + 1)

  await prisma.book.update({
    where: {
      id: bookId,
    },
    data: {
      numberOfRatings: {
        increment: 1,
      },
      finalRating: newFinalRating,
    },
  })

  res.status(201).json({ newRating })
}
