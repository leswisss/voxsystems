import Image from 'next/image'
import "../styles/page.scss"
import { Hero } from '@/components'

export default function Home() {
  return (
    <main className='main'>
      <Hero />
    </main>
  )
}
