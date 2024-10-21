import type { NextApiRequest, NextApiResponse } from "next"
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
  ratings: Rating[]
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
  const ratings = await prisma.rating.findMany()
  res.status(200).json({ ratings, count: ratings.length })
}
