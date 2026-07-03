import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Stack } from './components/Stack'
import { Projects } from './components/Projects'
import { About } from './components/About'
import { Academic } from './components/Academic'
import { Lifestyle } from './components/Lifestyle'
import { Contact } from './components/Contact'

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <Stack />
      <Projects />
      <About />
      <Academic />
      <Lifestyle />
      <Contact />
    </div>
  )
}

export default App