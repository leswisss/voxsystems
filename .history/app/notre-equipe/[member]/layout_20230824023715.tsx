import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SYSTEMS - Notre ',
  description: "SYSTEMS Services page.  Nous sommes la pour vous aider a atteindre vos objectifs et a réaliser vos reves. Découvrez comment nous pouvons vous aider des aujourd'hui",
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