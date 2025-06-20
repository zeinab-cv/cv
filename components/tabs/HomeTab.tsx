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
        <span>Hello, I&apos;m Zeyn welcome to my digital CV</span>
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
            I&apos;m a <span className="text-white font-semibold">project coordinator</span> with a background in <span className="text-pink-300">anthropology</span>, <span className="text-purple-300">social development</span>, and <span className="text-pink-200">peace studies</span>. I work at the intersection of <span className="text-purple-200">youth engagement</span>, <span className="text-pink-300">community development</span>, and <span className="text-purple-300">digital communication</span>, with a passion for inclusive projects, dialogue, and creative collaboration.
          </p>
        </div>
      </div>

      {/* Hero Quote Section */}
      <div 
        className={`${theme.glassOverlay} rounded-3xl p-12 ${theme.glassShadow} text-center relative overflow-hidden`}
        data-aos="zoom-in"
        data-aos-delay="1000"
        data-aos-duration="800"
      >
        {/* Decorative background elements - simplified to pink/purple theme */}
        <div 
          className="absolute top-6 left-6 w-16 h-16 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"
          data-aos="fade-in"
          data-aos-delay="1200"
        ></div>
        <div 
          className="absolute bottom-6 right-6 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse" 
          style={{ animationDelay: '1s' }}
          data-aos="fade-in"
          data-aos-delay="1400"
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-pink-400/10 to-purple-400/10 rounded-full blur-2xl animate-pulse" 
          style={{ animationDelay: '2s' }}
          data-aos="fade-in"
          data-aos-delay="1600"
        ></div>
        
        {/* Quote marks and content */}
        <div className="relative z-10">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <IconQuote 
                size={48} 
                className="text-pink-300/60 transform rotate-180" 
                data-aos="flip-up"
                data-aos-delay="1400"
                data-aos-duration="600"
              />
              <div className="absolute inset-0 bg-pink-300/20 rounded-full blur-lg animate-pulse"></div>
            </div>
          </div>
          
          {/* Main Quote - unified gradient */}
          <div className="relative">
            <h1 
              className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg leading-tight"
              data-aos="fade-up"
              data-aos-delay="1600"
              data-aos-duration="1000"
            >
              <span className="bg-gradient-to-r from-pink-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Your past plants the seeds,
                <br />
                but your curiosity lets you bloom
              </span>
            </h1>
            
            {/* Decorative line */}
            <div 
              className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full mb-6"
              data-aos="slide-right"
              data-aos-delay="2000"
              data-aos-duration="800"
            ></div>
          </div>
          
          {/* Closing quote mark */}
          <div className="flex justify-center">
            <div className="relative">
              <IconQuote 
                size={48} 
                className="text-purple-300/60" 
                data-aos="flip-down"
                data-aos-delay="2200"
                data-aos-duration="600"
              />
              <div className="absolute inset-0 bg-purple-300/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 