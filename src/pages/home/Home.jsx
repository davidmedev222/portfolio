import { Hero } from '../../components/hero/Hero'
import { PreLoader } from '../../components/loader/PreLoader'
import { ParallaxLines } from '../../components/parallax/lines/ParallaxLines'
import { Widget } from '../../components/widget/Widget'
import { Projects, About, Contact } from '../export'

const Home = () => {
  return (
    <main className='main'>
      <PreLoader />
      <Hero />
      <ParallaxLines />
      <Projects />
      <ParallaxLines />
      <About />
      <ParallaxLines />
      <Contact />
      <Widget />
    </main>
  )
}

export { Home }
