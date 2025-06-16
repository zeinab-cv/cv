import { getThemeClasses } from '../lib/theme';
import { 
  IconMail, 
  IconBrandLinkedin, 
  IconLink, 
  IconPhone, 
  IconMapPin, 
  IconCalendar,
  IconDownload
} from '@tabler/icons-react';

export default function Sidebar() {
  const theme = getThemeClasses();
  
  return (
    <div className="sticky top-8 h-fit mt">
      {/* Main Profile Card */}
          <div className="w-48 h-48 absolute -top-24 left-1/2 -translate-x-1/2 rounded-2xl bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white text-6xl font-bold shadow-lg hover:scale-110 transition-transform z-[100]">
            ZD
          </div>
      <div className={`${theme.glassOverlay} rounded-3xl p-8 ${theme.glassShadow} relative overflow-hidden hover:scale-105 transition-transform duration-300`}>
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 via-blue-400/20 to-purple-400/20 rounded-3xl"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full animate-pulse-glow"></div>
        <div className="absolute bottom-6 left-6 w-6 h-6 bg-purple-400/20 rounded-full animate-float"></div>
        
        <div className="relative z-10 text-center">
          {/* Profile Image Placeholder */}
          
          {/* Name and Title */}
          <h2 className="text-2xl font-bold text-white mb-2 drop-shadow-lg mt-20">
            Zeinab Daneshpour
          </h2>
          <p className="text-white/80 mb-4 drop-shadow-sm">
            Project Coordinator
          </p>
          
          {/* Skill Tags */}
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full border border-white/20 hover:bg-white/20 hover:text-white hover:border-white/40 hover:shadow-lg hover:shadow-white/20 hover:scale-105 transition-all duration-300 cursor-pointer group relative overflow-hidden">
              <span className="relative z-10">Project Coordination</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </span>
            <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full border border-white/20 hover:bg-white/20 hover:text-white hover:border-white/40 hover:shadow-lg hover:shadow-blue-400/20 hover:scale-105 transition-all duration-300 cursor-pointer group relative overflow-hidden">
              <span className="relative z-10">Cross-cultural Collaboration</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </span>
            <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full border border-white/20 hover:bg-white/20 hover:text-white hover:border-white/40 hover:shadow-lg hover:shadow-green-400/20 hover:scale-105 transition-all duration-300 cursor-pointer group relative overflow-hidden">
              <span className="relative z-10">Event Management</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </span>
            <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full border border-white/20 hover:bg-white/20 hover:text-white hover:border-white/40 hover:shadow-lg hover:shadow-purple-400/20 hover:scale-105 transition-all duration-300 cursor-pointer group relative overflow-hidden">
              <span className="relative z-10">Workshop Facilitation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </span>
            <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full border border-white/20 hover:bg-white/20 hover:text-white hover:border-white/40 hover:shadow-lg hover:shadow-yellow-400/20 hover:scale-105 transition-all duration-300 cursor-pointer group relative overflow-hidden">
              <span className="relative z-10">Visual Design</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </span>
            <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full border border-white/20 hover:bg-white/20 hover:text-white hover:border-white/40 hover:shadow-lg hover:shadow-indigo-400/20 hover:scale-105 transition-all duration-300 cursor-pointer group relative overflow-hidden">
              <span className="relative z-10">Documentation & Reporting</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </span>
          </div>
          
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
        </div>
      </div>
      
      {/* Contact Info Card */}
      <div className={`${theme.glassCard} rounded-2xl p-8 mt-6 ${theme.cardShadow} hover:scale-105 transition-transform duration-300 relative overflow-hidden`}>
        {/* Subtle animated background */}
        <div className="absolute top-2 right-2 w-4 h-4 bg-pink-400/20 rounded-full animate-pulse"></div>
        
        <div className="space-y-6 text-white relative z-10">
          <div className="flex items-center space-x-4 hover:translate-x-2 transition-transform duration-300">
            <IconPhone size={24} className="text-white" />
            <span className="text-base">+123 456 7890</span>
          </div>
          <div className="flex items-center space-x-4 hover:translate-x-2 transition-transform duration-300">
            <IconMail size={24} className="text-white" />
            <span className="text-base">zeyndanesh@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4 hover:translate-x-2 transition-transform duration-300">
            <IconMapPin size={24} className="text-white" />
            <span className="text-base">Location</span>
          </div>
          <div className="flex items-center space-x-4 hover:translate-x-2 transition-transform duration-300">
            <IconCalendar size={24} className="text-white" />
            <span className="text-base">May 27, 1990</span>
          </div>
        </div>
      </div>
      
      {/* Download CV Button */}
      <button className="w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 px-6 rounded-2xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 relative overflow-hidden group">
        {/* Button animation overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <span className="relative z-10 flex items-center justify-center space-x-2">
          <IconDownload size={18} />
          <span>Download CV</span>
        </span>
      </button>
    </div>
  );
} 