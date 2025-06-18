import { getThemeClasses } from '../lib/theme';

export default function Contact() {
  const theme = getThemeClasses();
  
  return (
    <section className={`py-20 px-4 ${theme.primaryBg} ${theme.whiteText}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Let&apos;s Connect!</h2>
        <p className="text-xl mb-8 opacity-90">
          I&apos;m excited about joining a team where I can contribute meaningfully and continue to grow.
        </p>
        <a
          href="mailto:zeyndanesh@gmail.com"
          className={`${theme.secondaryButton} px-8 py-3 rounded-lg text-lg font-semibold transition-all`}
        >
          zeyndanesh@gmail.com
        </a>
        <p className="mt-4 text-lg opacity-80">☕ Coffee chats? I&apos;m in ❤</p>
      </div>
    </section>
  );
} 