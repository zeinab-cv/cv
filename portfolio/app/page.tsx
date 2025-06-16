import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Hero />
      <About />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}
