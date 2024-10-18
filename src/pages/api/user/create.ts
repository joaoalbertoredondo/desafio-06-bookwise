import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(501).json({ message: "Method not implemented" })
  }

  const { name, username, email, avatarUrl } = req.body

  const errors = validateBody(name, username, email, avatarUrl)

  if (errors.length) {
    res.status(400).json({ message: "Bad Request", errors })
  }

  const newUser = await prisma.user.create({
    data: {
      name,
      username,
      email,
      avatarUrl,
    },
  })

  res.status(201).json({ newUser })
}

function validateBody(name: any, username: any, email: any, avatarUrl: any) {
  let errors = []

  if (typeof name !== "string" || name.length === 0) {
    errors.push("Name must be a valid string")
  }

  if (typeof username !== "string" || username.length === 0) {
    errors.push("Username must be a valid string")
  }

  if (typeof email !== "string" || email.length === 0) {
    errors.push("E-mail must be a valid string")
  }

  if (typeof avatarUrl !== "string" || avatarUrl.length === 0) {
    errors.push("AvatarUrl must be a valid string")
  }

  return errors
}
