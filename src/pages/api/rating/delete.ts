import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "DELETE") {
    res.status(501).json({ message: "Method not implemented." })
  }

  const id = req.body.id

  if (!id) {
    res.status(400).json({ message: "Id not found." })
  }

  const rating = await prisma.rating.findUnique({
    where: {
      id,
    },
  })

  if (rating === null) {
    res.status(404).json({ message: "Rating not found." })
  }

  const deletdRating = await prisma.rating.delete({
    where: {
      id,
    },
  })

  res.status(200).json({ deletdRating })
}
