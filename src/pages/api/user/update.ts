import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "PATCH") {
    res.status(501).json({ message: "Method not implemented" })
  }

  const { id, name, username, email, avatarUrl } = req.body

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

  if (!id) {
    return res.status(400).json({ message: "User ID is required." })
  }
  // if (Object.keys(req.body).length === 0) {
  //   return res.status(200).json({ message: "No changes made" })
  // }
  // console.log("log:", Object.keys(req.body).length)

  res.status(200).json({ updatedUser })
}
