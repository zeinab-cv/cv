export default function Skills() {
  const skills = [
    "Project Coordination",
    "Cross-cultural Communication", 
    "Social Media Strategy",
    "Event Management",
    "Microsoft Office",
    "WordPress",
    "Canva",
    "Video Editing"
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div key={skill} className="bg-white p-4 rounded-lg shadow-sm text-center">
              <span className="text-gray-800 font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 