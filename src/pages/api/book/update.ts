import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "PATCH") {
    res.status(501).json({ message: "Method not implemented" })
  }

  const { id, name, author, summary, category, coverUrl, totalPages } = req.body

  const updatedBook = await prisma.book.update({
    where: {
      id,
    },
    data: {
      name,
      author,
      summary,
      category,
      coverUrl,
      totalPages,
    },
  })

  if (!id) {
    return res.status(400).json({ message: "Book ID is required." })
  }

  res.status(200).json({ updatedBook })
}
