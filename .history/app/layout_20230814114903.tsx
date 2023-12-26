import "../styles/globals.scss"
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ["300", "400", "500"] })

export const metadata: Metadata = {
  title: 'SYSTEMS - Votre partenaire ',
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
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
