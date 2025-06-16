import { getThemeClasses } from '../lib/theme';

export default function Sidebar() {
  const theme = getThemeClasses();
  
  return (
    <div className="sticky top-8 h-fit">
      {/* Main Profile Card */}
      <div className={`${theme.glassOverlay} rounded-3xl p-8 ${theme.glassShadow} relative overflow-hidden`}>
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 via-blue-400/20 to-purple-400/20 rounded-3xl"></div>
        
        <div className="relative z-10 text-center">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
            ZD
          </div>
          
          {/* Name and Title */}
          <h2 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
            Zeinab Daneshpour
          </h2>
          <p className="text-white/80 mb-6 drop-shadow-sm">
            Project Coordinator
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-8">
            <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300">
              <span className="text-sm">📧</span>
            </a>
            <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300">
              <span className="text-sm">💼</span>
            </a>
            <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300">
              <span className="text-sm">🔗</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Contact Info Card */}
      <div className={`${theme.glassCard} rounded-2xl p-6 mt-6 ${theme.cardShadow}`}>
        <div className="space-y-4 text-white">
          <div className="flex items-center space-x-3">
            <span className="text-pink-400">📱</span>
            <span className="text-sm">+123 456 7890</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-pink-400">📧</span>
            <span className="text-sm">zeyndanesh@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-pink-400">📍</span>
            <span className="text-sm">Location</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-pink-400">🎂</span>
            <span className="text-sm">May 27, 1990</span>
          </div>
        </div>
      </div>
      
      {/* Download CV Button */}
      <button className="w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 px-6 rounded-2xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
        📄 Download CV
      </button>
    </div>
  );
} 