export function Stack() {
  const techCategories = [
    {
      title: "Frontend & UI",
      skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS"]
    },
    {
      title: "Backend & Core",
      skills: ["Node.js", "Python", "REST APIs"]
    },
    {
      title: "Data & Architecture",
      skills: ["SQL", "Relational Databases", "Data Modeling", "System Design"]
    }
  ];

  return (
    <section id="stack" className="py-24 bg-stone-100 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-8 w-full">
        
        {/* Cabeçalho da Seção */}
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold text-stone-900 uppercase tracking-tight mb-4">
            Technical Stack
          </h2>
          <div className="w-16 h-1 bg-amber-700"></div>
        </div>

        {/* Grid de Tecnologias */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {techCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-xl font-bold text-stone-800 border-b-2 border-stone-200 pb-2">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-3 text-stone-600 font-medium">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}