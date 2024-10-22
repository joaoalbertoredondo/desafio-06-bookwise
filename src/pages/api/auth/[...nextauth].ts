import NextAuth, { NextAuthOptions } from "next-auth"
// import GithubProvider from "next-auth/providers/github"
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google"
import { PrismaAdapter } from "../../../lib/auth/prisma-adapter"
// import { PrismaClient } from "@prisma/client"

// const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(),

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      authorization: {
        params: {
          scope:
            "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile",
        },
      },
      profile(profile: GoogleProfile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          avatarUrl: profile.picture,
        }
      },
    }),

    //     GithubProvider({
    //       clientId: process.env.GITHUB_ID,
    //       clientSecret: process.env.GITHUB_SECRET,
    //     }),
  ],
  callbacks: {
    async session({ session, user }) {
      return {
        ...session,
        user,
      }
    },
    // secret: process.env.NEXTAUTH_SECRET,
  },
}

export default NextAuth(authOptions)
