import { getThemeClasses } from '../../lib/theme';
import { educationData, certificatesData } from '../data/tabContentData';
import { IconSchool, IconCertificate } from '@tabler/icons-react';
import TypeWriter from '../TypeWriter';

export default function EducationTab() {
  const theme = getThemeClasses();

  return (
    <div className="space-y-6">
      {/* MARK: Education Section */}
      <h2 
        className="text-3xl font-bold text-white mb-8 text-center drop-shadow-lg flex items-center justify-center space-x-2"
        data-aos="fade-up"
      >
        <TypeWriter 
          text="A look at what I’ve studied over the years"
          delay={20}
          speed={40}
        />
      </h2>
      <div 
        className={`${theme.glassOverlay} rounded-3xl p-8 ${theme.glassShadow}`}
        data-aos="fade-up"
      >
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
          <IconSchool size={24} />
          <span>Education</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {educationData.map((education, index) => ( // Map through educationData
            <div 
              key={index}
              className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-pink-300/60 hover:bg-white/10 hover:shadow-lg transition-all duration-300 flex items-start space-x-3"
            >
              <IconSchool size={18} className="text-pink-300 mt-1 opacity-80" />
              <div>
                <h4 className="font-semibold text-white">{education.degree}</h4>
                <p className="text-white/70 text-sm">{education.institution} • {education.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*MARK: Certificates Section */}
      <div 
        className={`${theme.glassOverlay} rounded-3xl p-8 ${theme.glassShadow}`}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h3 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
          <IconCertificate size={24} />
          <span>Certificates & Professional Development</span>
        </h3>
        
        <div className="space-y-12">
          {certificatesData.map((section, sectionIndex) => (
            <div key={section.category}>
              <h4 className={`text-lg font-semibold text-white mb-3 text-center bg-gradient-to-r ${theme[section.gradient as keyof typeof theme]} bg-clip-text text-transparent`}>
                {section.category}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {section.certificates.map((cert, certIndex) => (
                  <div 
                    key={cert.name} 
                    className={`bg-white/5 rounded-xl p-4 border border-white/10 ${section.borderColor} hover:bg-white/10 hover:shadow-lg transition-all duration-300 flex items-start space-x-3`}
                    data-aos="fade-up"
                    data-aos-delay={sectionIndex * 200 + certIndex * 50}
                  >
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
} 