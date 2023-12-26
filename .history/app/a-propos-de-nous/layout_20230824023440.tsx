import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SYSTEMS - À propos de nous.',
  description: "SYSTEMS About Us page.",
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