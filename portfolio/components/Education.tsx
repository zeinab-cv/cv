import { getThemeClasses } from '../lib/theme';

export default function Education() {
  const theme = getThemeClasses();
  
  const education = [
    {
      degree: "M.Sc. in Peace, Mediation and Conflict Research",
      institution: "University"
    },
    {
      degree: "M.A. in Social Development",
      institution: "University"
    },
    {
      degree: "B.A. in Anthropology",
      institution: "University"
    }
  ];

  return (
    <section className={`py-20 px-4 ${theme.sectionBg} relative`}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-blue-500/10"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className={`text-3xl font-bold ${theme.primaryText} mb-12 text-center`}>Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className={`${theme.glassCard} p-8 rounded-2xl ${theme.glassShadow} relative overflow-hidden group hover:scale-[1.02] transition-all duration-300`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Animated border gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-blue-500/30 to-blue-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-[1px] bg-white/10 backdrop-blur-md rounded-2xl"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className={`text-xl font-semibold ${theme.primaryText} mb-2`}>
                  {edu.degree}
                </h3>
                <p className={`${theme.lightText} flex items-center`}>
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-70"></span>
                  {edu.institution}
                </p>
              </div>
              
              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 