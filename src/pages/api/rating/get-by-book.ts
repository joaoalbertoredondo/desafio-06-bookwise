import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../lib/prisma"

type Rating = {
  id: string
  rate: number
  description: string
  userId: string
  bookId: string
  createdAt: Date
}

type Data = {
  bookRatings: Rating[]
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

  const bookId = req.query.bookId as string

  const bookRatings = await prisma.rating.findMany({
    where: {
      bookId: bookId,
    },
  })

  res.status(200).json({ bookRatings, count: bookRatings.length })
}
