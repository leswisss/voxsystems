import "../styles/page.scss"
import { Hero, Vision, Services, OurTeam, Preloader } from '@/components'

export default function Home() {
  return (
    <>
    <Preloader />
    <main className='main'>
      <Hero />
      <Services/>
      <Vision />
      <OurTeam />
    </main>
    </>
  )
}
