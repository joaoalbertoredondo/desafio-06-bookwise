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
  userRatings: Rating[]
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
  }

  const userId = req.query.userId as string

  const userRatings = await prisma.rating.findMany({
    where: {
      userId,
    },
  })

  res.status(200).json({ userRatings, count: userRatings.length })
}
