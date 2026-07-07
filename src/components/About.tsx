import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Icon } from './Icon';

export function About() {
  const containerRef = useRef<HTMLElement>(null);

  // Rastreia o scroll para as animações de entrada
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"] 
  });

  // Física de entrada do conteúdo
  const textX = useTransform(scrollYProgress, [0, 1], ["-50vw", "0vw"]);
  const imageX = useTransform(scrollYProgress, [0, 1], ["50vw", "0vw"]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.9], [0, 1]);

  return (
    <section 
      id="about" 
      ref={containerRef} 
      className="relative py-32 bg-stone-50 overflow-hidden"
    >
      {/* CONTEÚDO PRINCIPAL - Livre da moldura */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 w-full flex flex-col md:flex-row gap-16 items-center justify-between">

        {/* Coluna de Texto */}
        <motion.div 
          style={{ x: textX, opacity }} 
          className="flex-1 space-y-6 max-w-2xl"
        >
          <div className="mb-10">
            <h2 className="text-3xl font-extrabold text-stone-900 uppercase tracking-tight mb-4">
              About Me
            </h2>
            <div className="w-16 h-1 bg-amber-700"></div>
          </div>

          <div className="space-y-5 text-stone-600 leading-relaxed text-base md:text-lg">
            <p>
              I am a Software Engineering student currently in my 6th period, steadily building a career as a <strong className="text-stone-900 font-bold">Global Worker</strong>. My goal is to deliver high-level engineering solutions to international teams while maintaining my fixed base in Rio de Janeiro.
            </p>
            <p>
              My technical foundation was forged in hands-on IT support environments, troubleshooting systems and bridging the gap between infrastructure and end-users. Today, alongside my studies and preparation for competitive technology exams, I manage operations in a fast-paced family business—an experience that has deeply sharpened my management skills, resource allocation, and resilience.
            </p>
            <p className="pb-4">
              Whether I'm architecting a new database structure, developing full-stack applications, or dissecting a complex problem, my approach is always grounded in strong fundamentals, avoiding ready-made answers to truly construct solid technical reasoning.
            </p>
          </div>

          {/* Links e Redes Sociais */}
          <div className="flex items-center gap-6 pt-6 border-t border-stone-200">
            <Icon 
              name="github" 
              className="w-6 h-6 text-stone-400 hover:text-stone-900 hover:-translate-y-1 transition-all cursor-pointer" 
            />
            <Icon 
              name="linkedin" 
              className="w-6 h-6 text-stone-400 hover:text-blue-700 hover:-translate-y-1 transition-all cursor-pointer" 
            />
            <Icon 
              name="mail" 
              className="w-6 h-6 text-stone-400 hover:text-amber-700 hover:-translate-y-1 transition-all cursor-pointer" 
            />
          </div>
        </motion.div>

        {/* Coluna da Imagem */}
        <motion.div 
          style={{ x: imageX, opacity }}
          className="w-full max-w-sm mx-auto md:mx-0 flex-shrink-0"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-xl group bg-stone-200 flex items-center justify-center border border-stone-200">
            
            {/* Imagem agora sem o onError e sem os textos de placeholder */}
            <img 
              src="public/lmb-profile.jpg" 
              alt="Leonardo Martins Bezerra" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Overlay sutil para dar acabamento */}
            <div className="absolute inset-0 bg-stone-900/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}