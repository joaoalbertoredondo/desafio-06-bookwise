import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "PATCH") {
    res.status(501).json({ message: "Method not implemented." })
  }

  const { id, rate, description, userId, bookId } = req.body

  if (!id) {
    res.status(400).json({ message: "Rating ID is required." })
    return
  }

  const updatedRating = await prisma.rating.update({
    where: {
      id,
    },
    data: {
      rate,
      description,
      userId,
      bookId,
    },
  })

  res.status(200).json({ updatedRating })
}
