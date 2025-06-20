import { getThemeClasses } from '../lib/theme';
import WorksTabs from './WorksTabs';
import { 
  IconSchool, 
  IconBrain,
  IconWorld,
  IconMail, 
  IconCoffee, 
  IconHeart,
  IconCertificate,
  IconQuote
} from '@tabler/icons-react';

interface TabContentProps {
  activeTab: string;
}

export default function TabContent({ activeTab }: TabContentProps) {
  const theme = getThemeClasses();
  
  const workingSkills = [
    { name: 'Project Coordination', level: 90 },
    { name: 'Social Media Strategy', level: 85 },
    { name: 'Cross-cultural Communication', level: 95 },
    { name: 'Event Management', level: 80 }
  ];
  
  const topicsWorkedWith = [
    'Sustainable Development', 'Peace Education', 'Youth Participation', 
    'Diversity, Equity, Inclusion', 'Non-Formal learning', 'Future Thinking & Civic Imagination',
    'Safe Space principals', 'Media Literacy'
  ];

  const toolsWorkedWith = [
    'Canva', 'WordPress', 'Microsoft Office Suite', 'Adobe Premiere Pro',
    'Google Workspace', 'Zoom', 'Slack', 'Trello',
    'Mailchimp', 'Hootsuite', 'Asana', 'Survey Monkey'
  ];

  const languages = [
    { name: 'English', level: 5, description: 'Professional working proficiency' },
    { name: 'Persian', level: 5, description: 'Native' },
    { name: 'Finnish', level: 2, description: 'A2' }
  ];

  const renderLanguageBalls = (level: number) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((ball) => (
          <div
            key={ball}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              ball <= level 
                ? `${theme.primaryGradient} shadow-sm` 
                : 'bg-white/20 border border-white/30'
            }`}
          />
        ))}
      </div>
    );
  };
  
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-6">
            <div className={`${theme.glassOverlay} rounded-3xl p-8 ${theme.glassShadow} text-center`}>
              <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
              Your past plants the seeds, but your curiosity lets you bloom
              </h1>
              
            </div>
            <div className={`${theme.glassOverlay} rounded-3xl p-8 ${theme.glassShadow} text-center`}>
              <p className="text-white/70 leading-relaxed">
              I&apos;m a project coordinator with a background in anthropology, social development, and peace studies. I work at the intersection of youth engagement, community development, and digital communication, with a passion for inclusive projects, dialogue, and creative collaboration.
              </p>
            </div>
          </div>
        );
        
      case 'resume':
        return (
          <div className="space-y-6">
            {/* Education Section */}
            <div className={`${theme.glassOverlay} rounded-3xl p-8 ${theme.glassShadow}`}>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
                <IconSchool size={24} />
                <span>Education</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-pink-300/60 hover:bg-white/10 hover:shadow-lg transition-all duration-300 flex items-start space-x-3">
                  <IconSchool size={18} className="text-pink-300 mt-1 opacity-80" />
                  <div>
                    <h4 className="font-semibold text-white">M.Sc. in Peace, Mediation and Conflict Research</h4>
                    <p className="text-white/70 text-sm">Tampere University • 2022-2023</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-pink-300/60 hover:bg-white/10 hover:shadow-lg transition-all duration-300 flex items-start space-x-3">
                  <IconSchool size={18} className="text-pink-300 mt-1 opacity-80" />
                  <div>
                    <h4 className="font-semibold text-white">M.A. in Social Development</h4>
                    <p className="text-white/70 text-sm">Tampere University • 2020-2022</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-pink-300/60 hover:bg-white/10 hover:shadow-lg transition-all duration-300 flex items-start space-x-3">
                  <IconSchool size={18} className="text-pink-300 mt-1 opacity-80" />
                  <div>
                    <h4 className="font-semibold text-white">B.A. in Anthropology</h4>
                    <p className="text-white/70 text-sm">University • Iran, Tehran • 2016-2020</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Certificates Section */}
            <div className={`${theme.glassOverlay} rounded-3xl p-8 ${theme.glassShadow}`}>
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
                <IconCertificate size={24} />
                <span>Certificates & Professional Development</span>
              </h3>
              
              <div className="space-y-12">
                {[
                  {
                    category: "Professional Development & Other",
                    gradient: theme.secondaryGradient1,
                    borderColor: "hover:border-green-500/60",
                    iconColor: "text-green-300",
                    certificates: [
                      {
                        name: "Green Digital Skills Certificate",
                        issuer: "INCO Academy",
                        date: "February 2024"
                      },
                      {
                        name: "Dynamic Group Facilitation Skills",
                        issuer: "Udemy",
                        date: "July 2023"
                      },
                      {
                        name: "Future Analyst & Co-creator",
                        issuer: "Demola Global",
                        date: "October 2021"
                      },
                      {
                        name: "Youthpass - Journey into Small-scale Partnerships",
                        issuer: "Las Niñas del Tul",
                        date: "March 2025"
                      }
                    ]
                  },
                  {
                    category: "Digital Marketing & Social Media",
                    gradient: theme.secondaryGradient2,
                    borderColor: "hover:border-orange-300/60",
                    iconColor: "text-orange-300",
                    certificates: [
                      {
                        name: "Digital Marketing Growth Programme 2024",
                        issuer: "",
                        date: "August 2024"
                      },
                      {
                        name: "Social Media Marketing",
                        issuer: "HubSpot Academy",
                        date: "August 2024"
                      },
                      {
                        name: "Fundamentals of Digital Marketing",
                        issuer: "Google Digital Garage",
                        date: "July 2024"
                      },
                      {
                        name: "Semrush SEO Crash Course",
                        issuer: "Brian Dean",
                        date: "July 2024"
                      },
                      {
                        name: "Introduction to Marketing",
                        issuer: "edX Verified Certificate",
                        date: "March 2024"
                      }
                    ]
                  },
                  {
                    category: "IT & Technical Skills",
                    gradient: theme.secondaryGradient3,
                    borderColor: "hover:border-blue-300/60",
                    iconColor: "text-blue-300",
                    certificates: [
                      {
                        name: "Google IT Support Specialization",
                        issuer: "",
                        date: "December 2023"
                      },
                      {
                        name: "IT Security: Defense Against Digital Dark Arts",
                        issuer: "Google",
                        date: "December 2023"
                      },
                      {
                        name: "System Administration & IT Infrastructure",
                        issuer: "Google",
                        date: "December 2023"
                      },
                      {
                        name: "Operating Systems: Becoming a Power User",
                        issuer: "Google",
                        date: "November 2023"
                      },
                      {
                        name: "Computer Networking",
                        issuer: "Google",
                        date: "October 2023"
                      },
                      {
                        name: "Technical Support Fundamentals",
                        issuer: "Coursera",
                        date: "September 2023"
                      }
                    ]
                  }
                  
                ].map((section) => (
                  <div key={section.category}>
                    <h4 className={`text-lg font-semibold text-white mb-3 text-center bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent`}>
                      {section.category}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {section.certificates.map((cert) => (
                        <div key={cert.name} className={`bg-white/5 rounded-xl p-4 border border-white/10 ${section.borderColor} hover:bg-white/10 hover:shadow-lg transition-all duration-300 flex items-start space-x-3`}>
                          <IconCertificate size={18} className={`${section.iconColor} mt-1 opacity-80`} />
                          <div>
                            <h5 className="font-medium text-white text-sm">{cert.name}</h5>
                            <p className="text-white/60 text-xs">
                              {cert.issuer && `${cert.issuer} • `}{cert.date}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
        
      case 'works':
        return (
          <div className="space-y-6">
            <WorksTabs />
          </div>
        );
        
      case 'skills':
        return (
          <div className="space-y-6">
            {/* Working Skills and Language Skills - Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Working Skills */}
              <div className={`${theme.glassOverlay} rounded-3xl p-8 ${theme.glassShadow}`}>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
                  <IconBrain size={24} />
                  <span>Working Skills</span>
                </h3>
                <div className="space-y-4">
                  {workingSkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-white text-sm font-medium">{skill.name}</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div 
                          className={`${theme.primaryGradient} h-2 rounded-full transition-all duration-1000`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Language Skills */}
              <div className={`${theme.glassOverlay} rounded-3xl p-8 ${theme.glassShadow}`}>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
                  <IconWorld size={24} />
                  <span>Language Skills</span>
                </h3>
                <div className="space-y-4">
                  {languages.map((language) => (
                    <div key={language.name} className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-white text-sm font-medium">{language.name}</span>
                        <span className="text-white/70 text-xs">{language.description}</span>
                      </div>
                      {renderLanguageBalls(language.level)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Topics i have worked with */}
            <div className={`${theme.glassOverlay} rounded-3xl p-8 ${theme.glassShadow}`}>
              <h3 className="text-xl font-semibold text-white mb-4">Areas of Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {topicsWorkedWith.map((topic) => (
                  <span 
                    key={topic}
                    className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-300"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
            <div className={`${theme.glassOverlay} rounded-3xl p-8 ${theme.glassShadow}`}>
              <h3 className="text-xl font-semibold text-white mb-4">Tools I use</h3>
              <div className="flex flex-wrap gap-2">
                {toolsWorkedWith.map((topic) => (
                  <span 
                    key={topic}
                    className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-300"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
        
      case 'contact':
        return (
          <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-8 text-center drop-shadow-lg flex items-center justify-center space-x-2">
                <IconQuote size={32} />
                <span>What My Colleagues Say About Me</span>
              </h2>
              
              <div className="space-y-6">
                {/* Testimonial 1 - Joanna Kumpula */}
                <div className={`${theme.glassOverlay} rounded-3xl p-8 ${theme.glassShadow} text-center`}>
                  <div className="flex items-center justify-center mb-4">
                    <IconQuote size={24} className="text-pink-300 opacity-60" />
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed mb-6 italic">
                    &ldquo;Zeinab is a very dedicated and industrious person, with a positive personality. She adapted well to our various tasks and the hectic work schedule, and was proactive in developing the content of her tasks and giving feedback and contributing in several different projects, both internally and with our cooperation partners.&rdquo;
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 ${theme.primaryGradient} rounded-full flex items-center justify-center`}>
                      <span className="text-white font-bold text-sm">JK</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">Joanna Kumpula</h4>
                      <p className="text-white/60 text-xs">Head of International Unit</p>
                      <p className="text-white/60 text-xs">Tampere University</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial 2 - Camilla Ojala */}
                <div className={`${theme.glassOverlay} rounded-3xl p-8 ${theme.glassShadow} text-center`}>
                  <div className="flex items-center justify-center mb-4">
                    <IconQuote size={24} className="text-blue-300 opacity-60" />
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed mb-6 italic">
                    &ldquo;Zeinab was an invaluable member of our team and was always easy to work with. She is a very dedicated worker with great work ethic, and could always be trusted to handle her part of the work exceptionally well.&rdquo;
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 ${theme.secondaryGradient3} rounded-full flex items-center justify-center`}>
                      <span className="text-white font-bold text-sm">CO</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">Camilla Ojala</h4>
                      <p className="text-white/60 text-xs">Association Coordinator for the</p>
                      <p className="text-white/60 text-xs">UN Association of Finland</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial 3 - Ansa Kilpeläinen */}
                <div className={`${theme.glassOverlay} rounded-3xl p-8 ${theme.glassShadow} text-center`}>
                  <div className="flex items-center justify-center mb-4">
                    <IconQuote size={24} className="text-green-300 opacity-60" />
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed mb-6 italic">
                    &ldquo;Zeinab works with full heart and expertise, which I greatly admire. She is responsible, spreads positive energy, and meets people with genuine warmth. Zeinab has excellent project management skills and is a reliable colleague who takes on tasks with courage.&rdquo;
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 ${theme.secondaryGradient1} rounded-full flex items-center justify-center`}>
                      <span className="text-white font-bold text-sm">AK</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">Ansa Kilpeläinen</h4>
                      <p className="text-white/60 text-xs">Officer at</p>
                      <p className="text-white/60 text-xs">Rauhankasvatusinstituutti</p>
                    </div>
                  </div>
                </div>
              </div>

            {/* Contact CTA */}
            <div className={`${theme.glassOverlay} rounded-3xl p-8 ${theme.glassShadow} text-center`}>
              <h3 className="text-xl font-semibold text-white mb-4">Let&apos;s Connect!</h3>
              <p className="text-white/80 mb-6">
                I&apos;m excited about joining a team where I can contribute meaningfully and continue to grow.
              </p>
              <a 
                href="mailto:zeyndanesh@gmail.com"
                className={`inline-flex items-center space-x-2 ${theme.primaryGradient} hover:${theme.primaryGradientHover} text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300`}
              >
                <IconMail size={20} />
                <span>Send Email</span>
              </a>
              <p className="text-white/70 flex items-center justify-center space-x-2 mt-4">
                <IconCoffee size={16} />
                <span>Coffee chats? I&apos;m in</span>
                <IconHeart size={16} className="text-pink-300" />
              </p>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <div className="space-y-6">
      {renderContent()}
    </div>
  );
} 