import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "DELETE") {
    res.status(501).json({ message: "Method not implemented." })
    return
  }

  const id = req.query.id as string

  if (!id) {
    res.status(400).json({ message: "Id not found." })
    return
  }

  const rating = await prisma.rating.findUnique({
    where: {
      id,
    },
  })

  if (rating === null) {
    res.status(404).json({ message: "Rating not found." })
    return
  }

  const book = await prisma.book.findFirst({
    where: {
      id: rating.bookId,
    },
  })

  if (!book) {
    res.status(404).json({ message: "Book not found." })
    return
  }

  const newNumberOfRatings = book.numberOfRatings - 1

  const newFinalRating =
    newNumberOfRatings === 0
      ? 0
      : (book.finalRating * book.numberOfRatings - rating.rate) /
        newNumberOfRatings

  await Promise.all([
    prisma.book.update({
      where: {
        id: rating.bookId,
      },
      data: {
        numberOfRatings: newNumberOfRatings,
        finalRating: newFinalRating,
      },
    }),

    prisma.rating.delete({
      where: {
        id,
      },
    }),
  ])

  res.status(200).json({ success: true })
}
