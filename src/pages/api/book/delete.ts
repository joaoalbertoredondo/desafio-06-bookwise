import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "DELETE") {
    res.status(501).json("Method not implemented.")
    return
  }

  const id = req.query.id as string

  if (!id) {
    res.status(400).json({ message: "Id not found." })
    return
  }

  const book = await prisma.book.findUnique({
    where: {
      id,
    },
  })

  if (book === null) {
    res.status(404).json({ message: "Book not found." })
    return
  }

  const deletedBook = await prisma.book.delete({
    where: {
      id,
    },
  })

  res.status(200).json({ deletedBook })
}
