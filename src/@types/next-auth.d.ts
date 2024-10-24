import NextAuth from "next-auth"

declare module "next-auth" {
  export interface User {
    id: string
    name: string
    email: string
    username: string
    avatarUrl: string
    createdAt: Date
  }

  interface Session {
    user: User
  }
}
