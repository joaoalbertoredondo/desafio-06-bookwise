import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "PATCH") {
    res.status(501).json({ message: "Method not implemented." })
    return
  }

  const { id, name, username, email, avatarUrl } = req.body

  if (!id) {
    res.status(400).json({ message: "User ID is required." })
    return
  }

  const updatedUser = await prisma.user.update({
    where: {
      id,
    },
    data: {
      name,
      username,
      email,
      avatarUrl,
    },
  })

  res.status(200).json({ updatedUser })
}
