import { useEffect, useRef } from 'react';

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configura o tamanho do canvas
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      // Define a altura baseada no tamanho da seção (aprox 80vh)
      canvas.height = window.innerHeight * 0.8; 
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Rastreador de posição do mouse
    const mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      // Joga o mouse para fora da tela virtualmente para quebrar as conexões
      mouse.x = -1000;
      mouse.y = -1000;
    };
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Classe da Física das Partículas (Nós/Grafos)
    class Particle {
      x: number;
      y: number;
      dx: number;
      dy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.dx = (Math.random() - 0.5) * 1.5; // Velocidade X
        this.dy = (Math.random() - 0.5) * 1.5; // Velocidade Y
        this.radius = Math.random() * 2 + 1; // Tamanho do nó
      }

      update() {
        // Fazer a partícula quicar nas bordas da tela
        if (this.x < 0 || this.x > canvas!.width) this.dx = -this.dx;
        if (this.y < 0 || this.y > canvas!.height) this.dy = -this.dy;
        this.x += this.dx;
        this.y += this.dy;
      }

      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx!.fillStyle = 'rgba(180, 83, 9, 0.6)'; // amber-700 translúcido
        ctx!.fill();
      }
    }

    const particlesArray: Particle[] = [];
    // Renderiza menos nós em celulares para manter a tela limpa e não pesar
    const numberOfParticles = window.innerWidth < 768 ? 40 : 80; 
    const connectionDistance = 150; // Distância para um nó conectar no outro
    const mouseConnectionDistance = 200; // Distância magnética do mouse

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();

        // Conectar as partículas (grafos) entre si
        for (let j = i; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            // Opacidade baseada na distância (mais perto = linha mais forte)
            const opacity = 1 - (distance / connectionDistance);
            ctx.strokeStyle = `rgba(168, 162, 158, ${opacity * 0.3})`; // cinza pedra claro
            ctx.lineWidth = 1;
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
          }
        }

        // O EFEITO MAGNÉTICO DO MOUSE
        const dxMouse = particlesArray[i].x - mouse.x;
        const dyMouse = particlesArray[i].y - mouse.y;
        const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distanceMouse < mouseConnectionDistance) {
          ctx.beginPath();
          const opacity = 1 - (distanceMouse / mouseConnectionDistance);
          ctx.strokeStyle = `rgba(180, 83, 9, ${opacity * 0.8})`; // linha âmbar focada
          ctx.lineWidth = 1.5;
          ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Engenharia limpa: Limpar event listeners quando sair do componente
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-[80vh] overflow-hidden bg-stone-100 border-b border-stone-200">
      
      {/* Canvas animado em background (z-0) */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 pointer-events-auto cursor-crosshair"
      />

      {/* Textos sobrepostos (z-10) com pointer-events-none para o mouse "atravessar" os textos e pegar no canvas */}
      <div className="relative z-10 text-center px-8 pointer-events-none">
        <span className="text-sm font-bold text-amber-700 tracking-[0.2em] uppercase mb-4 block">
          Global Worker
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-stone-900 tracking-tighter mb-6 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-xl inline-block">
          Data & Software <br /> Engineering.
        </h1>
        <p className="text-xl text-stone-800 max-w-2xl mx-auto leading-relaxed mb-10 bg-white/50 backdrop-blur-sm p-4 rounded-xl font-medium mt-4">
          Bridging full-stack development and data pipelines from Rio de Janeiro to the world. Building scalable architectures through strong fundamentals, avoiding ready-made answers.
        </p>
        
        {/* Botões recuperam os eventos de mouse (pointer-events-auto) para serem clicáveis */}
        <div className="flex justify-center gap-4 pointer-events-auto mt-8">
          <a href="#projects" className="px-8 py-3 bg-stone-900 text-stone-100 font-bold uppercase tracking-wider text-sm hover:bg-amber-700 transition-colors shadow-lg">
            View Work
          </a>
          <a href="#contact" className="px-8 py-3 border-2 border-stone-900 text-stone-900 bg-white/50 font-bold uppercase tracking-wider text-sm hover:bg-stone-900 hover:text-stone-100 transition-colors shadow-lg">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}