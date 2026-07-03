export function About() {
  return (
    <section id="about" className="py-24 bg-stone-100 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-8 w-full flex flex-col md:flex-row gap-16 items-center">

        {/* Coluna de Texto */}
        <div className="flex-1 space-y-6">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-stone-900 uppercase tracking-tight mb-4">
              About Me
            </h2>
            <div className="w-16 h-1 bg-amber-700"></div>
          </div>

          <p className="text-lg text-stone-600 leading-relaxed">
            I am a Software Engineering student currently in my 6th period, steadily building a career as a <strong className="text-stone-900">Global Worker</strong>. My goal is to deliver high-level engineering solutions to international teams while maintaining my fixed base in Rio de Janeiro.
          </p>

          <p className="text-lg text-stone-600 leading-relaxed">
            My technical foundation was forged in hands-on IT support environments, troubleshooting systems and bridging the gap between infrastructure and end-users. Today, alongside my studies and preparation for competitive technology exams, I manage operations in a fast-paced family business—an experience that has deeply sharpened my management skills, resource allocation, and resilience.
          </p>

          <p className="text-lg text-stone-600 leading-relaxed">
            Whether I'm architecting a new database structure, developing full-stack applications, or dissecting a complex problem, my approach is always grounded in strong fundamentals, avoiding ready-made answers to truly construct solid technical reasoning.
          </p>
        </div>

        {/* Coluna da Imagem */}
        <div className="flex-1 w-full">
          <div className="aspect-square md:aspect-[4/5] bg-stone-200 rounded-xl border-2 border-dashed border-stone-400 flex items-center justify-center p-8 relative">
             <span className="text-stone-500 font-bold tracking-widest uppercase z-10 text-center">
                [ Your Professional <br/> Photo Here ]
             </span>
          </div>
        </div>

      </div>
    </section>
  )
}