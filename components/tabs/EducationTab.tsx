import { getThemeClasses } from '../../lib/theme';
import { educationData, certificatesData } from '../data/tabContentData';
import { IconSchool, IconCertificate } from '@tabler/icons-react';
import TypeWriter from '../TypeWriter';

export default function EducationTab() {
  const theme = getThemeClasses();

  return (
    <div className="space-y-6">
      {/* MARK: Header */}
      <h2 
        className="text-3xl font-bold text-white mb-8 text-center drop-shadow-lg flex items-center justify-center space-x-2"
        data-aos="fade-up"
      >
        <TypeWriter 
          text="A look at what I've studied over the years"
          delay={20}
          speed={40}
        />
      </h2>

      {/* MARK: Degree Cards Section */}
      <div 
        className={`${theme.glassOverlay} rounded-3xl p-8 ${theme.glassShadow} relative overflow-hidden`}
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="600"
      >
        {/* Subtle background decoration */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-pink-400/20 rounded-full animate-float"></div>
        <div className="absolute bottom-4 left-4 w-6 h-6 bg-purple-400/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        
        {/* Header */}
        <h3 
          className="text-2xl font-bold text-white mb-6 text-center drop-shadow-lg"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="500"
        >
          My Academic Journey
        </h3>

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 - Master's in Peace Studies */}
          <div 
            className="group relative bg-gradient-to-br from-blue-500/20 to-blue-600/30 hover:from-blue-500/40 hover:to-blue-600/50 rounded-3xl p-6 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer aspect-square flex flex-col items-center justify-center"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="500"
          >
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🎓</div>
            <h3 className="text-lg font-bold text-white mb-2 text-center group-hover:opacity-0 transition-opacity duration-300">
              M.Sc. Peace Studies
            </h3>
            
            {/* Hover Description */}
            <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-black/30 rounded-3xl"></div>
              <p className="relative text-white text-sm font-semibold text-center leading-relaxed">
                Peace, Mediation and Conflict Research at Tampere University (2020-2023)
              </p>
            </div>
          </div>

          {/* Card 2 - Master's in Social Development */}
          <div 
            className="group relative bg-gradient-to-br from-green-500/20 to-green-600/30 hover:from-green-500/40 hover:to-green-600/50 rounded-3xl p-6 border border-green-400/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 cursor-pointer aspect-square flex flex-col items-center justify-center"
            data-aos="fade-up"
            data-aos-delay="800"
            data-aos-duration="500"
          >
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🎓</div>
            <h3 className="text-lg font-bold text-white mb-2 text-center group-hover:opacity-0 transition-opacity duration-300">
              M.A. Social Development
            </h3>
            
            {/* Hover Description */}
            <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-black/30 rounded-3xl"></div>
              <p className="relative text-white text-sm font-semibold text-center leading-relaxed">
                Social Development at University of Tehran, Iran (2012-2015)
              </p>
            </div>
          </div>

          {/* Card 3 - Bachelor's in Anthropology */}
          <div 
            className="group relative bg-gradient-to-br from-amber-500/20 to-amber-600/30 hover:from-amber-500/40 hover:to-amber-600/50 rounded-3xl p-6 border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/20 cursor-pointer aspect-square flex flex-col items-center justify-center"
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-duration="500"
          >
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🎓</div>
            <h3 className="text-lg font-bold text-white mb-2 text-center group-hover:opacity-0 transition-opacity duration-300">
              B.A. in Anthropology
            </h3>
            
            {/* Hover Description */}
            <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-black/30 rounded-3xl"></div>
              <p className="relative text-white text-sm font-semibold text-center leading-relaxed">
                Anthropology at University of Tehran, Iran (2007-2011)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*MARK: Certificates Section */}
      <div 
        className={`${theme.glassOverlay} rounded-3xl p-8 ${theme.glassShadow}`}
        data-aos="fade-up"
        data-aos-delay="1400"
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