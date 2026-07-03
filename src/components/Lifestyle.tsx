export function Lifestyle() {
  const interests = [
    {
      category: "Endurance & Field",
      title: "Fitness & Running",
      description: "Discipline outside the code. Whether it's pushing limits in bodybuilding, hitting a 10km run, or playing football, staying active is the foundation of my daily focus."
    },
    {
      category: "Ocean & Board",
      title: "Surfing",
      description: "Translating the physics of waves into practice. Surfing provides the perfect disconnect from the digital world, demanding presence and adaptability."
    },
    {
      category: "Rhythm & Strings",
      title: "Samba & Cavaquinho",
      description: "Exploring Brazilian roots and musicality. Learning cavaquinho and banjo is my creative outlet, proving that consistent practice builds harmony."
    },
    {
      category: "Tactics & Simulation",
      title: "Flight Sim & Competitive Gaming",
      description: "A blend of technical optimization and strategy. From running flight procedures in Microsoft Flight Simulator to optimizing input lag in competitive matches."
    }
  ];

  return (
    <section id="lifestyle" className="py-24">
      <div className="max-w-7xl mx-auto px-8 w-full">
        
        {/* Cabeçalho */}
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold text-stone-900 uppercase tracking-tight mb-4">
            Beyond the Screen
          </h2>
          <div className="w-16 h-1 bg-amber-700"></div>
          <p className="mt-6 text-lg text-stone-600 max-w-2xl leading-relaxed">
            Engineering is about solving problems, but creativity and discipline are built offline. Here is what fuels my mindset when I'm not writing code.
          </p>
        </div>

        {/* Grid de Estilo de Vida */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {interests.map((item, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-xl border border-stone-200 bg-white hover:border-amber-700/50 transition-colors duration-300"
            >
              <span className="text-sm font-bold text-amber-700 tracking-wider uppercase mb-2 block">
                {item.category}
              </span>
              <h3 className="text-2xl font-bold text-stone-800 mb-3 group-hover:text-amber-800 transition-colors">
                {item.title}
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}