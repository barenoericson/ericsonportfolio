import { Link } from 'react-scroll'
import profile from '../assets/profile.png'

export default function Hero() {
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
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* Background gradient blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-violet-700 opacity-20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-indigo-600 opacity-20 rounded-full blur-[120px]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-16 flex flex-col-reverse md:flex-row items-center gap-12">

        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-violet-400 font-semibold tracking-widest uppercase text-sm mb-3">
            Full Stack Developer · Cebu, PH
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            I build apps <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
              that actually work.
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-8">
            3rd year BSIT student & freelance developer specializing in web and mobile apps.
            From startups to real-world solutions.
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
              className="cursor-pointer border border-violet-500 text-violet-400 hover:bg-violet-500 hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-200"
            >
              Contact Me
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-10 justify-center md:justify-start">
            <div>
              <p className="text-3xl font-bold text-white">3+</p>
              <p className="text-gray-400 text-sm">Years Coding</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">2+</p>
              <p className="text-gray-400 text-sm">Major Projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">10+</p>
              <p className="text-gray-400 text-sm">Tech Stacks</p>
            </div>
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
    <div className="relative z-10 w-full overflow-hidden py-6 border-t border-white/10">
     <p className="text-center text-gray-500 text-xs uppercase tracking-widest mb-6">Tech Stack</p>
        <div className="flex animate-marquee whitespace-nowrap gap-8">
             {[...techIcons, ...techIcons].map((tech, i) => (
      <div
        key={i}
        className="flex flex-col items-center gap-2 px-4 group cursor-default"
      >
        <i className={`${tech.icon} text-5xl text-gray-400 group-hover:text-violet-400 transition-all duration-200`} />
        <span className="text-gray-500 text-xs group-hover:text-violet-400 transition-all duration-200">
          {tech.name}
        </span>
      </div>
    ))}
  </div>
</div>
    </section>
  )
}