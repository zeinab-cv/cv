import { getThemeClasses } from '../lib/theme';

export default function Hero() {
  const theme = getThemeClasses();
  
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center relative overflow-hidden">
      {/* Floating glass elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-white/10 backdrop-blur-sm rounded-full animate-float opacity-30"></div>
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-white/15 backdrop-blur-md rounded-full animate-float-delayed opacity-40"></div>
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-white/20 backdrop-blur-lg rounded-full animate-pulse opacity-50"></div>
      
      {/* Main content in glass container */}
      <div className={`${theme.glassOverlay} p-12 rounded-3xl ${theme.glassShadow} relative z-10 max-w-4xl mx-auto`}>
        {/* Subtle inner glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-3xl"></div>
        
        <div className="relative z-10">
          <h1 className={`text-5xl md:text-7xl font-bold ${theme.heroText} mb-6 drop-shadow-lg`}>
            Zeinab Daneshpour
          </h1>
          <p className={`text-xl md:text-2xl ${theme.heroText} mb-8 max-w-2xl mx-auto opacity-90 drop-shadow-sm`}>
            &ldquo;Your past plants the seeds, but your curiosity lets you bloom&rdquo;
          </p>
          <p className={`text-lg ${theme.heroText} mb-10 opacity-80 drop-shadow-sm`}>
            Project Coordinator | Social Development | Peace & Conflict Research
          </p>
          
          {/* Glass button */}
          <a
            href="mailto:zeyndanesh@gmail.com"
            className={`${theme.primaryButton} px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 relative overflow-hidden group`}
          >
            {/* Button inner glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">Get In Touch</span>
          </a>
        </div>
      </div>
    </section>
  );
} 