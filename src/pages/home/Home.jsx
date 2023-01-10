import { Hero } from '../../components/hero/Hero';
import { ParallaxLines } from '../../components/parallax/lines/ParallaxLines';
import { Projects, About, Contact } from '../export';

const Home = () => {
  return (
    <main className="main">
      {/* COMPONENT */}
      <Hero />
      {/* COMPONENT */}
      <ParallaxLines />
      {/* COMPONENT */}
      <Projects />
      {/* COMPONENT */}
      <ParallaxLines />
      {/* COMPONENT */}
      <About />
      {/* COMPONENT */}
      <ParallaxLines />
      {/* COMPONENT */}
      <Contact />
    </main>
  );
};

export { Home };
