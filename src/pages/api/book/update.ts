import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "PATCH") {
    res.status(501).json({ message: "Method not implemented." })
    return
  }

  const { id, name, author, summary, category, coverUrl, totalPages } = req.body

  if (!id) {
    res.status(400).json({ message: "Book ID is required." })
    return
  }

  if (Object.keys(req.body).length === 1 && !!req.body.id) {
    res.status(400).json({ message: "No changes made." })
    return
  }

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

  res.status(200).json({ updatedBook })
}
