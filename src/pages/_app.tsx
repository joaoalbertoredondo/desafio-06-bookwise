import type { AppProps } from "next/app"
import { SessionProvider } from "next-auth/react"
import { globalStyles } from "../styles/globals"
import { useRouter } from "next/router"
import { UserProvider } from "../contexts/UserContext"

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter()

  return (
    <SessionProvider session={session}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </SessionProvider>
  )
}
