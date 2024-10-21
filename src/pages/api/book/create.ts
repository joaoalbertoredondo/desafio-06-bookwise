import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(501).json({ messgae: "Method not implemented." })
    return
  }

  const { name, author, summary, category, coverUrl, totalPages } = req.body

  const errors = validateBody(
    name,
    author,
    summary,
    category,
    coverUrl,
    totalPages
  )

  if (errors.length) {
    res.status(400).json({ message: "Bad Request.", errors })
    return
  }

  const newBook = await prisma.book.create({
    data: {
      name,
      author,
      summary,
      category,
      coverUrl,
      totalPages,
    },
  })

  res.status(200).json({ newBook })
}

function validateBody(
  name: any,
  author: any,
  summary: any,
  category: any,
  coverUrl: any,
  totalPages: any
) {
  let errors = []

  if (typeof name !== "string" || name.length === 0) {
    errors.push("Name must be a valid string.")
  }

  if (typeof author !== "string" || author.length === 0) {
    errors.push("Username must be a valid string.")
  }

  if (typeof summary !== "string" || summary.length === 0) {
    errors.push("E-mail must be a valid string.")
  }

  if (typeof category !== "string" || category.length === 0) {
    errors.push("AvatarUrl must be a valid string.")
  }

  if (typeof coverUrl !== "string" || coverUrl.length === 0) {
    errors.push("AvatarUrl must be a valid string.")
  }

  if (typeof totalPages !== "number" || totalPages === 0) {
    errors.push("AvatarUrl must be a valid string.")
  }

  return errors
}
