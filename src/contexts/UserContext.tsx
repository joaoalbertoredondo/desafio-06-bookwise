import { User } from "next-auth"
import { createContext, ReactNode, useState } from "react"

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
