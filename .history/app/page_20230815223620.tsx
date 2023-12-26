import "../styles/page.scss"
import { Hero, Vision, Services } from '@/components'

export default function Home() {
  return (
    <main className='main'>
      <Hero />
      <Services/>
      <Vision />
    </main>
  )
}
