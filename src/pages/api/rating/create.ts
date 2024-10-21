import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(501).json({ message: "Method not implemented." })
    return
  }

  const { rate, description, userId, bookId } = req.body

  const newRating = await prisma.rating.create({
    data: {
      rate,
      description,
      userId,
      bookId,
    },
  })

  res.status(201).json({ newRating })
}
