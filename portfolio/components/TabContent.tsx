import { getThemeClasses } from '../lib/theme';
import Skills from './Skills';

interface TabContentProps {
  activeTab: string;
}

export default function TabContent({ activeTab }: TabContentProps) {
  const theme = getThemeClasses();
  
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
                Welcome to My Portfolio
              </h1>
              <p className="text-xl text-white/80 mb-8 drop-shadow-sm">
                &ldquo;Your past plants the seeds, but your curiosity lets you bloom&rdquo;
              </p>
              <p className="text-white/70 leading-relaxed">
                I bring a unique blend of academic expertise and practical experience in project coordination, 
                social development, and multicultural engagement. My passion for digital marketing and creative 
                solutions drives me to contribute meaningfully to every team I work with.
              </p>
            </div>
          </div>
        );
        
      case 'resume':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">Resume</h2>
            
            {/* Education Section */}
            <div className={`${theme.glassCard} rounded-2xl p-6`}>
              <h3 className="text-xl font-semibold text-pink-400 mb-4 flex items-center">
                🎓 Education
              </h3>
              <div className="space-y-4">
                <div className="border-l-2 border-pink-400/30 pl-4">
                  <h4 className="font-semibold text-white">M.Sc. in Peace, Mediation and Conflict Research</h4>
                  <p className="text-white/70 text-sm">University • 2022-2023</p>
                </div>
                <div className="border-l-2 border-pink-400/30 pl-4">
                  <h4 className="font-semibold text-white">M.A. in Social Development</h4>
                  <p className="text-white/70 text-sm">University • 2020-2022</p>
                </div>
                <div className="border-l-2 border-pink-400/30 pl-4">
                  <h4 className="font-semibold text-white">B.A. in Anthropology</h4>
                  <p className="text-white/70 text-sm">University • 2016-2020</p>
                </div>
              </div>
            </div>
            
            {/* Experience Section */}
            <div className={`${theme.glassCard} rounded-2xl p-6`}>
              <h3 className="text-xl font-semibold text-purple-400 mb-4 flex items-center">
                💼 Experience
              </h3>
              <div className="space-y-4">
                <div className="border-l-2 border-purple-400/30 pl-4">
                  <h4 className="font-semibold text-white">Project Coordinator</h4>
                  <p className="text-purple-400 text-sm">Osuuskunta 3E • Jan 2023 - Present</p>
                  <p className="text-white/70 text-sm mt-2">Leading role in planning, monitoring and reporting national and international projects.</p>
                </div>
                <div className="border-l-2 border-purple-400/30 pl-4">
                  <h4 className="font-semibold text-white">Social Media & Marketing Team</h4>
                  <p className="text-purple-400 text-sm">Nordic Inclusify ry • Aug 2024 - Present</p>
                  <p className="text-white/70 text-sm mt-2">Managed social media channels, creating engaging content, developing marketing strategy.</p>
                </div>
              </div>
            </div>
            
            {/* Skills Section */}
            <Skills />
          </div>
        );
        
      case 'works':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">My Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`${theme.glassCard} rounded-2xl p-6 hover:scale-105 transition-transform duration-300`}>
                <div className="w-full h-32 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-4xl">🎨</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Social Media Strategy</h3>
                <p className="text-white/70 text-sm">Developed and implemented creative social media campaigns for various organizations.</p>
              </div>
              
              <div className={`${theme.glassCard} rounded-2xl p-6 hover:scale-105 transition-transform duration-300`}>
                <div className="w-full h-32 bg-gradient-to-br from-blue-400/20 to-green-400/20 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-4xl">🤝</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Project Coordination</h3>
                <p className="text-white/70 text-sm">Coordinated multicultural projects and community development initiatives.</p>
              </div>
              
              <div className={`${theme.glassCard} rounded-2xl p-6 hover:scale-105 transition-transform duration-300`}>
                <div className="w-full h-32 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-4xl">📚</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Non-formal Education</h3>
                <p className="text-white/70 text-sm">Designed and facilitated workshops focused on active citizenship and dialogue.</p>
              </div>
              
              <div className={`${theme.glassCard} rounded-2xl p-6 hover:scale-105 transition-transform duration-300`}>
                <div className="w-full h-32 bg-gradient-to-br from-green-400/20 to-teal-400/20 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-4xl">🌍</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Community Development</h3>
                <p className="text-white/70 text-sm">Cultural well-being and community development initiatives across diverse environments.</p>
              </div>
            </div>
          </div>
        );
        
      case 'blogs':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">Blog Posts</h2>
            <div className={`${theme.glassCard} rounded-2xl p-8 text-center`}>
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-white mb-2">Coming Soon</h3>
              <p className="text-white/70">I&apos;m working on some exciting blog posts about project coordination, social development, and digital engagement. Stay tuned!</p>
            </div>
          </div>
        );
        
      case 'contact':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">Get In Touch</h2>
            
            <div className={`${theme.glassCard} rounded-2xl p-8 text-center`}>
              <h3 className="text-xl font-semibold text-white mb-4">Let&apos;s Connect!</h3>
              <p className="text-white/80 mb-6">
                I&apos;m excited about joining a team where I can contribute meaningfully and continue to grow.
              </p>
              
              <div className="space-y-4">
                <a 
                  href="mailto:zeyndanesh@gmail.com"
                  className="block w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
                >
                  📧 Send Email
                </a>
                
                <p className="text-white/70">☕ Coffee chats? I&apos;m in ❤</p>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <div className={`${theme.glassOverlay} rounded-3xl p-8 ${theme.glassShadow} min-h-[600px]`}>
      {renderContent()}
    </div>
  );
} 