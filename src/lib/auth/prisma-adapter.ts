import { Adapter, AdapterUser } from "next-auth/adapters"
import { prisma } from "../prisma"
import { User, Account } from "@prisma/client"

export function PrismaAdapter(): Adapter {
  return {
    async createUser(user: User) {
      const createdUser = await prisma.user.create({
        data: {
          name: user.name,
          username: user.email.split("@")[0],
          email: user.email,
          avatarUrl: user.avatarUrl,
        },
      })

      return {
        id: createdUser.id,
        name: createdUser.name,
        username: createdUser.email.split("@")[0],
        email: createdUser.email,
        avatarUrl: createdUser.avatarUrl,
        emailVerified: null,
      }
    },

    async getUser(id): Promise<AdapterUser | null> {
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      })

      if (!user) {
        return null
      }

      return {
        id: user.id,
        name: user.name,
        email: user.email,
        emailVerified: null,
        username: user.username,
        avatarUrl: user.avatarUrl,
        createdAt: user.createdAt,
      }
    },

    async getUserByEmail(email: string): Promise<AdapterUser | null> {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      })

      if (!user) {
        return null
      }

      return {
        id: user.id,
        name: user.name,
        email: user.email,
        emailVerified: null,
        username: user.username,
        avatarUrl: user.avatarUrl,
        createdAt: user.createdAt,
      }
    },

    async getUserByAccount({
      providerAccountId,
      provider,
    }): Promise<AdapterUser | null> {
      const account = await prisma.account.findUnique({
        where: {
          provider_providerAccountId: {
            provider,
            providerAccountId,
          },
        },
        include: {
          user: true,
        },
      })

      if (!account) {
        return null
      }

      const { user } = account

      return {
        id: user.id,
        name: user.name,
        email: user.email,
        emailVerified: null,
        username: user.username,
        avatarUrl: user.avatarUrl,
        createdAt: user.createdAt,
      }
    },

    async updateUser(user): Promise<AdapterUser> {
      const prismaUser = await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          name: user.name,
          email: user.email,
          avatarUrl: user.avatarUrl,
        },
      })

      return {
        id: prismaUser.id,
        name: prismaUser.name,
        email: prismaUser.email,
        username: prismaUser.username,
        emailVerified: null,
        avatarUrl: prismaUser.avatarUrl,
        createdAt: prismaUser.createdAt,
      }
    },

    async linkAccount(account: Account) {
      await prisma.account.create({
        data: {
          userId: account.userId,
          type: account.type,
          provider: account.provider,
          providerAccountId: account.providerAccountId,
          refreshToken: account.refreshToken,
          tokenType: account.tokenType,
          scope: account.scope,
          idToken: account.idToken,
          sessionState: account.sessionState,
        },
      })
    },

    async createSession({ sessionToken, userId, expires }) {
      await prisma.session.create({
        data: {
          userId: userId,
          expires,
          sessionToken: sessionToken,
        },
      })

      return {
        userId,
        sessionToken,
        expires,
      }
    },

    async getSessionAndUser(sessionToken: string) {
      const prismaSession = await prisma.session.findUnique({
        where: { sessionToken },
        include: { user: true },
      })

      if (!prismaSession) return null

      const { user, ...session } = prismaSession
      return {
        session: {
          userId: session.userId,
          expires: session.expires,
          sessionToken: session.sessionToken,
        },
        user: {
          id: user.id,
          name: user.name,
          email: user.email!,
          emailVerified: null,
          avatarUrl: user.avatarUrl,
          username: user.username,
          createdAt: user.createdAt,
        },
      }
    },

    async updateSession({ sessionToken, userId, expires }) {
      const prismaSession = await prisma.session.update({
        where: {
          sessionToken: sessionToken,
        },
        data: {
          expires,
          userId: userId,
        },
      })

      return {
        sessionToken: prismaSession.sessionToken,
        userId: prismaSession.userId,
        expires: prismaSession.expires,
      }
    },

    async deleteSession(sessionToken) {
      await prisma.session.delete({
        where: {
          sessionToken: sessionToken,
        },
      })
    },
  }
}
