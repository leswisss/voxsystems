import "../styles/globals.scss"
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Navbar } from "@/components"
import localFont from 'next/font/local'
import Foo

const poppins = Poppins({ subsets: ['latin'], weight: ["300", "400", "500"], variable: '--body-font'})

const monumentbold = localFont({
  src: './PPMonumentExtended-Black.ttf',
  display: 'swap',
  variable: '--second-font-bold'
})

const monument = localFont({
  src: './PPMonumentExtended-Regular.ttf',
  display: 'swap',
  variable: '--second-font'
})

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
      <body className={`${poppins.variable} ${monument.variable} ${monumentbold.variable}`}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
