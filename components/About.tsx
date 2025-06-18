import { getThemeClasses } from '../lib/theme';

export default function About() {
  const theme = getThemeClasses();
  
  return (
    <section className={`py-20 px-4 ${theme.sectionBg} relative`}>
      {/* Glass overlay background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className={`text-3xl font-bold ${theme.primaryText} mb-8`}>About Me</h2>
        
        {/* Glassmorphism card */}
        <div className={`${theme.glassOverlay} p-8 rounded-2xl ${theme.glassShadow} relative overflow-hidden`}>
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
          
          <p className={`text-lg ${theme.primaryText} leading-relaxed relative z-10`}>
            I bring a unique blend of academic expertise and practical experience in project coordination, 
            social development, and multicultural engagement. My passion for digital marketing and creative 
            solutions drives me to contribute meaningfully to every team I work with.
          </p>
        </div>
      </div>
    </section>
  );
} 