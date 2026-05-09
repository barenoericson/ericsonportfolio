import { Link } from 'react-scroll'
import profile from '../assets/profile.png'

const techIcons = [
  { name: 'HTML',         icon: 'devicon-html5-plain colored' },
  { name: 'CSS',          icon: 'devicon-css3-plain colored' },
  { name: 'JavaScript',   icon: 'devicon-javascript-plain colored' },
  { name: 'Vue 3',        icon: 'devicon-vuejs-plain colored' },
  { name: 'React',        icon: 'devicon-react-original colored' },
  { name: 'React Native', icon: 'devicon-react-original colored' },
  { name: 'PHP',          icon: 'devicon-php-plain colored' },
  { name: 'Laravel',      icon: 'devicon-laravel-original colored' },
  { name: 'Node.js',      icon: 'devicon-nodejs-plain colored' },
  { name: 'NestJS',       icon: 'devicon-nestjs-original colored' },
  { name: 'ExpressJS',    icon: 'devicon-express-original' },
  { name: 'MySQL',        icon: 'devicon-mysql-plain colored' },
  { name: 'PostgreSQL',   icon: 'devicon-postgresql-plain colored' },
  { name: 'Capacitor',    icon: 'devicon-capacitor-original colored' },
]

export default function Hero({ darkMode }) {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* Background gradient blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className={`absolute top-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full blur-[120px] ${darkMode ? 'bg-violet-700 opacity-20' : 'bg-violet-300 opacity-30'}`} />
        <div className={`absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full blur-[120px] ${darkMode ? 'bg-indigo-600 opacity-20' : 'bg-indigo-300 opacity-30'}`} />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-16 flex flex-col-reverse md:flex-row items-center gap-12">

        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <p className={`font-semibold tracking-widest uppercase text-sm mb-3 ${darkMode ? 'text-violet-400' : 'text-violet-600'}`}>
            Full Stack Developer · Cebu, PH
          </p>
          <h1 className={`text-5xl md:text-7xl font-extrabold leading-tight mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            I build apps <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
              that actually work.
            </span>
          </h1>
          <p className={`text-lg md:text-xl max-w-xl mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            3rd year BSIT student & freelance developer specializing in web and mobile apps. From startups to real-world solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/60"
            >
              See My Work
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className={`cursor-pointer border border-violet-500 font-semibold px-8 py-3 rounded-full transition-all duration-200 ${darkMode ? 'text-violet-400 hover:bg-violet-500 hover:text-white' : 'text-violet-600 hover:bg-violet-500 hover:text-white'}`}
            >
              Contact Me
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-10 justify-center md:justify-start">
            {[['3+', 'Years Coding'], ['2+', 'Major Projects'], ['10+', 'Tech Stacks']].map(([num, label]) => (
              <div key={label}>
                <p className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{num}</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Photo */}
        <div className="flex-shrink-0 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 blur-2xl opacity-40 scale-110" />
            <img
              src={profile}
              alt="Ericson"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-violet-500 shadow-2xl shadow-violet-500/40"
            />
          </div>
        </div>
      </div>

      {/* Tech Stack Marquee */}
      <div className={`relative z-10 w-full overflow-hidden py-6 border-t ${darkMode ? 'border-white/10' : 'border-gray-200'}`}>
        <p className={`text-center text-xs uppercase tracking-widest mb-6 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Tech Stack</p>
        <div className="flex animate-marquee whitespace-nowrap gap-8">
          {[...techIcons, ...techIcons].map((tech, i) => (
            <div key={i} className="flex flex-col items-center gap-2 px-4 group cursor-default">
              <i className={`${tech.icon} text-5xl group-hover:scale-110 transition-transform duration-200 ${!tech.icon.includes('colored') ? (darkMode ? 'text-gray-300' : 'text-gray-700') : ''}`} />
              <span className={`text-xs group-hover:text-violet-500 transition-all duration-200 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}