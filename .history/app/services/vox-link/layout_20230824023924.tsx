import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SYSTEMS - Vox Link',
  description: "SYSTEMS Vox Link page.",
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