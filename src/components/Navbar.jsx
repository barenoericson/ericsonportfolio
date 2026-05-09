import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = ["Skills", "About", "Projects", "Contact"]

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? darkMode
          ? 'bg-gray-950/90 backdrop-blur-md shadow-lg'
          : 'bg-white/90 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <span className={`text-2xl font-bold tracking-wide ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Ericson<span className="text-violet-500">.</span>
        </span>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <Link
                to={link.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-70}
                className={`cursor-pointer hover:text-violet-400 transition-colors duration-200 font-medium ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side: Theme toggle + Hire Me */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition-all duration-200 ${
              darkMode
                ? 'bg-white/10 hover:bg-white/20 text-yellow-300'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            }`}
          >
            {darkMode ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
          </button>

          {/* Hire Me */}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer bg-violet-600 hover:bg-violet-500 text-white font-semibold px-5 py-2 rounded-full transition-all duration-200 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/60"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden focus:outline-none ${darkMode ? 'text-white' : 'text-gray-900'}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${darkMode ? 'bg-white' : 'bg-gray-900'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${darkMode ? 'bg-white' : 'bg-gray-900'} ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 transition-all ${darkMode ? 'bg-white' : 'bg-gray-900'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`md:hidden backdrop-blur-md px-6 pb-6 flex flex-col gap-4 ${
          darkMode ? 'bg-gray-950/95' : 'bg-white/95'
        }`}>
          {navLinks.map((link) => (
            <Link
              key={link}
              to={link.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-70}
              className={`cursor-pointer hover:text-violet-400 transition-colors duration-200 font-medium text-lg ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </Link>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`flex items-center gap-2 font-medium ${darkMode ? 'text-yellow-300' : 'text-gray-700'}`}
          >
            {darkMode ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer bg-violet-600 hover:bg-violet-500 text-white font-semibold px-5 py-2 rounded-full text-center transition-all duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Hire Me
          </Link>
        </div>
      )}
    </nav>
  )
}