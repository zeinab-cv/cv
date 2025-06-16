import { getThemeClasses } from '../lib/theme';
import WorksTabs from './WorksTabs';
import { 
  IconSchool, 
  IconBriefcase, 
  IconBrain,
  IconWorld,
  IconMail, 
  IconCoffee, 
  IconHeart 
} from '@tabler/icons-react';

interface TabContentProps {
  activeTab: string;
}

export default function TabContent({ activeTab }: TabContentProps) {
  const theme = getThemeClasses();
  
  const workingSkills = [
    { name: 'Project Coordination', level: 90 },
    { name: 'Social Media Strategy', level: 85 },
    { name: 'Cross-cultural Communication', level: 95 },
    { name: 'Event Management', level: 80 }
  ];
  
  const knowledges = [
    'Digital Marketing', 'Content Creation', 'WordPress', 'Canva',
    'Microsoft Office', 'Video Editing', 'Community Engagement', 'Multicultural Teams'
  ];

  const languages = [
    { name: 'English', level: 5 },
    { name: 'Persian', level: 5 },
    { name: 'Finnish', level: 2 }
  ];

  const renderLanguageBalls = (level: number) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((ball) => (
          <div
            key={ball}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              ball <= level 
                ? 'bg-gradient-to-r from-blue-400 to-purple-500 shadow-sm' 
                : 'bg-white/20 border border-white/30'
            }`}
          />
        ))}
      </div>
    );
  };
  
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
            <div className="rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
                <IconSchool size={24} />
                <span>Education</span>
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
            <div className="rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
                <IconBriefcase size={24} />
                <span>Experience</span>
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
          </div>
        );
        
      case 'works':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">My Works</h2>
            <WorksTabs />
          </div>
        );
        
      case 'skills':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">Skills & Expertise</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Working Skills */}
              <div className="rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
                  <IconBrain size={24} />
                  <span>Working Skills</span>
                </h3>
                <div className="space-y-4">
                  {workingSkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-white text-sm font-medium">{skill.name}</span>
                        <span className="text-white/70 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Language Skills */}
              <div className="rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
                  <IconWorld size={24} />
                  <span>Language Skills</span>
                </h3>
                <div className="space-y-4">
                  {languages.map((language) => (
                    <div key={language.name} className="flex items-center justify-between">
                      <span className="text-white text-sm font-medium">{language.name}</span>
                      {renderLanguageBalls(language.level)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Knowledge Tags */}
            <div className="rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Knowledge & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {knowledges.map((knowledge) => (
                  <span 
                    key={knowledge}
                    className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-300"
                  >
                    {knowledge}
                  </span>
                ))}
              </div>
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
                  className="inline-flex items-center space-x-2 w-full justify-center bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
                >
                  <IconMail size={20} />
                  <span>Send Email</span>
                </a>
                
                <p className="text-white/70 flex items-center justify-center space-x-2">
                  <IconCoffee size={16} />
                  <span>Coffee chats? I&apos;m in</span>
                  <IconHeart size={16} className="text-pink-400" />
                </p>
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