import { getThemeClasses } from '../../lib/theme';
import { workingSkills, languages, topicsWorkedWith, toolsWorkedWith } from '../data/tabContentData';
import { IconBrain, IconWorld } from '@tabler/icons-react';
import TypeWriter from '../TypeWriter';

export default function SkillsTab() {
  const theme = getThemeClasses();

  // Emoji mappings for working skills, topics and tools
  const workingSkillEmojis: { [key: string]: string } = {
    'Project Coordination': '📋',
    'Social Media Strategy': '📱',
    'Cross-cultural Communication': '🌍',
    'Event Management': '🎉'
  };

  const topicEmojis: { [key: string]: string } = {
    'Sustainable Development': '🌱',
    'Peace Education': '🕊️',
    'Youth Participation': '👥',
    'Diversity, Equity, Inclusion': '🌈',
    'Non-Formal learning': '📚',
    'Future Thinking & Civic Imagination': '🔮',
    'Safe Space principals': '🛡️',
    'Media Literacy': '📱'
  };

  const toolEmojis: { [key: string]: string } = {
    'Canva': '🎨',
    'WordPress': '📝',
    'Microsoft Office Suite': '💼',
    'Kling AI': '🤖',
    'Google Workspace': '📊',
    'Zoom': '📹',
    'Slack': '💬',
    'Trello': '📋',
    'ElevenLabs': '🎵',
    'Leonardo AI': '🎨',
    'CapCut': '✂️',
    'Meta': '📘'
  };

  const renderLanguageBalls = (level: number) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((ball) => (
          <div
            key={ball}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              ball <= level 
                ? `${theme.primaryGradient} shadow-sm` 
                : 'bg-white/20 border border-white/30'
            }`}
            data-aos="zoom-in"
            data-aos-delay={500+ball * 150}
          />
        ))}
      </div>
    );
      };

  return (
    <div className="space-y-6">
      <h2 
        className="text-3xl font-bold text-white mb-8 text-center drop-shadow-lg flex items-center justify-center space-x-2"
        data-aos="fade-up"
      >
        <TypeWriter 
          text="I'm always trying to upskill myself"
          delay={20}
          speed={40}
        />
      </h2>
      {/* Working Skills and Language Skills - Side by Side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Working Skills */}
        <div 
          className={`${theme.glassOverlay} rounded-3xl p-8 ${theme.glassShadow}`}
          data-aos="fade-up"
        >
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
            <IconBrain size={24} />
            <span>Working Skills</span>
          </h3>
          <div className="space-y-4">
            {workingSkills.map((skill, index) => (
              <div 
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-white text-sm font-medium flex items-center">
                    <span className="mr-2">{workingSkillEmojis[skill.name] || '⚡'}</span>
                    {skill.name}
                  </span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                  <div 
                    className={`${theme.primaryGradient} h-2 rounded-full transition-all duration-1000`}
                    style={{ width: `${skill.level}%` }}
                    data-aos="fade-right"
                    data-aos-delay={300+index * 200}
                    data-aos-duration="1000"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Language Skills */}
        <div 
          className={`${theme.glassOverlay} rounded-3xl p-8 ${theme.glassShadow}`}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
            <IconWorld size={24} />
            <span>Language Skills</span>
          </h3>
          <div className="space-y-4">
            {languages.map((language, index) => (
              <div 
                key={language.name} 
                className="flex items-center justify-between"
                data-aos="fade-up"
                data-aos-delay={100 + index * 100}
              >
                <div className="flex flex-col">
                  <span className="text-white text-sm font-medium">{language.name}</span>
                  <span className="text-white/70 text-xs">{language.description}</span>
                </div>
                {renderLanguageBalls(language.level)}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Topics i have worked with */}
      <div 
        className={`${theme.glassOverlay} rounded-3xl p-8 ${theme.glassShadow}`}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h3 className="text-xl font-semibold text-white mb-4">Areas of Expertise</h3>
        <div className="flex flex-wrap gap-2">
          {topicsWorkedWith.map((topic, index) => (
            <span 
              key={topic}
              className={theme.skillPill2}
              data-aos="fade-up"
              data-aos-delay={200 + index * 50}
            >
              <span className="mr-2">{topicEmojis[topic] || '📌'}</span>
              {topic}
            </span>
          ))}
        </div>
      </div>
      
      <div 
        className={`${theme.glassOverlay} rounded-3xl p-8 ${theme.glassShadow}`}
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <h3 className="text-xl font-semibold text-white mb-4">Tools I use</h3>
        <div className="flex flex-wrap gap-2">
          {toolsWorkedWith.map((tool, index) => (
            <span 
              key={tool}
              className={theme.skillPill2}
              data-aos="fade-up"
              data-aos-delay={300 + index * 50}
            >
              <span className="mr-2">{toolEmojis[tool] || '🔧'}</span>
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
} 