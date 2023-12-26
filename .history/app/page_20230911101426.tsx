import "../styles/page.scss"
import { Hero, Vision, Services, OurTeam, Pr } from '@/components'

export default function Home() {
  return (
    <main className='main'>
      <Hero />
      <Services/>
      <Vision />
      <OurTeam />
    </main>
  )
}
