import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Stack } from './components/Stack'
import { Projects } from './components/Projects'
import { Academic } from './components/Academic'
import { Lifestyle } from './components/Lifestyle'
import { Contact } from './components/Contact'
import { motion } from 'framer-motion'

// Componente Wrapper: Aplica a física de profundidade e revelação
function DepthReveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      // Estado Inicial (No fundo: menor, invisível e um pouco abaixo)
      initial={{ opacity: 0, scale: 0.90, y: 60 }}
      // Estado Final (Quando entra na tela: tamanho real, visível e no lugar certo)
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      // Configuração: Anima só 1x, e dispara quando chega a 100px da borda da tela
      viewport={{ once: true, margin: "-100px" }}
      // Física da transição: 0.8 segundos com desaceleração suave
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

function App() {
  return (
    <div className="min-h-screen font-sans flex flex-col bg-stone-100">
      <Navbar />
      
      <main className="overflow-hidden">
        {/* A Hero Section fica normal, pois é a primeira coisa que carrega */}
        <Hero />
        
        {/* As outras seções são "empacotadas" pela nossa animação */}
        <DepthReveal>
          <About />
        </DepthReveal>
        
        <DepthReveal>
          <Stack />
        </DepthReveal>
        
        <DepthReveal>
          <Projects />
        </DepthReveal>
        
        <DepthReveal>
          <Academic />
        </DepthReveal>
        
        <DepthReveal>
          <Lifestyle />
        </DepthReveal>
      </main>

      <Contact />
    </div>
  )
}

export default App