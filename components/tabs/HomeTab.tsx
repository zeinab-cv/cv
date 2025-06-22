import { getThemeClasses } from '../../lib/theme';
import { IconQuote } from '@tabler/icons-react';

export default function HomeTab() {
  const theme = getThemeClasses();

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <h2 
        className="text-3xl font-bold text-white mb-8 text-center drop-shadow-lg flex items-center justify-center space-x-2"
        data-aos="fade-down"
        data-aos-delay="400"
        data-aos-duration="800"
      >
        <span>Hello, welcome to my digital CV</span>
      </h2>
      
      {/* About Section */}
      <div 
        className={`${theme.glassOverlay} rounded-3xl p-8 ${theme.glassShadow} text-center relative overflow-hidden`}
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-duration="600"
      >
        {/* Subtle background decoration - matching theme */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-pink-400/20 rounded-full animate-float"></div>
        <div className="absolute bottom-4 left-4 w-6 h-6 bg-purple-400/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative z-10">
          <p 
            className="text-white/80 leading-relaxed text-lg"
            data-aos="fade-in"
            data-aos-delay="800"
            data-aos-duration="800"
          >
            I&apos;m a <span className="text-white font-semibold drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">project coordinator</span> with a background in <span className="font-semibold text-pink-300 drop-shadow-[0_0_8px_rgba(244,114,182,0.7)]">anthropology</span>, <span className="font-semibold text-purple-300 drop-shadow-[0_0_8px_rgba(192,132,252,0.7)]">social development</span>, and <span className="font-semibold text-pink-200 drop-shadow-[0_0_8px_rgba(251,207,232,0.7)]">peace studies</span>. I work at the intersection of <span className="font-semibold text-purple-200 drop-shadow-[0_0_8px_rgba(221,214,254,0.7)]">youth engagement</span>, <span className="font-semibold text-pink-300 drop-shadow-[0_0_8px_rgba(244,114,182,0.7)]">community development</span>, and <span className="font-semibold text-purple-300 drop-shadow-[0_0_8px_rgba(192,132,252,0.7)]">digital communication</span>, with a passion for inclusive projects, dialogue, and creative collaboration.
          </p>
        </div>
      </div>
    </div>
  );
} 