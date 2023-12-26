import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SYSTEMS - Contactez-Nous.',
  description: "SYSTEMS Contact Us page.",
}

export default function RootLayut({
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