import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../lib/prisma"

type User = {
  id: string
  name: string
  username: string
  email: string
  emailVerified: Date | null
  avatarUrl: string
  createdAt: Date
  updatedAt: Date
}

type Data = {
  users: User[]
  count: number
}

type Error = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  if (req.method !== "GET") {
    res.status(501).json({ message: "Method not implemented" })
  }
  const users = await prisma.user.findMany()
  res.status(200).json({ users, count: users.length })
}
