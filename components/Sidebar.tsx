import Image from 'next/image';
import { getThemeClasses } from '../lib/theme';
import { 
  IconMail, 
  IconBrandLinkedin, 
  IconLink, 
  IconPhone, 
  IconMapPin, 
  IconDownload
} from '@tabler/icons-react';

export default function Sidebar() {
  const theme = getThemeClasses();
  
  const knowledges = [
    'Stakeholder Collaboration', 'Event Planning',
    'Community Engagement', 'Erasmus+ and international projects', 'Project Coordination'
  ];
  
  // Get the base path for assets
  const basePath = process.env.NODE_ENV === 'production' ? '/cv' : '';
  
  return (
    <div className="sticky top-8 h-fit mt">
      {/* Main Profile Card */}
          <div className={`w-48 h-48 absolute -top-24 left-1/2 -translate-x-1/2 rounded-2xl ${theme.primaryGradient} p-2 flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-[100]`}>
            <div className="w-full h-full rounded-lg overflow-hidden">
              <Image 
                src={`${basePath}/profilePicture.png`}
                alt="Zeinab Daneshpour"
                width={176}
                height={176}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
      <div className={`${theme.glassOverlay} rounded-3xl p-8 ${theme.glassShadow} relative overflow-hidden hover:scale-105 transition-transform duration-300`}>
        {/* Background gradient overlay */}

     

        
        {/* Animated background elements */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full animate-pulse-glow"></div>
        <div className="absolute bottom-6 left-6 w-6 h-6 bg-purple-400/20 rounded-full animate-float"></div>
        
        <div className="relative z-10 text-center">
          {/* Profile Image Placeholder */}
          
          {/* Name and Title */}
          <h2 className="text-2xl font-bold text-white mb-2 drop-shadow-lg mt-20">
            Zeinab Daneshpour
          </h2>
          <p className="text-white/80 mb-6 drop-shadow-sm">
            Project Coordinator
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-8">
            <a href="mailto:zeyndanesh@gmail.com" className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:scale-105" style={{ animationDelay: '0s' }}>
              <IconMail size={22} className="text-white" />
            </a>
            <a href="#" className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:scale-105">
              <IconBrandLinkedin size={22} className="text-white" />
            </a>
            <a href="#" className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:scale-105">
              <IconLink size={22} className="text-white" />
            </a>
          </div>
          
          {/* Knowledge & Tools */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {knowledges.map((knowledge) => (
                <span 
                  key={knowledge}
                  className={`${theme.skillPill} text-white font-semibold drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]`}
                >
                  {knowledge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Info Card */}
      <div className={`${theme.glassCard} rounded-2xl p-8 mt-6 ${theme.cardShadow} hover:scale-105 transition-transform duration-300 relative overflow-hidden`}>
        {/* Subtle animated background */}
        <div className="absolute top-2 right-2 w-4 h-4 bg-pink-400/20 rounded-full animate-pulse"></div>
        
        <div className="space-y-6 text-white relative z-10">
          <div className="flex items-center space-x-4 hover:translate-x-2 transition-transform duration-300">
            <IconPhone size={24} className="text-white" />
            <span className="text-base">+358 468870598</span>
          </div>
          <div className="flex items-center space-x-4 hover:translate-x-2 transition-transform duration-300">
            <IconMail size={24} className="text-white" />
            <span className="text-base">zeyndanesh@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4 hover:translate-x-2 transition-transform duration-300">
            <IconMapPin size={24} className="text-white" />
            <span className="text-base">Finland, Tampere</span>
          </div>
          
        </div>
      </div>
      
      {/* Download CV Button */}
              <a 
                href={`${basePath}/Zeinab Daneshpour. CV.pdf`}
                download="Zeinab_Daneshpour_CV.pdf"
                className={`w-full mt-6 ${theme.primaryGradient} hover:${theme.primaryGradientHover} text-white py-4 px-6 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 relative overflow-hidden group block text-center`}
              >
        {/* Button animation overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <span className="relative z-10 flex items-center justify-center space-x-2">
          <IconDownload size={18} />
          <span>Download CV</span>
        </span>
      </a>
    </div>
  );
} 