import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Icon } from './Icon'; // Importando nosso novo sistema de ícones

export function About() {
  const containerRef = useRef<HTMLElement>(null);

  // Rastreia o scroll (Scrubbing)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"] 
  });

  // Física do Conteúdo
  const textX = useTransform(scrollYProgress, [0, 1], ["-100vw", "0vw"]);
  const imageX = useTransform(scrollYProgress, [0, 1], ["100vw", "0vw"]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);
  const nodeScale = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
    <section 
      id="about" 
      ref={containerRef} 
      className="relative py-32 bg-stone-100 overflow-hidden"
    >
      {/* MOLDURA TECNOLÓGICA (SVG BACKGROUND) */}
      <div className="absolute inset-6 pointer-events-none z-0">
        <svg 
          className="w-full h-full" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
        >
          <motion.rect 
            x="0" 
            y="0" 
            width="100" 
            height="100" 
            fill="none" 
            stroke="currentColor" 
            className="text-amber-700"
            vectorEffect="non-scaling-stroke"
            strokeWidth="4"
            strokeLinejoin="round"
            style={{ pathLength: scrollYProgress }}
          />

          <motion.circle cx="0" cy="0" r="4" fill="currentColor" className="text-stone-900" vectorEffect="non-scaling-stroke" style={{ scale: nodeScale }} />
          <motion.circle cx="100" cy="0" r="4" fill="currentColor" className="text-stone-900" vectorEffect="non-scaling-stroke" style={{ scale: nodeScale }} />
          <motion.circle cx="0" cy="100" r="4" fill="currentColor" className="text-stone-900" vectorEffect="non-scaling-stroke" style={{ scale: nodeScale }} />
          <motion.circle cx="100" cy="100" r="4" fill="currentColor" className="text-stone-900" vectorEffect="non-scaling-stroke" style={{ scale: nodeScale }} />
        </svg>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="relative z-10 max-w-7xl mx-auto px-12 w-full flex flex-col md:flex-row gap-16 items-center">

        {/* Coluna de Texto */}
        <motion.div 
          style={{ x: textX, opacity }} 
          className="flex-1 space-y-6 bg-stone-100/80 backdrop-blur-sm p-6"
        >
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
          <p className="text-lg text-stone-600 leading-relaxed mb-8">
            Whether I'm architecting a new database structure, developing full-stack applications, or dissecting a complex problem, my approach is always grounded in strong fundamentals, avoiding ready-made answers to truly construct solid technical reasoning.
          </p>

          {/* Links e Redes Sociais */}
          <div className="flex items-center gap-6 pt-4 border-t border-stone-300">
            
            <Icon 
              name="github" 
              className="w-7 h-7 text-stone-500 hover:text-stone-900 transition-colors" 
            />
            
            <Icon 
              name="linkedin" 
              className="w-7 h-7 text-stone-500 hover:text-blue-700 transition-colors" 
            />
            
            <Icon 
              name="mail" 
              className="w-7 h-7 text-stone-500 hover:text-amber-700 transition-colors" 
            />
            
          </div>
        </motion.div>

        {/* Coluna da Imagem - Sem o efeito redondo e sem borda preta grossa */}
        <motion.div 
          style={{ x: imageX, opacity }}
          className="flex-1 w-full max-w-md mx-auto"
        >
          <div className="relative aspect-[4/5] overflow-hidden shadow-2xl group bg-stone-200 flex items-center justify-center">
            <img 
              src="/lmb-profile.jpg" 
              alt="Leonardo Martins Bezerra" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => e.currentTarget.style.display = 'none'} 
            />
            <span className="text-stone-400 font-bold uppercase tracking-wider text-sm text-center px-4 -z-10">
              Coloque sua foto na pasta <br/> 'public/lmb-profile.jpg'
            </span>
            <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}