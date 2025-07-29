import { getThemeClasses } from '../../lib/theme';
import TypeWriter from '../TypeWriter';
import Image from 'next/image';
import { IconBrandLinkedin } from '@tabler/icons-react';

export default function HomeTab() {
  const theme = getThemeClasses();
  
  // Get the base path for assets
  const basePath = process.env.NODE_ENV === 'production' ? '/cv' : '';

  return (
    <div className="space-y-6">
      {/* Welcome Header*/}
      <h2 
        className="text-3xl font-bold text-white mb-8 text-center drop-shadow-lg flex items-center justify-center space-x-2"
        data-aos="fade-up"
      >
        <TypeWriter 
          text="Hello, welcome to my digital CV"
          delay={20}
          speed={40}
        />
      </h2>
      
      {/* About Section */}
      <div 
        className={`${theme.glassOverlay} rounded-3xl p-8 ${theme.glassShadow} relative overflow-hidden`}
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-duration="600"
      >
        {/* Subtle background decoration - matching theme */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-pink-400/20 rounded-full animate-float"></div>
        <div className="absolute bottom-4 left-4 w-6 h-6 bg-purple-400/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative z-10 space-y-8">
          {/* Bio Section */}
          <div className="flex items-start gap-8">
            {/* Text Content */}
            <div className="flex-1">
              <p 
                className="text-white/80 leading-relaxed text-lg text-left"
                data-aos="fade-right"
                data-aos-delay="800"
                data-aos-duration="800"
              >
                I work at the intersection of <span className="text-white font-semibold drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">project coordination</span>, <span className="font-semibold text-pink-300 drop-shadow-[0_0_8px_rgba(244,114,182,0.7)]">community engagement</span>, and <span className="font-semibold text-purple-300 drop-shadow-[0_0_8px_rgba(192,132,252,0.7)]">administration</span> with a passion for <span className="font-semibold text-pink-200 drop-shadow-[0_0_8px_rgba(251,207,232,0.7)]">content creation</span> and <span className="font-semibold text-purple-200 drop-shadow-[0_0_8px_rgba(221,214,254,0.7)]">social media marketing</span>.<br/><br/>I bring <span className="font-semibold text-pink-300 drop-shadow-[0_0_8px_rgba(244,114,182,0.7)]">positive attitude</span>, <span className="font-semibold text-purple-300 drop-shadow-[0_0_8px_rgba(192,132,252,0.7)]">structure</span>, and <span className="font-semibold text-pink-200 drop-shadow-[0_0_8px_rgba(251,207,232,0.7)]">purpose</span> into everything I do.
              </p>
              
              {/* LinkedIn Button */}
              <div className="mt-8">
                <a 
                  href="https://www.linkedin.com/in/zeinab-daneshpour-baa66294//" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 hover:from-pink-500/60 hover:to-purple-500/60 border-2 border-pink-400/40 hover:border-pink-300/80 rounded-full px-6 py-3 text-sm text-white/90 hover:text-white transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-pink-500/40 relative overflow-hidden animate-bounce hover:animate-none"
                  style={{ 
                    animation: 'bounce 2s infinite, glow 3s ease-in-out infinite alternate'
                  }}
                >
                  {/* Animated background shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <IconBrandLinkedin size={24} className="animate-pulse group-hover:animate-spin transition-all duration-300 drop-shadow-lg" />
                  <span className="font-semibold relative z-10 group-hover:animate-pulse">I&apos;d love to connect.</span>
                  
                  {/* Floating hearts effect */}
                  <div className="absolute -top-1 -right-1 text-pink-400 text-xs animate-ping">💖</div>
                </a>
              </div>
              
              <style jsx>{`
                @keyframes glow {
                  0% { box-shadow: 0 0 20px rgba(244, 114, 182, 0.3); }
                  100% { box-shadow: 0 0 30px rgba(244, 114, 182, 0.8), 0 0 40px rgba(192, 132, 252, 0.4); }
                }
              `}</style>
            </div>

            {/* Profile Picture */}
            <div 
              className="flex-shrink-0"
              data-aos="fade-left"
              data-aos-delay="1000"
              data-aos-duration="600"
            >
              <div className="relative group cursor-pointer">
                <Image
                  src={`${basePath}/zeyn-pp-optimized.jpg`}
                  alt="Profile Picture" 
                  width={280}
                  height={320}
                  className="rounded-3xl border-4 border-white/20 hover:border-pink-300/60 shadow-lg drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_40px_rgba(244,114,182,0.6)] object-cover transition-all duration-600 ease-out hover:brightness-110 hover:contrast-105 hover:saturate-110"
                />
                
                {/* Clean ring effect - no constant animation */}
                <div className="absolute inset-0 rounded-3xl border-2 border-pink-400/20 group-hover:border-pink-400/50 transition-all duration-600"></div>
                
                {/* Subtle shimmer overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent via-white/0 to-transparent group-hover:via-white/10 transition-all duration-600"></div>
              </div>
            </div>
          </div>

          {/* Expertise Section */}
          <div>
            {/* Header */}
            <h3 
              className="text-2xl font-bold text-white mb-6 text-center drop-shadow-lg"
              data-aos="fade-up"
              data-aos-delay="1200"
              data-aos-duration="500"
            >
              My Expertise
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 - Project & Community Coordination */}
          <div 
            className="group relative bg-gradient-to-br from-pink-500/20 to-pink-600/30 hover:from-pink-500/40 hover:to-pink-600/50 rounded-3xl p-6 border border-pink-400/20 hover:border-pink-400/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20 cursor-pointer aspect-square flex flex-col items-center justify-center"
            data-aos="fade-up"
            data-aos-delay="1400"
            data-aos-duration="500"
          >
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🤝</div>
            <h3 className="text-lg font-bold text-white mb-2 text-center group-hover:opacity-0 transition-opacity duration-300">
              Project & Community Coordination
            </h3>
            
            {/* Hover Description */}
            <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-black/30 rounded-3xl"></div>
              <p className="relative text-white text-sm font-semibold text-center leading-relaxed">
                Leading youth empowerment projects through Erasmus+ with stakeholder collaboration expertise.
              </p>
            </div>
          </div>

          {/* Card 2 - Digital Content & Social Media */}
          <div 
            className="group relative bg-gradient-to-br from-purple-500/20 to-purple-600/30 hover:from-purple-500/40 hover:to-purple-600/50 rounded-3xl p-6 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer aspect-square flex flex-col items-center justify-center"
            data-aos="fade-up"
            data-aos-delay="1600"
            data-aos-duration="500"
          >
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">📱</div>
            <h3 className="text-lg font-bold text-white mb-2 text-center group-hover:opacity-0 transition-opacity duration-300">
              Digital Content & Social Media
            </h3>
            
            {/* Hover Description */}
            <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-black/30 rounded-3xl"></div>
              <p className="relative text-white text-sm font-semibold text-center leading-relaxed">
                Managing social media using Canva, AI tools for multiple organizations.
              </p>
            </div>
          </div>

          {/* Card 3 - Administrative & Operational Support */}
          <div 
            className="group relative bg-gradient-to-br from-indigo-500/20 to-indigo-600/30 hover:from-indigo-500/40 hover:to-indigo-600/50 rounded-3xl p-6 border border-indigo-400/20 hover:border-indigo-400/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20 cursor-pointer aspect-square flex flex-col items-center justify-center"
            data-aos="fade-up"
            data-aos-delay="1800"
            data-aos-duration="500"
          >
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">⚙️</div>
            <h3 className="text-lg font-bold text-white mb-2 text-center group-hover:opacity-0 transition-opacity duration-300">
              Administrative & Operational Support
            </h3>
            
            {/* Hover Description */}
            <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-black/30 rounded-3xl"></div>
              <p className="relative text-white text-sm font-semibold text-center leading-relaxed">
                Providing reliable office coordination, event planning, and multicultural team communication.
              </p>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>  
    </div>
  );
} 