import { getThemeClasses } from '../../lib/theme';
import { eventsData } from '../data/worksData';
import { IconBuildingCommunity } from '@tabler/icons-react';

export default function EventsTab() {
  const theme = getThemeClasses();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {eventsData.map((org, index) => {
        const colorClass = org.color === 'pink' ? 'text-pink-300' :
                           org.color === 'cyan' ? 'text-cyan-300' :
                           org.color === 'teal' ? 'text-teal-300' :
                           org.color === 'emerald' ? 'text-emerald-300' : 'text-blue-300';
        const borderClass = org.color === 'pink' ? 'hover:border-pink-300/60' :
                            org.color === 'cyan' ? 'hover:border-cyan-300/60' :
                            org.color === 'teal' ? 'hover:border-teal-300/60' :
                            org.color === 'emerald' ? 'hover:border-emerald-300/60' : 'hover:border-blue-300/60';
        
        return (
          <div 
            key={index} 
            className={`${theme.glassOverlay} rounded-3xl p-8 ${theme.glassShadow} border-2 border-transparent ${borderClass} hover:shadow-xl transition-all duration-300`}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="flex items-center space-x-3 mb-4">
              <IconBuildingCommunity size={24} className={colorClass} />
              <h3 className="text-xl font-semibold text-white">{org.name}</h3>
            </div>
            
            <div className="pl-4">
              <p className="text-white/70 text-sm mb-3">{org.description}</p>
              <a 
                href={org.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${colorClass} text-sm hover:underline transition-colors duration-300`}
              >
                Visit Website →
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
} 