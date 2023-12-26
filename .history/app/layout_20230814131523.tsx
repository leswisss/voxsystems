import "../styles/globals.scss"
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Navbar } from "@/components"

const poppins = Poppins({ subsets: ['latin'], weight: ["300", "400", "500"] })

export const metadata: Metadata = {
  title: 'SYSTEMS - Votre partenaire dans la vie intelligente',
  description: 'An application',
  icons: {
    icon: "../public/images/icon.png",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
