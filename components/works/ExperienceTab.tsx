import { getThemeClasses } from '../../lib/theme';
import { workExperienceByOrganization, colorMapping } from '../data/worksData';
import { IconBriefcase } from '@tabler/icons-react';

export default function ExperienceTab() {
  const theme = getThemeClasses();

  return (
    <div className="space-y-6">
      {workExperienceByOrganization.map((org, orgIndex) => {
        const colors = colorMapping[org.color] || colorMapping.orange;
        return (
          <div 
            key={orgIndex} 
            className={`${theme.glassOverlay} rounded-3xl p-8 ${theme.glassShadow}`}
            data-aos="fade-up"
            data-aos-delay={orgIndex * 100}
          >
            <div className="flex items-start space-x-3 mb-6">
              <IconBriefcase size={24} className={`${colors.text} mt-1`} />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-1">{org.organization}</h3>
                <p className="text-white/60 text-sm mb-4">{org.location}</p>
                
                {/* Multiple positions within the organization */}
                <div className="space-y-6">
                  {org.positions.map((position, positionIndex) => (
                    <div key={positionIndex} className={`border-l-3 ${colors.border} pl-4 transition-all duration-300`}>
                      <h4 className="text-lg font-semibold text-white mb-1">{position.worktitle}</h4>
                      <p className={`${colors.text} text-sm mb-1 font-semibold`}>{position.duration}</p>
                      <p className="text-white/70 text-sm mb-4">{position.description}</p>
                      
                      {position.projects && position.projects.length > 0 && (
                        <div className="space-y-3">
                          <h5 className="text-base font-medium text-white">Projects:</h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {position.projects.map((project, projectIndex) => (
                              <div key={projectIndex} className={`border-l-2 ${colors.border} pl-4 hover:bg-white/5 p-3 rounded-r-xl transition-all duration-300`}>
                                <h6 className="font-medium text-white/90 mb-1">{project.projectname}</h6>
                                <p className="text-white/60 text-sm">{project.projectdescription}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
} 