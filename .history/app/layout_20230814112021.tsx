import "../styles/globals.scss"
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import FAV from "./favicon.ico"

const poppins = Poppins({ subsets: ['latin'], weight: ["300", "400", "500"] })

export const metadata: Metadata = {
  title: 'SYSYEMS',
  description: 'An application',
  icons: FAV
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
