import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <main className={darkMode ? 'bg-gray-950 text-white min-h-screen' : 'bg-gray-50 text-gray-900 min-h-screen'}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </main>
  )
}

export default App