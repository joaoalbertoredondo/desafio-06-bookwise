import type { AppProps } from "next/app"
import { SessionProvider } from "next-auth/react"
import { globalStyles } from "../styles/globals"
import { useRouter } from "next/router"
import { UserProvider } from "../contexts/UserContext"
// import Sidebar from "../components/Sidebar"

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter()

  // const isHomePage = router.pathname === "/"

  return (
    <SessionProvider session={session}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
      {/* {!isHomePage && <Sidebar />} */}
    </SessionProvider>
  )
}
