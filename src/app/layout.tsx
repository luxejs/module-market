import type { Metadata } from "next"
import Providers from "@/src/app/provider"
import "react-responsive-modal/styles.css"
import "@/src/app/globals.css"

export const metadata: Metadata = {
  title: "ComHub",
  description: "ComHub - the hub for Commune Ai modules.",
  icons: [{ rel: 'icon', url: '/favicon.ico' }]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}