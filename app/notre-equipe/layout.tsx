import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SYSTEMS - Notre Équipe.',
  description: "SYSTEMS OUR Team page.",
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