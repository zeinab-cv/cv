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
    { id: 'events', label: 'Organizations i have involved with', icon: IconCalendarEvent },
    { id: 'organizations', label: 'Events i have organized', icon: IconUsers }
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
          organization: "Osuuskunta 3E",
          location: "Tampere & Vaasa, Finland",
          year: 2024,
          about: "A series of open discussions exploring the impact of online violence on young people, featuring youth speakers, community voices, and NGO partners."
        },
        {
          title: "Vendor Training Lab for Magazine Y",
          organization: "Osuuskunta 3E",
          location: "Vaasa Region",
          year: 2024,
          about: "Designed and facilitated training sessions for youth vendors on communication, pitching, and customer engagement for a multilingual street magazine."
        },
        {
          title: "Youth Media Workshop: Migration Narratives & Digital Literacy",
          organization: "Osuuskunta 3E",
          year: 2024,
          about: "Co-organized workshops connecting youth in Finland and Germany to explore digital storytelling and tackle misinformation through cross-cultural exchange."
        },
        {
          title: "Youth in Focus: Journalism & Storytelling for Social Impact",
          organization: "Osuuskunta 3E",
          year: "2023–2024",
          about: "Coordinated inclusive journalism workshops and supported youth in content creation for Magazine Y, aligned with the UN Sustainable Development Goals."
        },
        {
          title: "Community Collaboration Events (Närpes & Oravainen)",
          organization: "Osuuskunta 3E",
          year: 2023,
          about: "Co-created local events and outreach sessions with Café Albert and Stella Reception Centre to build cross-cultural connection and promote youth media."
        }
      ]
    },
    {
      name: "The Peace Education Institute (Rauhankasvatusinstituutti)",
      role: "Workshop Facilitator",
      icon: IconBuildingCommunity,
      color: "blue",
      projects: [
        {
          title: "Anti-Hate Speech & Peace Education Workshops Across the Nordics",
          organization: "The Peace Education Institute (Rauhankasvatusinstituutti)",
          year: 2024,
          about: "Designed and facilitated workshops on peace education and dialogue as part of the Nordic Youth Network Against Hate Speech (funded by Norden 0–30). Included participant recruitment for study visits to Iceland and Utøya, Norway."
        }
      ]
    },
    {
      name: "UN Youth of Finland",
      role: "Workshop Leader",
      icon: IconBuildingCommunity,
      color: "green",
      projects: [
        {
          title: "No Hate Speech: Youth Dialogue & Workshop Series",
          organization: "UN Youth of Finland",
          year: 2023,
          about: "Led workshops addressing hate speech using empathy mapping and backcasting tools. Partnered with Norway’s Stopp Hatprat and coordinated a study visit to Vienna to engage with international peace institutions, including the UN, OSCE, and EU Delegation."
        },
        {
          title: "World Village Festival – Youth Advocacy for SDGs",
          organization: "UN Youth of Finland (with UN Association of Finland)",
          year: 2022,
          about: "Contributed to organizing and coordinating UN Youth’s presence at World Village Festival in Helsinki. Engaged the public in discussions around sustainable development, peace, and youth empowerment."
        }
      ]
    },
    {
      name: "Symbiosis Tampere",
      role: "Event Coordinator",
      icon: IconBuildingCommunity,
      color: "orange",
      projects: [
        {
          title: "Clean Air Project – Community Engagement Event",
          organization: "Symbiosis Tampere",
          year: 2022,
          about: "Coordinated a multi-part event promoting clean air awareness and environmental responsibility, funded by Social Change Nest Impact. Managed logistics, led execution, and developed content for outreach and workshops."
        },
        {
          title: "Employability Pathways for International Students",
          organization: "Symbiosis Tampere",
          year: "2022–2023",
          about: "Co-organized stakeholder workshops as part of the International Employability Landscape project. Brought together university and master’s program staff to discuss improving job market access for international students in Tampere."
        }
      ]
    },
    {
      name: "Tampere University",
      role: "Event Organizer",
      icon: IconBuildingCommunity,
      color: "purple",
      projects: [
        {
          title: "Welcome Week & Study & Stay Showcase",
          organization: "Tampere University",
          year: 2022,
          about: "Organized and represented key university initiatives for international students during Welcome Week. Managed event stands, created digital content, coordinated Guidebook app updates, and facilitated peer engagement through tutoring meetups and storytelling sessions. Participated in the “Study & Stay” employability project and provided strategic feedback from an international student perspective."
        }
      ]
    },
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
        const additionalOrganizations = [
          {
            "name": "Osuuskunta 3E",
            "description": "Cooperative promoting sustainable entrepreneurship and education",
            "website": "https://www.cooperative3e.com/",
            "color": "emerald"
          },
          {
            "name": "Rauhankasvatusinstituutti", 
            "description": "Institute focused on peace education and justice",
            "website": "https://rauhankasvatus.fi/",
            "color": "blue"
          },
          {
            "name": "Symbiosis Tampere",
            "description": "Supports multiculturalism and immigrant integration",
            "website": "https://www.linkedin.com/company/symbiosistampere/?originalSubdomain=fi",
            "color": "teal"
          },
          {
            "name": "Tampere University",
            "description": "Public university offering research and higher education",
            "website": "https://www.tuni.fi/",
            "color": "purple"
          },
          {
            "name": "Women 4 Cyber",
            "description": "Promotes women's roles in cybersecurity field",
            "website": "https://www.women4cyberfinland.com/",
            "color": "pink"
          },
          {
            "name": "FiNGO",
            "description": "Umbrella group for Finnish development NGOs",
            "website": "https://www.fingo.fi/",
            "color": "cyan"
          },
          {
            "name": "UN Youth of Finland",
            "description": "Engages youth in UN-related activities",
            "website": "https://yknuoret.fi/en/",
            "color": "blue"
          },
          {
            "name": "Nordic Inclusify ry",
            "description": "Advances diversity and inclusion in society",
            "website": "https://www.linkedin.com/company/nordic-inclusify/?originalSubdomain=fi",
            "color": "teal"
          },
          {
            "name": "International House Tampere",
            "description": "Helps internationals settle and find services",
            "website": "https://internationalhouse.tampere.fi/",
            "color": "emerald"
          }
        ]
        ;

        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalOrganizations.map((org, index) => {
              const colorClass = org.color === 'pink' ? 'text-pink-400' :
                                 org.color === 'cyan' ? 'text-cyan-400' :
                                 org.color === 'teal' ? 'text-teal-400' :
                                 org.color === 'emerald' ? 'text-emerald-400' : 'text-blue-400';
              
              return (
                <div key={index} className={`${theme.glassOverlay} rounded-3xl p-8 ${theme.glassShadow}`}>
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

      case 'organizations':
        return (
          <div className="space-y-6">
            {organizationsData.map((org, index) => {
              const IconComponent = org.icon;
              const colorClass = org.color === 'indigo' ? 'text-indigo-400' : 
                                 org.color === 'blue' ? 'text-blue-400' :
                                 org.color === 'green' ? 'text-green-400' :
                                 org.color === 'orange' ? 'text-orange-400' :
                                 org.color === 'purple' ? 'text-purple-400' : 'text-pink-400';
              const borderClass = org.color === 'indigo' ? 'border-indigo-400/30' : 
                                  org.color === 'blue' ? 'border-blue-400/30' :
                                  org.color === 'green' ? 'border-green-400/30' :
                                  org.color === 'orange' ? 'border-orange-400/30' :
                                  org.color === 'purple' ? 'border-purple-400/30' : 'border-pink-400/30';
              
              return (
                <div key={index} className={`${theme.glassOverlay} rounded-3xl p-8 ${theme.glassShadow}`}>
                  <div className="flex items-center space-x-3 mb-4">
                    <IconComponent size={24} className={colorClass} />
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