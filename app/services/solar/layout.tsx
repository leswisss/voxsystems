import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SYSTEMS - Solar Investissez dans le solaire pour un avenir radieux.',
  description: "SYSTEMS Services Solar page.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}