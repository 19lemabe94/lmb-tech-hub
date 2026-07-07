import { useState, useEffect } from 'react';

export function Navbar() {
  const originalLMB = "LMB";
  const originalTechHub = "TECH HUB";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
  
  // Agora temos um estado separado para cada parte da logo
  const [lmbText, setLmbText] = useState(originalLMB);
  const [techHubText, setTechHubText] = useState(originalTechHub);
  const [slashColor, setSlashColor] = useState("text-amber-700");

  useEffect(() => {
    let scrambleInterval: ReturnType<typeof setInterval>;

    const triggerEffect = () => {
      let iteration = 0;
      
      // Travado apenas no laranja do tema e no escuro/preto
      const colors = ["text-amber-700", "text-stone-900"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setSlashColor(randomColor);

      clearInterval(scrambleInterval);
      
      // Aumentamos o tempo de 30ms para 50ms para deixar os frames mais lentos
      scrambleInterval = setInterval(() => {
        
        // Embaralhando o LMB
        setLmbText(() => 
          originalLMB
            .split("")
            .map((_, index) => {
              if (index < iteration) return originalLMB[index];
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join("")
        );

        // Embaralhando o TECH HUB
        setTechHubText(() => 
          originalTechHub
            .split("")
            .map((letter, index) => {
              if (index < iteration) return originalTechHub[index];
              // Truque: Ignorar o espaço para ele não virar um símbolo e quebrar o layout
              if (letter === " ") return " "; 
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join("")
        );
        
        // O maior texto tem 8 letras (TECH HUB). Para o intervalo quando chegar no limite.
        if (iteration >= originalTechHub.length) {
          clearInterval(scrambleInterval);
          // Trava no texto original para garantir perfeição no final da animação
          setLmbText(originalLMB);
          setTechHubText(originalTechHub);
        }
        
        // A velocidade de revelação está bem menor (1/6 por ciclo)
        iteration += 1 / 6;
      }, 50);
    };

    // Mantém o gatilho a cada 5 segundos
    const mainLoop = setInterval(triggerEffect, 5000);

    return () => {
      clearInterval(scrambleInterval);
      clearInterval(mainLoop);
    };
  }, []);

  return (
    <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
      
      {/* Logo Animada Completa */}
      <div className="flex items-center gap-2 text-2xl font-serif font-extrabold tracking-widest text-stone-900 uppercase">
        {/* Usamos min-w-[70px] para o LMB não empurrar a barra quando virar símbolos mais largos */}
        <span className="inline-block min-w-[70px] text-right">{lmbText}</span>
        
        <span 
          className={`font-light italic transition-colors duration-700 animate-pulse ${slashColor}`}
        >
          /
        </span>
        
        <span className="inline-block min-w-[140px]">{techHubText}</span>
      </div>

      {/* Links de Navegação */}
      <div className="hidden md:flex items-center gap-8 text-sm font-bold tracking-widest uppercase text-stone-600">
        <a href="#about" className="hover:text-amber-700 transition-colors duration-200">About</a>
        <a href="#stack" className="hover:text-amber-700 transition-colors duration-200">Stack</a>
        <a href="#projects" className="hover:text-amber-700 transition-colors duration-200">Projects</a>
        <a href="#academic" className="hover:text-amber-700 transition-colors duration-200">Academic</a>
        <a href="#lifestyle" className="hover:text-amber-700 transition-colors duration-200">Lifestyle</a>
        <a href="#contact" className="hover:text-amber-700 transition-colors duration-200">Contact</a>
      </div>

    </nav>
  );
}