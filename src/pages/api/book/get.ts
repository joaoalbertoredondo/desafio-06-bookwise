import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(501).json({ message: "Mehtod not implemented." })
  }

  const bookId = req.query.id as string

  const book = await prisma.book.findUnique({
    where: {
      id: bookId,
    },
  })

  res.status(200).json({ book })
}
