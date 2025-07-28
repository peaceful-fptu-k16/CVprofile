import { motion } from 'framer-motion'
import { useTheme } from './hooks/useCustomHooks'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'

function App() {
  const { darkMode, toggleTheme } = useTheme()

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'dark bg-dark-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <ScrollProgress />
      <Header darkMode={darkMode} toggleDarkMode={toggleTheme} />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <section id="education">
          <Education />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default App
