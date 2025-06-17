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
        const workExperienceByOrganization = [
          {
            "organization": "Nordic Inclusify ry",
            "location": "Helsinki, Uusimaa, Finland",
            "positions": [
              {
                "worktitle": "Board Member | Marketing & Social Media Team",
                "duration": "Aug 2024 – Present · 11 mos",
                "description": "Drive DEI initiatives by organizing events and leading marketing-social media, building stakeholder partnerships for community engagement and advocacy.",
                "projects": []
              }
            ]
          },
          {
            "organization": "Cooperative 3E",
            "location": "Vaasa, Ostrobothnia, Finland",
            "positions": [
              {
                "worktitle": "Coordinator, Youth Engagement & Administration",
                "duration": "Mar 2024 – Present · 1 yr 4 mos",
                "description": "Develops and oversees youth-focused projects, events, and workshops at national and international levels, ensuring inclusive participation.",
                "projects": [
                  {
                    "projectname": "Youth for Non-Violent Behavior on Digital Media",
                    "projectdescription": "Organises Speaker Corner events on online violence, securing speakers, partnering with cities and NGOs, running workshops, and documenting outcomes."
                  },
                  {
                    "projectname": "Magazine Y's Vendors",
                    "projectdescription": "Recruits and trains cultural-magazine vendors, designing sessions on product knowledge, pitching, and handling objections."
                  }
                ]
              },
              {
                "worktitle": "Project Officer",
                "duration": "Jan 2023 – Present · 2 yrs 6 mos",
                "description": "Empowers marginalized youth to publish multilingual media and Magazine Y, coordinating workshops, video production, and partnerships.",
                "projects": [
                  {
                    "projectname": "Youth in Focus – Multilingual Youth Media Project",
                    "projectdescription": "Guides youth in storytelling on global issues, supports Magazine Y publication, and fosters inclusive society."
                  },
                  {
                    "projectname": "Digital Storytelling for Active Citizenship",
                    "projectdescription": "Connects German and Finnish youth to craft migration narratives, combat misinformation, and strengthen media skills."
                  }
                ]
              }
            ]
          },
          {
            "organization": "Rauhankasvatusinstituutti – The Peace Education Institute",
            "location": "Helsinki, Uusimaa, Finland / Finland (Hybrid)",
            "positions": [
              {
                "worktitle": "Steering Group Member",
                "duration": "Dec 2023 – Sep 2024 · 10 mos",
                "description": "Organised peace-education workshops and launched Nordic youth network, leading content creation and partnerships against hate speech.",
                "projects": [
                  {
                    "projectname": "Nordic Youth Network Against Hate Speech",
                    "projectdescription": "Builds cross-Nordic collaboration, manages workshops, study visits, Instagram presence, and youth engagement to counter hate speech."
                  }
                ]
              },
              
            ]
          },
          {
            "organization": "UN Youth of Finland",
            "location": "Helsinki, Uusimaa, Finland / Hybrid",
            "positions": [
              {
                "worktitle": "International Affairs Coordinator",
                "duration": "Jan 2023 – Dec 2023 · 1 yr",
                "description": "Organized No Hate Speech event, Vienna study visit, and partnerships, expanding youth engagement in international policy.",
                "projects": [
                  {
                    "projectname": "No Hate Speech Event & Vienna Study Visit",
                    "projectdescription": "Coordinated event and excursion connecting youth with key international organizations and anti-hate partners."
                  }
                ]
              },
              {
                "worktitle": "Communication Coordinator",
                "duration": "Jan 2022 – Dec 2022 · 1 yr",
                "description": "Managed social-media campaigns and partnerships, raising awareness of UN goals and peace initiatives among Finnish youth.",
                "projects": [
                  {
                    "projectname": "Youth Peace Week Campaign",
                    "projectdescription": "Designed Instagram feeds and activities with UN Association of Finland to promote SDGs and peace."
                  }
                ]
              }
            ]
          },
          {
            "organization": "Girls in Marketing",
            "location": "Liverpool, England, United Kingdom (Remote)",
            "positions": [
              {
                "worktitle": "Digital Marketing Trainee – Virtual Training Program",
                "duration": "Sep 2024 – Sep 2024 · 1 mo",
                "description": "Completed intensive three-day program with Semrush, Adobe, and RISER, gaining practical skills in content, social media, and analytics.",
                "projects": []
              }
            ]
          },
          {
            "organization": "Women4Cyber Finland",
            "location": "Finland (Remote)",
            "positions": [
              {
                "worktitle": "Social Media Team Member",
                "duration": "Jan 2024 – Aug 2024 · 8 mos",
                "description": "Produced social content and coordinated job-seeking campaign, linking experts with aspiring cybersecurity professionals.",
                "projects": [
                  {
                    "projectname": "Cybersecurity Job-Seeking Campaign",
                    "projectdescription": "Collected industry advice and increased social-media engagement to support entry-level job seekers."
                  }
                ]
              }
            ]
          },
          {
            "organization": "Symbiosis Tampere",
            "location": "Tampere, Pirkanmaa, Finland",
            "positions": [
              {
                "worktitle": "Data Analyst & Workshop Coordinator",
                "duration": "Nov 2022 – Jan 2023 · 3 mos",
                "description": "Analyzed employability data and organized workshops to support international students' transition into Tampere's job market.",
                "projects": [
                  {
                    "projectname": "International Employability Landscape",
                    "projectdescription": "Surveyed students, produced analytical reports, and facilitated knowledge-sharing workshops."
                  },
                  {
                    "projectname": "Clean Air Project",
                    "projectdescription": "Coordinated campaign funded by Social Change Nest Impact to raise air-quality awareness."
                  }
                ]
              }
            ]
          },
          {
            "organization": "Tampere University",
            "location": "Tampere, Pirkanmaa, Finland",
            "positions": [
              {
                "worktitle": "Intern – International Education & Integration",
                "duration": "May 2022 – Oct 2022 · 6 mos",
                "description": "Supported Guidebook app, events, and employability project, improving services for international students.",
                "projects": [
                  {
                    "projectname": "Guidebook App Content Coordination",
                    "projectdescription": "Curated content and managed tutor communications for international-student guide."
                  },
                  {
                    "projectname": "Study & Stay Employability Project",
                    "projectdescription": "Collaborated with International Tampere House to enhance student employability initiatives."
                  }
                ]
              }
            ]
          }
        ];

        return (
          <div className="space-y-6">
            {workExperienceByOrganization.map((org, orgIndex) => (
              <div key={orgIndex} className={`${theme.glassOverlay} rounded-3xl p-8 ${theme.glassShadow}`}>
                <div className="flex items-start space-x-3 mb-6">
                  <IconBriefcase size={24} className="text-blue-600 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1">{org.organization}</h3>
                    <p className="text-white/60 text-sm mb-4">{org.location}</p>
                    
                    {/* Multiple positions within the organization */}
                    <div className="space-y-6">
                      {org.positions.map((position, positionIndex) => (
                        <div key={positionIndex} className="border-l-2 border-blue-700/30 pl-4">
                          <h4 className="text-lg font-semibold text-white mb-1">{position.worktitle}</h4>
                          <p className="text-blue-700 text-sm mb-1">{position.duration}</p>
                          <p className="text-white/70 text-sm mb-4">{position.description}</p>
                          
                          {position.projects && position.projects.length > 0 && (
                            <div className="space-y-3">
                              <h5 className="text-base font-medium text-white">Key Projects:</h5>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {position.projects.map((project, projectIndex) => (
                                  <div key={projectIndex} className="border-l-2 border-blue-700/20 pl-4 hover:bg-white/5 p-3 rounded-r-xl transition-all duration-300">
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
            ))}
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