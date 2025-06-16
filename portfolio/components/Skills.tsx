import { getThemeClasses } from '../lib/theme';

export default function Skills() {
  const theme = getThemeClasses();
  
  const skills = [
    "Project Coordination",
    "Cross-cultural Communication", 
    "Social Media Strategy",
    "Event Management",
    "Microsoft Office",
    "WordPress",
    "Canva",
    "Video Editing"
  ];

  return (
    <section className={`py-20 px-4 ${theme.sectionAltBg} relative`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-blue-300/10 rounded-full blur-lg animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className={`text-3xl font-bold ${theme.whiteText} mb-12 text-center drop-shadow-lg`}>Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill} 
              className={`${theme.skillCard} p-6 rounded-xl ${theme.glassShadow} text-center group cursor-pointer transform hover:scale-105 hover:-translate-y-1`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Inner glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <span className={`${theme.whiteText} font-medium relative z-10 drop-shadow-sm`}>
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 