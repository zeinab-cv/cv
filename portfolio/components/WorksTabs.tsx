'use client';

import { useState } from 'react';
import { getThemeClasses } from '../lib/theme';
import { 
  IconPalette, 
  IconCalendarEvent,
  IconUsers,
  IconBuildingCommunity,
  IconBriefcase
} from '@tabler/icons-react';

export default function WorksTabs() {
  const [activeTab, setActiveTab] = useState('projects');
  const theme = getThemeClasses();

  const tabs = [
    { id: 'projects', label: 'Experience', icon: IconPalette },
    { id: 'events', label: 'Events i have organized', icon: IconCalendarEvent },
    { id: 'organizations', label: 'Organizations i have involved with', icon: IconUsers }
  ];

  const organizationsData = [
    {
      name: "Osuuskunta 3E",
      role: "Project Coordinator",
      icon: IconBuildingCommunity,
      color: "indigo",
      projects: [
        {
          title: "Speaker Corner: Youth & Online Violence Dialogue Series",
          location: "Tampere & Vaasa, Finland",
          year: "2024",
          about: "A series of open discussions exploring the impact of online violence on young people, featuring youth speakers, community voices, and NGO partners."
        },
        {
          title: "Vendor Training Lab for Magazine Y",
          location: "Vaasa Region",
          year: "2024",
          about: "Designed and facilitated training sessions for youth vendors on communication, pitching, and customer engagement for a multilingual street magazine."
        },
        {
          title: "Youth Media Workshop: Migration Narratives & Digital Literacy",
          location: "",
          year: "2024",
          about: "Co-organized workshops connecting youth in Finland and Germany to explore digital storytelling and tackle misinformation through cross-cultural exchange."
        },
        {
          title: "Youth in Focus: Journalism & Storytelling for Social Impact",
          location: "",
          year: "2023–2024",
          about: "Coordinated inclusive journalism workshops and supported youth in content creation for Magazine Y, aligned with the UN Sustainable Development Goals."
        },
        {
          title: "Community Collaboration Events (Närpes & Oravainen)",
          location: "",
          year: "2023",
          about: "Co-created local events and outreach sessions with Café Albert and Stella Reception Centre to build cross-cultural connection and promote youth media."
        }
      ]
    },
    {
      name: "Nordic Inclusify ry",
      role: "Social Media & Marketing Team",
      icon: IconUsers,
      color: "pink",
      projects: [],
      description: "Social Media & Marketing Team member, developing inclusive marketing strategies and content for promoting diversity and inclusion across Nordic communities."
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'projects':
        return (
          <div className={`${theme.glassOverlay} rounded-3xl p-8 ${theme.glassShadow}`}>
            <div className="min-h-[400px] space-y-4">
              <div className="border-l-2 border-purple-400/30 pl-4 hover:bg-white/5 p-4 rounded-r-xl transition-all duration-300">
                <div className="flex items-center space-x-3 mb-2">
                  <IconBriefcase size={20} className="text-purple-400" />
                  <h4 className="font-semibold text-white">Project Coordinator</h4>
                </div>
                <p className="text-purple-400 text-sm mb-2">Osuuskunta 3E • Jan 2023 - Present</p>
                <p className="text-white/70 text-sm">Leading role in planning, monitoring and reporting national and international projects.</p>
              </div>
              
              <div className="border-l-2 border-purple-400/30 pl-4 hover:bg-white/5 p-4 rounded-r-xl transition-all duration-300">
                <div className="flex items-center space-x-3 mb-2">
                  <IconPalette size={20} className="text-purple-400" />
                  <h4 className="font-semibold text-white">Social Media & Marketing Team</h4>
                </div>
                <p className="text-purple-400 text-sm mb-2">Nordic Inclusify ry • Aug 2024 - Present</p>
                <p className="text-white/70 text-sm">Managed social media channels, creating engaging content, developing marketing strategy.</p>
              </div>
            </div>
          </div>
        );

      case 'events':
        return (
          <div className={`${theme.glassOverlay} rounded-3xl p-8 ${theme.glassShadow}`}>
            <div className="min-h-[400px] grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                <div className="w-full h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-xl mb-4 flex items-center justify-center">
                  <IconCalendarEvent size={48} className="text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Community Workshops</h3>
                <p className="text-white/70 text-sm">Organized and facilitated workshops on active citizenship and community engagement.</p>
              </div>
              
              <div className="rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                <div className="w-full h-32 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-xl mb-4 flex items-center justify-center">
                  <IconBuildingCommunity size={48} className="text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Cultural Events</h3>
                <p className="text-white/70 text-sm">Hosted multicultural events promoting dialogue and understanding between communities.</p>
              </div>
              
              <div className="rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                <div className="w-full h-32 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-xl mb-4 flex items-center justify-center">
                  <IconUsers size={48} className="text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Networking Events</h3>
                <p className="text-white/70 text-sm">Organized professional networking events connecting diverse professionals and organizations.</p>
              </div>
            </div>
          </div>
        );

      case 'organizations':
        return (
          <div className="space-y-6">
            {organizationsData.map((org, index) => {
              const IconComponent = org.icon;
              const colorClass = org.color === 'indigo' ? 'text-indigo-400' : 'text-pink-400';
              const borderClass = org.color === 'indigo' ? 'border-indigo-400/30' : 'border-pink-400/30';
              
              return (
                <div key={index} className={`${theme.glassOverlay} rounded-3xl p-8 ${theme.glassShadow}`}>
                  <div className="flex items-center space-x-3 mb-4">
                    <IconComponent size={24} className={colorClass} />
                    <h3 className="text-xl font-semibold text-white">{org.name}</h3>
                    <span className={`${colorClass} text-sm`}>{org.role}</span>
                  </div>
                  
                  {org.projects && org.projects.length > 0 ? (
                    <div className="space-y-4">
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
                  ) : (
                    <p className="text-white/70 pl-4">{org.description}</p>
                  )}
                </div>
              );
            })}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className={`${theme.glassOverlay} rounded-3xl p-6 ${theme.glassShadow}`}>
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
              >
                <IconComponent size={18} />
                <span className="text-sm">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
} 