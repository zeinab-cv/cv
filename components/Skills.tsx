import { getThemeClasses } from '../lib/theme';

export default function Skills() {
  const theme = getThemeClasses();
  
  const workingSkills = [
    { name: 'Project Coordination', level: 90 },
    { name: 'Social Media Strategy', level: 85 },
    { name: 'Cross-cultural Communication', level: 95 },
    { name: 'Event Management', level: 80 }
  ];
  
  const knowledges = [
    'Digital Marketing', 'Content Creation',
     'Community Engagement', 'Multicultural Teams'
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Working Skills */}
      <div className="rounded-2xl p-6">
        <h3 className="text-xl font-semibold text-blue-400 mb-4">Working Skills</h3>
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
      
      {/* Knowledge Tags */}
      <div className="rounded-2xl p-6">
        <h3 className="text-xl font-semibold text-green-400 mb-4">Knowledge</h3>
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
} 