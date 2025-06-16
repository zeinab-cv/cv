export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
        Zeinab Daneshpour
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-2xl">
        &ldquo;Your past plants the seeds, but your curiosity lets you bloom&rdquo;
      </p>
      <p className="text-lg text-gray-700 mb-8">
        Project Coordinator | Social Development | Peace & Conflict Research
      </p>
      <a
        href="mailto:zeyndanesh@gmail.com"
        className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition-colors"
      >
        Get In Touch
      </a>
    </section>
  );
} 