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

  export interface Book {
    map(arg0: (book: any) => false | import("react").JSX.Element): import("react").ReactNode
    id: string
    name: string
    author: string
    summary: string
    category: string
    coverUrl: string
    createdAt: Date
    totalPages: number
    finalRating: number
    numberOfRatings: number
    ratings?: any
  }

  interface Session {
    user: User
  }
}
