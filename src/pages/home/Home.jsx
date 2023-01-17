import { Hero } from '../../components/hero/Hero';
import { ParallaxLines } from '../../components/parallax/lines/ParallaxLines';
import { Widget } from '../../components/widget/Widget';
import { Projects, About, Contact } from '../export';

const Home = () => {
  return (
    <main className="main">
      <Hero />
      <ParallaxLines />
      <Projects />
      <ParallaxLines />
      <About />
      <ParallaxLines />
      <Contact />
      <Widget />
    </main>
  );
};

export { Home };
