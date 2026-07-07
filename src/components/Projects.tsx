import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from './Icon';

export function Projects() {
  const projects = [
    {
      title: "Komanda",
      description: "System for recording sales and management information.",
      techStack: ["PostgreSQL", "React", "Supabase", "Vercel"],
      link: "#"
    },
    {
      title: "Open cnpj data pipeline",
      description: "A Data Engineering pipeline processing Brazillian public corporate data (CNPJ). Features automated collection, log auditing, and raw data preparation for future ETL and analytics.",
      techStack: ["Python", "Pandas", "Streamlit", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Sales Management App v1.0",
      description: "A robust desktop application engineered to streamline sales operations, inventory mapping, and business management.",
      techStack: ["Python", "PostgreSQL", "node"],
      link: "#"
    }
  ];

  // Extrai as tecnologias únicas
  const allTechs = Array.from(new Set(projects.flatMap(p => p.techStack)));
  
  // Duplicamos o array 4 vezes para garantir que a linha seja longa o suficiente
  // para preencher telas ultrawide e criar o loop infinito perfeito (-50% de translate).
  const marqueeTechs = [...allTechs, ...allTechs, ...allTechs, ...allTechs];

  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (tech: string) => {
    setActiveFilters(prev =>
      prev.includes(tech) 
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  const filteredProjects = activeFilters.length === 0
    ? projects
    : projects.filter(p => p.techStack.some(tech => activeFilters.includes(tech)));

  return (
    <section id="projects" className="py-24 bg-stone-50 overflow-hidden">
      
      {/* CSS Injetado para a animação do Letreiro (Marquee) */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 35s linear infinite;
          }
          .pause-marquee:hover .animate-marquee {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="max-w-6xl mx-auto px-8">
        
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold text-stone-900 uppercase tracking-tight mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-amber-700"></div>
        </div>

        {/* Seção de Filtros - Marquee Animado */}
        <div className="mb-16 flex items-center gap-4">
          <span className="text-xs font-bold text-stone-400 uppercase tracking-widest whitespace-nowrap">
            Filters:
          </span>

          <div className="relative flex-1 overflow-hidden pause-marquee py-2 flex items-center">
            {/* Degradê lateral para suavizar a entrada e saída dos botões */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-stone-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-stone-50 to-transparent z-10 pointer-events-none"></div>
            
            {/* Pista do Marquee */}
            <div className="animate-marquee flex gap-3 w-max">
              {marqueeTechs.map((tech, index) => {
                const isActive = activeFilters.includes(tech);
                return (
                  <button
                    // A key usa o index para evitar conflitos na repetição do array
                    key={`${tech}-${index}`}
                    onClick={() => toggleFilter(tech)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap
                      ${isActive 
                        ? 'bg-white border-amber-700 text-amber-900 shadow-sm scale-105' 
                        : 'bg-white border-stone-200 text-stone-500 hover:border-amber-700/40 hover:bg-stone-50'}`}
                  >
                    <Icon 
                      name={tech as any} 
                      className={`w-4 h-4 ${isActive ? 'text-amber-700' : 'text-stone-400'}`} 
                    />
                    {tech}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Botão de Limpar (Aparece estático na direita) */}
          {activeFilters.length > 0 && (
            <button 
              onClick={() => setActiveFilters([])}
              className="text-xs font-bold text-stone-400 hover:text-amber-700 underline underline-offset-2 transition-colors cursor-pointer whitespace-nowrap"
            >
              Clear all
            </button>
          )}
        </div>

        {/* Grid de Projetos */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow p-8 flex flex-col h-full"
              >
                <h3 className="text-xl font-bold text-stone-900 mb-3">{project.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  {project.techStack.map(tech => (
                    <div 
                      key={tech} 
                      title={tech} 
                      className="w-8 h-8 flex items-center justify-center opacity-60 hover:opacity-100 hover:scale-110 transition-all cursor-help"
                    >
                      <Icon name={tech as any} className="w-6 h-6 text-stone-800" />
                    </div>
                  ))}
                </div>

                <a 
                  href={project.link} 
                  className="text-sm font-bold text-amber-700 hover:text-amber-800 transition-colors inline-flex items-center gap-1 group mt-auto w-max"
                >
                  View Details 
                  <span className="transform transition-transform group-hover:translate-x-1">→</span>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {filteredProjects.length === 0 && (
             <div className="col-span-full py-12 text-center">
               <p className="text-stone-500 font-medium">No projects match the selected filters.</p>
             </div>
          )}
        </motion.div>

      </div>
    </section>
  );
}