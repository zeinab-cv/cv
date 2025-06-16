export default function Education() {
  const education = [
    {
      degree: "M.Sc. in Peace, Mediation and Conflict Research",
      institution: "University"
    },
    {
      degree: "M.A. in Social Development",
      institution: "University"
    },
    {
      degree: "B.A. in Anthropology",
      institution: "University"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 