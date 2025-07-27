'use client';

import { useState } from 'react';
import { getThemeClasses } from '../../lib/theme';
import { organizationsData } from '../data/worksData';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';

// Helper function to extract year for sorting
const getEventYear = (year: string | number): number => {
  if (typeof year === 'number') return year;
  const match = year.toString().match(/(\d{4})/);
  return match ? parseInt(match[1]) : 2024;
};

// Organization color mapping for dots
const getBgColor = (color: string) => {
  const colorName = color.replace('text-', '').replace('-300', '');
  switch(colorName) {
    case 'indigo': return 'bg-indigo-300';
    case 'blue': return 'bg-blue-300';
    case 'green': return 'bg-green-300';
    case 'orange': return 'bg-orange-300';
    case 'purple': return 'bg-purple-300';
    case 'pink': return 'bg-pink-300';
    default: return 'bg-indigo-300';
  }
};

const colorMapping: { [key: string]: { text: string; border: string } } = {
  indigo: { text: 'text-indigo-300', border: 'border-indigo-300/30 hover:border-indigo-300/80' },
  blue: { text: 'text-blue-300', border: 'border-blue-300/30 hover:border-blue-300/80' },
  green: { text: 'text-green-300', border: 'border-green-300/30 hover:border-green-300/80' },
  orange: { text: 'text-orange-300', border: 'border-orange-300/30 hover:border-orange-300/80' },
  purple: { text: 'text-purple-300', border: 'border-purple-300/30 hover:border-purple-300/80' },
  pink: { text: 'text-pink-300', border: 'border-pink-300/30 hover:border-pink-300/80' },
};

export default function OrganizationsTab() {
  const theme = getThemeClasses();
  
  // Flatten all events with organization context first
  const allEvents = organizationsData.flatMap((org, orgIndex) =>
    org.projects.map((project, projectIndex) => ({
      ...project,
      orgName: org.name,
      orgColor: org.color,
      eventYear: getEventYear(project.year),
      uniqueKey: `${orgIndex}-${projectIndex}`
    }))
  ).sort((a, b) => b.eventYear - a.eventYear);

  // Initialize with all events collapsed by default
  const [expandedEvents, setExpandedEvents] = useState<Set<string>>(new Set());

  const toggleExpansion = (eventKey: string) => {
    const newExpanded = new Set(expandedEvents);
    if (newExpanded.has(eventKey)) {
      newExpanded.delete(eventKey);
    } else {
      newExpanded.add(eventKey);
    }
    setExpandedEvents(newExpanded);
  };

  // Group events by year
  const eventsByYear = allEvents.reduce((acc, event) => {
    const year = event.eventYear;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(event);
    return acc;
  }, {} as Record<number, typeof allEvents>);

  const years = Object.keys(eventsByYear).map(Number).sort((a, b) => b - a);

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Timeline Container */}
      <div className="relative">
        {/* Main Timeline Line */}
        <div className="absolute left-24 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white/60 via-white/30 to-white/10 transform -translate-x-0.5"></div>
        
        {years.map((year, yearIndex) => {
          const yearEvents = eventsByYear[year];
          const hasCurrentEvent = yearEvents.some(e => e.year.toString().includes('Present'));
          const isLastYear = yearIndex === years.length - 1;
          // Use the color of the first event in the year for the year header
          const yearColor = colorMapping[yearEvents[0]?.orgColor] || colorMapping.indigo;
          
          return (
            <div key={year} className="relative mb-8">
              {/* Year Header */}
              <div className="relative mb-6">
                <div className="absolute left-0 top-0 w-16 text-right pr-6">
                  <span className={`text-3xl font-bold ${yearColor.text} drop-shadow-lg`}>
                    {year}
                  </span>
                  {hasCurrentEvent && (
                    <div className="text-xs text-white/60 mt-1">Present</div>
                  )}
                </div>
                
                {/* Year marker dot */}
                <div className={`absolute left-24 top-2 w-4 h-4 transform -translate-x-2 rounded-full ${getBgColor(yearColor.text)} shadow-lg z-20`}></div>
              </div>

              {/* Events for this year */}
              <div className="space-y-8">
                {yearEvents.map((event, eventIndex) => {
                  const colors = colorMapping[event.orgColor] || colorMapping.indigo;
                  const isExpanded = expandedEvents.has(event.uniqueKey);
                  const isLastEvent = eventIndex === yearEvents.length - 1;
                  
                  return (
                    <div 
                      key={event.uniqueKey}
                      className="relative"
                      data-aos="fade-up"
                      data-aos-delay={(yearIndex * 200) + (eventIndex * 100)}
                    >
                      {/* Event Timeline Dot - only show if not the first event in the year */}
                      {eventIndex > 0 && (
                        <div className={`absolute left-24 top-4 w-3 h-3 transform -translate-x-1.5 rounded-full ${getBgColor(colors.text)} shadow-lg z-20`}></div>
                      )}

                      {/* Content Card */}
                      <div className="ml-32">
                        <div 
                          className={`${theme.glassOverlay} rounded-2xl p-6 ${theme.glassShadow} border-l-4 ${colors.border} hover:scale-[1.02] transition-all duration-300 group`}
                        >
                          {/* Header */}
                          <div 
                            className="flex items-start justify-between cursor-pointer"
                            onClick={() => toggleExpansion(event.uniqueKey)}
                          >
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-white/90 transition-colors">
                                {event.title}
                              </h3>
                              <div className="flex items-center space-x-2 mb-2">
                                <h4 className={`text-base font-semibold ${colors.text}`}>
                                  {event.orgName}
                                </h4>
                                {event.location && (
                                  <>
                                    <span className="text-white/40">•</span>
                                    <span className="text-white/60 text-sm">{event.location}</span>
                                  </>
                                )}
                              </div>
                            </div>
                            
                            {/* Expand/Collapse Button */}
                            <button 
                              className={`p-2 rounded-full transition-all duration-300 hover:bg-white/10 ${colors.text} ml-4`}
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleExpansion(event.uniqueKey);
                              }}
                            >
                              {isExpanded ? (
                                <IconChevronUp size={18} />
                              ) : (
                                <IconChevronDown size={18} />
                              )}
                            </button>
                          </div>

                          {/* Collapsible Description */}
                          {isExpanded && (
                            <div className="mt-4 pt-4 border-t border-white/10 animate-in slide-in-from-top-2 duration-300">
                              <p className="text-white/70 text-sm leading-relaxed">{event.about}</p>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Connecting line between events in same year */}
                      {!isLastEvent && (
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