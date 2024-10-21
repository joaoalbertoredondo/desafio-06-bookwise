import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "DELETE") {
    res.status(501).json("Method not implemented.")
    return
  }

  const id = req.query.id as string

  if (!id) {
    res.status(400).json({ message: "Id not found." })
    return
  }

  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  })

  if (user === null) {
    res.status(404).json({ message: "User not found." })
    return
  }

  const deletedUser = await prisma.user.delete({
    where: {
      id,
    },
  })

  res.status(200).json({ deletedUser })
}
