import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "DELETE") {
    res.status(501).json("Method not implemented")
  }

  const id = req.body.id

  const deletedUser = await prisma.user.delete({
    where: {
      id,
    },
  })

  res.status(200).json({ deletedUser })
}
