export function Hero() {
  return (
    <main className="max-w-7xl mx-auto px-8 py-20 w-full flex flex-col md:flex-row items-center justify-between gap-16">
      
      {/* Coluna da Esquerda: Textos e Botões */}
      <div className="flex-1 space-y-6">
        <h2 className="text-xl font-medium text-stone-500 tracking-wide uppercase">
          Hello, I'm Leonardo.
        </h2>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-stone-900 leading-tight">
          SOFTWARE & <br /> DATA ENGINEER.
        </h1>
        
        <p className="text-lg text-stone-600 max-w-xl leading-relaxed">
          Building scalable full-stack applications and robust data pipelines. 
          Operating as a Global Worker, delivering engineering excellence from anywhere.
        </p>
        
        {/* Call to Actions (Botões) */}
        <div className="flex items-center gap-4 pt-6">
          <a href="#projects" className="px-8 py-4 bg-stone-900 text-stone-100 font-bold rounded hover:bg-stone-800 transition-colors">
            View Projects
          </a>
          <a href="#cv" className="px-8 py-4 border-2 border-stone-900 text-stone-900 font-bold rounded hover:bg-stone-200 transition-colors">
            Download PDF
          </a>
        </div>
      </div>

      {/* Coluna da Direita: O Elemento Visual do Wireframe */}
      <div className="flex-1 w-full aspect-square md:aspect-[4/3] bg-stone-200/50 border-2 border-dashed border-stone-400 rounded-2xl flex items-center justify-center">
        <span className="text-stone-500 font-bold tracking-widest uppercase">
          [ Visual Element Here ]
        </span>
      </div>

    </main>
  )
}