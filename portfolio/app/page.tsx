import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Contact from '../components/Contact';
import { getThemeClasses } from '../lib/theme';

export default function Home() {
  const theme = getThemeClasses();
  
  return (
    <div className={`min-h-screen ${theme.heroBg}`}>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}
