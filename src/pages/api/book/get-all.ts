import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../lib/prisma"

type Book = {
  id: string
  name: string
  author: string
  summary: string
  category: string
  coverUrl: string
  totalPages: number
  createdAt: Date
  numberOfRatings: number
  finalRating: number
}

type Data = {
  books: Book[]
  count: number
}

type Error = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  if (req.method !== "GET") {
    res.status(501).json({ message: "Method not implemented." })
    return
  }
  const books = await prisma.book.findMany()
  res.status(200).json({ books, count: books.length })
}
