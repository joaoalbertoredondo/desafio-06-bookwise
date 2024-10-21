import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(501).json({ message: "Mehtod not implemented." })
    return
  }

  const bookId = req.query.id as string

  if (!bookId) {
    res.status(400).json({ message: "Book Id not provided." })
  }

  const book = await prisma.book.findUnique({
    where: {
      id: bookId,
    },
  })

  if (book === null) {
    res.status(404).json({ message: "Book not found." })
    return
  }

  res.status(200).json({ book })
}
