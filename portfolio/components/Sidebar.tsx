import { getThemeClasses } from '../lib/theme';

export default function Sidebar() {
  const theme = getThemeClasses();
  
  return (
    <div className="sticky top-8 h-fit">
      {/* Main Profile Card */}
      <div className={`${theme.glassOverlay} rounded-3xl p-8 ${theme.glassShadow} relative overflow-hidden hover:scale-105 transition-transform duration-300`}>
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 via-blue-400/20 to-purple-400/20 rounded-3xl"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full animate-pulse-glow"></div>
        <div className="absolute bottom-6 left-6 w-6 h-6 bg-purple-400/20 rounded-full animate-float"></div>
        
        <div className="relative z-10 text-center">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white text-4xl font-bold shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse-glow">
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
            <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300 animate-float" style={{ animationDelay: '0s' }}>
              <span className="text-sm">📧</span>
            </a>
            <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300 animate-float" style={{ animationDelay: '1s' }}>
              <span className="text-sm">💼</span>
            </a>
            <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300 animate-float" style={{ animationDelay: '2s' }}>
              <span className="text-sm">🔗</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Contact Info Card */}
      <div className={`${theme.glassCard} rounded-2xl p-6 mt-6 ${theme.cardShadow} hover:scale-105 transition-transform duration-300 relative overflow-hidden`}>
        {/* Subtle animated background */}
        <div className="absolute top-2 right-2 w-4 h-4 bg-pink-400/20 rounded-full animate-pulse"></div>
        
        <div className="space-y-4 text-white relative z-10">
          <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
            <span className="text-pink-400">📱</span>
            <span className="text-sm">+123 456 7890</span>
          </div>
          <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
            <span className="text-pink-400">📧</span>
            <span className="text-sm">zeyndanesh@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
            <span className="text-pink-400">📍</span>
            <span className="text-sm">Location</span>
          </div>
          <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
            <span className="text-pink-400">🎂</span>
            <span className="text-sm">May 27, 1990</span>
          </div>
        </div>
      </div>
      
      {/* Download CV Button */}
      <button className="w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 px-6 rounded-2xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 relative overflow-hidden group">
        {/* Button animation overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <span className="relative z-10">📄 Download CV</span>
      </button>
    </div>
  );
} 