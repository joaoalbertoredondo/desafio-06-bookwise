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

  const username = req.query.username as string

  if (!username) {
    res.status(400).json({ message: "Username is requeired." })
    return
  }

  const user = await prisma.user.findUnique({
    where: {
      username: username,
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
