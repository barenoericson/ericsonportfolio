import { Link } from 'react-scroll'
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'

const navLinks = ['Skills', 'About', 'Projects', 'Contact']

const socials = [
  { icon: <FiGithub size={18} />,   href: 'https://github.com/barenoericson',      label: 'GitHub'   },
  { icon: <FiLinkedin size={18} />, href: 'https://linkedin.com/in/barenoericson', label: 'LinkedIn' },
  { icon: <FiMail size={18} />,     href: 'mailto:barenoericson@gmail.com',         label: 'Email'    },
]

export default function Footer({ darkMode }) {
  const year = new Date().getFullYear()
  return (
    <footer className={`py-12 px-6 border-t transition-colors duration-300 ${darkMode ? 'bg-gray-950 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <span className={`text-2xl font-bold tracking-wide ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Ericson<span className="text-violet-500">.</span>
          </span>
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link}>
                <Link to={link.toLowerCase()} smooth={true} duration={500} offset={-70}
                  className={`cursor-pointer text-sm font-medium transition-colors duration-200 hover:text-violet-400 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            {socials.map(({ icon, href, label }) => (
              <a key={label} href={href} target={href.startsWith('mailto') ? '_self' : '_blank'} rel="noopener noreferrer" aria-label={label}
                className={`p-2.5 rounded-full border transition-all duration-200 hover:-translate-y-0.5 ${darkMode ? 'border-gray-700 text-gray-400 hover:border-violet-500 hover:text-violet-400' : 'border-gray-200 text-gray-500 hover:border-violet-400 hover:text-violet-500'}`}>
                {icon}
              </a>
            ))}
          </div>
        </div>
        <div className={`h-px mb-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Built with React + Vite + Tailwind CSS</p>
          <p className={`flex items-center gap-1.5 text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            Made with <FiHeart size={12} className="text-violet-500" /> by Ericson Bareno · {year}
          </p>
        </div>
      </div>
    </footer>
  )
}