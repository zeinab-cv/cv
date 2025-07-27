'use client';

import { useState } from 'react';
import { getThemeClasses } from '../../lib/theme';
import { workExperienceByOrganization, colorMapping } from '../data/worksData';
import { IconChevronDown, IconChevronUp, IconMapPin } from '@tabler/icons-react';

// Helper function to extract start year from duration string
const getStartYear = (duration: string): number => {
  const match = duration.match(/(\w{3}) (\d{4})/);
  return match ? parseInt(match[2]) : 2025;
};

// Helper function to check if position is current
const isCurrent = (duration: string): boolean => {
  return duration.toLowerCase().includes('present');
};

export default function ExperienceTab() {
  const theme = getThemeClasses();
  const [expandedOrgs, setExpandedOrgs] = useState<Set<string>>(new Set());

  const toggleExpansion = (orgKey: string) => {
    const newExpanded = new Set(expandedOrgs);
    if (newExpanded.has(orgKey)) {
      newExpanded.delete(orgKey);
    } else {
      newExpanded.add(orgKey);
    }
    setExpandedOrgs(newExpanded);
  };

  // Flatten all positions with organization context
  const allPositions = workExperienceByOrganization.flatMap((org, orgIndex) =>
    org.positions.map((position, posIndex) => ({
      ...position,
      organization: org.organization,
      location: org.location,
      color: org.color,
      orgIndex,
      posIndex,
      startYear: getStartYear(position.duration),
      isCurrent: isCurrent(position.duration),
      uniqueKey: `${orgIndex}-${posIndex}`
    }))
  ).sort((a, b) => b.startYear - a.startYear); // Most recent first

  // Group positions by year
  const positionsByYear = allPositions.reduce((acc, position) => {
    const year = position.startYear;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(position);
    return acc;
  }, {} as Record<number, typeof allPositions>);

  // Get sorted years (most recent first)
  const years = Object.keys(positionsByYear).map(Number).sort((a, b) => b - a);

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Timeline Container */}
      <div className="relative">
        {/* Main Timeline Line */}
        <div className="absolute left-24 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white/60 via-white/30 to-white/10 transform -translate-x-0.5"></div>
        
        {years.map((year, yearIndex) => {
          const yearPositions = positionsByYear[year];
          const hasCurrentPosition = yearPositions.some(p => p.isCurrent);
          const isLastYear = yearIndex === years.length - 1;
          // Use the color of the first position in the year for the year header
          const yearColor = colorMapping[yearPositions[0]?.color] || colorMapping.orange;
          
          // Get proper background color for dots
          const getBgColor = (color: string) => {
            const colorName = color.replace('text-', '').replace('-300', '');
            switch(colorName) {
              case 'orange': return 'bg-orange-300';
              case 'blue': return 'bg-blue-300';
              case 'green': return 'bg-green-300';
              case 'pink': return 'bg-pink-300';
              case 'purple': return 'bg-purple-300';
              case 'teal': return 'bg-teal-300';
              default: return 'bg-orange-300';
            }
          };
          
          return (
            <div key={year} className="relative mb-8">
              {/* Year Header */}
              <div className="relative mb-6">
                <div className="absolute left-0 top-0 w-16 text-right pr-6">
                  <span className={`text-3xl font-bold ${yearColor.text} drop-shadow-lg`}>
                    {year}
                  </span>
                  {hasCurrentPosition && (
                    <div className="text-xs text-white/60 mt-1">Present</div>
                  )}
                </div>
                
                {/* Year marker dot */}
                <div className={`absolute left-24 top-2 w-4 h-4 transform -translate-x-2 rounded-full ${getBgColor(yearColor.text)} shadow-lg z-20`}></div>
              </div>

              {/* Positions for this year */}
              <div className="space-y-8">
                {yearPositions.map((position, posIndex) => {
                  const colors = colorMapping[position.color] || colorMapping.orange;
                  const isExpanded = expandedOrgs.has(position.uniqueKey);
                  const isLastPosition = posIndex === yearPositions.length - 1;
                  
                  return (
                    <div 
                      key={position.uniqueKey}
                      className="relative"
                      data-aos="fade-up"
                      data-aos-delay={(yearIndex * 200) + (posIndex * 100)}
                    >
                      {/* Position Timeline Dot - only show if not the first position in the year */}
                      {posIndex > 0 && (
                        <div className={`absolute left-24 top-4 w-3 h-3 transform -translate-x-1.5 rounded-full ${getBgColor(colors.text)} shadow-lg z-20`}></div>
                      )}

                      {/* Content Card */}
                      <div className="ml-32">
                        <div 
                          className={`${theme.glassOverlay} rounded-2xl p-6 ${theme.glassShadow} border-l-4 ${colors.border} hover:scale-[1.02] transition-all duration-300 cursor-pointer group`}
                          onClick={() => toggleExpansion(position.uniqueKey)}
                        >
                          {/* Header */}
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-white/90 transition-colors">
                                {position.worktitle}
                              </h3>
                              <div className="flex items-center space-x-2 mb-2">
                                <h4 className={`text-base font-semibold ${colors.text}`}>
                                  {position.organization}
                                </h4>
                                <IconMapPin size={14} className="text-white/40" />
                                <span className="text-white/60 text-sm">{position.location}</span>
                              </div>
                              <p className="text-white/50 text-sm font-medium mb-3">{position.duration}</p>
                              
                              {/* Always show description for timeline view */}
                              <p className="text-white/70 text-sm leading-relaxed mb-4">{position.description}</p>
                            </div>
                            
                            {/* Expand button (only if has projects) */}
                            {position.projects && position.projects.length > 0 && (
                              <button 
                                className={`p-2 rounded-full transition-all duration-300 hover:bg-white/10 ${colors.text} ml-4`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleExpansion(position.uniqueKey);
                                }}
                              >
                                {isExpanded ? (
                                  <IconChevronUp size={18} />
                                ) : (
                                  <IconChevronDown size={18} />
                                )}
                              </button>
                            )}
                          </div>

                          {/* Projects (Expandable) */}
                          {isExpanded && position.projects && position.projects.length > 0 && (
                            <div className="mt-4 pt-4 border-t border-white/10 animate-in slide-in-from-top-2 duration-300">
                              <h5 className="text-sm font-semibold text-white mb-3 flex items-center space-x-2">
                                <span>Key Projects</span>
                                <div className={`w-4 h-0.5 ${colors.text.replace('text-', 'bg-')}`}></div>
                              </h5>
                              <div className="space-y-3">
                                {position.projects.map((project, projectIndex) => (
                                  <div 
                                    key={projectIndex} 
                                    className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300"
                                  >
                                    <h6 className="font-medium text-white/90 mb-2 text-sm">{project.projectname}</h6>
                                    <p className="text-white/60 text-xs leading-relaxed">{project.projectdescription}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Connecting line between positions in same year */}
                      {!isLastPosition && (
                        <div className="absolute left-24 top-10 w-0.5 h-12 bg-gradient-to-b from-white/15 to-white/10 transform -translate-x-0.5"></div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Connecting line to next year */}
              {!isLastYear && (
                <div className="absolute left-24 -bottom-2 w-0.5 h-10 bg-gradient-to-b from-white/20 to-white/10 transform -translate-x-0.5"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
} 