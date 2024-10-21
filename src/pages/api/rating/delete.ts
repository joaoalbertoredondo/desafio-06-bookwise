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

  const deletedRating = await prisma.rating.delete({
    where: {
      id,
    },
  })

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
    (book.finalRating * book.numberOfRatings - rating.rate) / newNumberOfRatings

  await prisma.book.update({
    where: {
      id: rating.bookId,
    },
    data: {
      numberOfRatings: {
        decrement: 1,
      },
      finalRating: newFinalRating,
    },
  })

  res.status(200).json({ deletdRating: deletedRating })
}
