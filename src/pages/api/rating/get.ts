import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(501).json({ message: "Method not implemented." })
    return
  }

  const ratingId = req.query.id as string

  if (!ratingId) {
    res.status(400).json({ message: "Rating Id not provided." })
    return
  }

  const rating = await prisma.rating.findUnique({
    where: {
      id: ratingId,
    },
    include: {
      Book: {},
      User: {},
    },
  })

  res.status(200).json({ rating })
}
