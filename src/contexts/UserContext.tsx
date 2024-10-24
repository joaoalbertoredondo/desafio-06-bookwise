import axios from "axios"
import { User } from "next-auth"
import { useRouter } from "next/router"
import { createContext, ReactNode, useEffect, useState } from "react"

interface UserContextType {
  user?: User
  setUser?: () => void
}

interface UserContextProps {
  children: ReactNode
}

export const UserContext = createContext({} as any)

export function UserProvider({ children }: UserContextProps) {
  const [user, setUser] = useState<User>()

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
