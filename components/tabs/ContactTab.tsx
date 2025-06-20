import { getThemeClasses } from '../../lib/theme';
import { testimonialsData } from '../data/tabContentData';
import { IconQuote, IconMail, IconCoffee, IconHeart } from '@tabler/icons-react';

export default function ContactTab() {
  const theme = getThemeClasses();

  return (
    <div className="space-y-6">
      <h2 
        className="text-3xl font-bold text-white mb-8 text-center drop-shadow-lg flex items-center justify-center space-x-2"
        data-aos="fade-up"
      >
        <IconQuote size={32} />
        <span>What My Colleagues Say About Me</span>
      </h2>
      
      <div className="space-y-6">
        {testimonialsData.map((testimonial, index) => (
          <div 
            key={testimonial.author}
            className={`${theme.glassOverlay} rounded-3xl p-8 ${theme.glassShadow} text-center`}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div className="flex items-center justify-center mb-4">
              <IconQuote size={24} className={`${testimonial.quoteColor} opacity-60`} />
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6 italic">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="flex items-center space-x-3">
              <div className={`w-12 h-12 ${theme[testimonial.gradient as keyof typeof theme]} rounded-full flex items-center justify-center`}>
                <span className="text-white font-bold text-sm">{testimonial.initials}</span>
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm">{testimonial.author}</h4>
                <p className="text-white/60 text-xs">{testimonial.position}</p>
                <p className="text-white/60 text-xs">{testimonial.organization}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div 
        className={`${theme.glassOverlay} rounded-3xl p-8 ${theme.glassShadow} text-center`}
        data-aos="fade-up"
        data-aos-delay="500"
      >
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
} 