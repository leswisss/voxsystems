import Image from 'next/image'
import "../styles/page.scss"
import { Hero, Vis } from '@/components'

export default function Home() {
  return (
    <main className='main'>
      <Hero />
    </main>
  )
}
