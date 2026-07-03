export function Projects() {
  const myProjects = [
    {
      title: "Komanda",
      description: "System for recording sales and management information.",
      techStack: ["PostgreSQL", "Next.js", "Supabase","Vercel"],
      link: "https://komanda-next.vercel.app/"
    },
    {
      title: "Open cnpj data pipeline",
      description: "A Data Engineering pipeline processing Brazilian public corporate data (CNPJ). Features automated collection, log auditing, and raw data preparation for future ETL and analytics.",
      techStack: ["Python", "Pandas", "Streamlit", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Sales Management App v1.0",
      description: "A robust desktop application engineered to streamline sales operations, inventory mapping, and business management.",
      techStack: ["Python", "SQL", "Node.js"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-8 w-full">
        
        {/* Cabeçalho */}
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold text-stone-900 uppercase tracking-tight mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-amber-700"></div>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-stone-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-stone-600 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>
              
              {/* Tags de Tecnologia e Botão */}
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-stone-100 text-stone-600 text-xs font-bold uppercase tracking-wider rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors"
                >
                  View Details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}