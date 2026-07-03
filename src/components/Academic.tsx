export function Academic() {
  const education = [
    {
      period: "Present (6th Period)",
      title: "Bachelor's in Software Engineering",
      institution: "Unicesumar",
      description: "Deepening core computer science concepts, system architecture, data modeling, and modern software development methodologies."
    },
    {
      period: "Ongoing",
      title: "Advanced Technology Examinations Prep",
      institution: "Focus: IT Roles (Banco do Brasil, Petrobras, etc.)",
      description: "Rigorous continuous study in advanced data structures, high-performance systems, and institutional technology architectures."
    },
    {
      period: "Early 2025",
      title: "Futures Week Brasil",
      institution: "Teach the Future Brasil",
      description: "Professional development in strategic foresight and future-oriented thinking methodologies."
    }
  ];

  return (
    <section id="academic" className="py-24 bg-stone-100 border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-8 w-full">
        
        {/* Cabeçalho */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-extrabold text-stone-900 uppercase tracking-tight mb-4">
            Academic Background
          </h2>
          <div className="w-16 h-1 bg-amber-700 mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {education.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              
              {/* Linha vertical e marcador (visível no desktop) */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-[-3rem] w-px bg-stone-300 transform -translate-x-1/2 last:hidden"></div>
              
              <div className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Marcador central */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-amber-700 border-4 border-stone-100 transform -translate-x-[5.5px] md:-translate-x-1/2 mt-1.5 md:mt-0 z-10"></div>
                
                {/* Espaçador para o layout zig-zag no desktop */}
                <div className="hidden md:block w-[45%]"></div>
                
                {/* Conteúdo do Card */}
                <div className="w-full md:w-[45%] bg-white p-6 rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-sm font-bold text-amber-700 tracking-wider uppercase mb-2 block">
                    {item.period}
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mb-1">
                    {item.title}
                  </h3>
                  <h4 className="text-md font-medium text-stone-500 mb-4">
                    {item.institution}
                  </h4>
                  <p className="text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}