import { getThemeClasses } from '../../lib/theme';

export default function HomeTab() {
  const theme = getThemeClasses();

  return (
    <div className="space-y-6">
      <div 
        className={`${theme.glassOverlay} rounded-3xl p-8 ${theme.glassShadow} text-center`}
        data-aos="fade-up"
      >
        <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
          Your past plants the seeds, but your curiosity lets you bloom
        </h1>
      </div>
      
      <div 
        className={`${theme.glassOverlay} rounded-3xl p-8 ${theme.glassShadow} text-center`}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <p className="text-white/70 leading-relaxed">
          I&apos;m a project coordinator with a background in anthropology, social development, and peace studies. I work at the intersection of youth engagement, community development, and digital communication, with a passion for inclusive projects, dialogue, and creative collaboration.
        </p>
      </div>
    </div>
  );
} 