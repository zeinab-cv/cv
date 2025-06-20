import { getThemeClasses } from '../../lib/theme';
import { organizationsData } from '../data/worksData';
import { IconBuildingCommunity } from '@tabler/icons-react';

export default function OrganizationsTab() {
  const theme = getThemeClasses();

  return (
    <div className="space-y-6">
      {organizationsData.map((org, index) => {
        const colorClass = org.color === 'indigo' ? 'text-indigo-300' : 
                           org.color === 'blue' ? 'text-blue-300' :
                           org.color === 'green' ? 'text-green-300' :
                           org.color === 'orange' ? 'text-orange-300' :
                           org.color === 'purple' ? 'text-purple-300' : 'text-pink-300';
        const borderClass = org.color === 'indigo' ? 'border-indigo-300/30 hover:border-indigo-300' : 
                            org.color === 'blue' ? 'border-blue-300/30 hover:border-blue-300' :
                            org.color === 'green' ? 'border-green-300/30 hover:border-green-300' :
                            org.color === 'orange' ? 'border-orange-300/30 hover:border-orange-300' :
                            org.color === 'purple' ? 'border-purple-300/30 hover:border-purple-300' : 'border-pink-300/30 hover:border-pink-300';
        
        return (
          <div 
            key={index} 
            className={`${theme.glassOverlay} rounded-3xl p-8 ${theme.glassShadow}`}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="flex items-center space-x-3 mb-4">
              <IconBuildingCommunity size={24} className={colorClass} />
              <h3 className="text-xl font-semibold text-white">{org.name}</h3>
              <span className={`${colorClass} text-sm`}>{org.role}</span>
            </div>
            
            {org.projects && org.projects.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {org.projects.map((project, projectIndex) => (
                  <div key={projectIndex} className={`border-l-2 ${borderClass} pl-4 hover:bg-white/5 p-3 rounded-r-xl transition-all duration-300`}>
                    <h4 className="font-semibold text-white mb-1">{project.title}</h4>
                    <p className={`${colorClass} text-sm mb-2`}>
                      {project.location && `${project.location} • `}{project.year}
                    </p>
                    <p className="text-white/70 text-sm">{project.about}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
} 