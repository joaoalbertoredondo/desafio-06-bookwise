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

  const id = req.query.id as string

  if (!id) {
    res.status(400).json({ message: "ID is requeired." })
    return
  }

  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      ratings: {
        include: {
          Book: {},
        },
      },
    },
  })

  res.status(200).json({ user })
}
