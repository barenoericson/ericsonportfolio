import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { HiSparkles } from 'react-icons/hi'

const projects = [
  {
    title: 'RealtyLinkPH',
    tag: 'Startup · Funded',
    tagColor: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30',
    description: 'A cross-platform real estate marketplace solving the trust problem in Philippine online property listings. Features PRC license verification, AI-assisted document review, virtual tours, and real-time messaging.',
    stack: ['Laravel 11', 'Vue 3', 'Capacitor', 'PostgreSQL', 'Cloudinary', 'Laravel Reverb'],
    image: '/assets/realtylinkph.png',
    github: 'https://github.com/barenoericson',
    live: null,
    highlight: true,
  },
  {
    title: 'KaryaChat',
    tag: 'Capstone Project',
    tagColor: 'bg-violet-500/15 text-violet-400 border border-violet-500/30',
    description: 'An AI-powered programming tutor mobile app that provides interactive code explanations, error debugging, and concept walkthroughs for beginner to intermediate developers.',
    stack: ['React Native', 'NestJS', 'Node.js', 'PostgreSQL'],
    image: '/assets/karyachat.png',
    github: 'https://github.com/barenoericson',
    live: null,
    highlight: false,
  },
]

export default function Projects({ darkMode }) {
  return (
    <section
      id="projects"
      className={`py-24 px-6 transition-colors duration-300 ${darkMode ? 'bg-gray-950' : 'bg-gray-50'}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-500 font-semibold text-sm tracking-widest uppercase mb-3">What I Built</p>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>My Projects</h2>
          <p className={`text-lg max-w-xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Real solutions for real problems — from funded startups to capstone builds.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl
                ${darkMode ? 'bg-gray-900 border-gray-800 hover:border-violet-500/40 hover:shadow-violet-500/10' : 'bg-white border-gray-200 hover:border-violet-300 hover:shadow-violet-100'}
                ${project.highlight ? 'md:grid md:grid-cols-2' : ''}`}
            >
              {project.highlight && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-600/5 to-transparent pointer-events-none" />
              )}

              <div className={`overflow-hidden ${project.highlight ? 'h-full min-h-[240px]' : 'h-52'}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => { e.target.parentElement.style.display = 'none' }}
                />
              </div>

              <div className="p-8 flex flex-col justify-between">
                <div>
                  <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full mb-4 ${project.tagColor}`}>
                    {project.highlight && <HiSparkles size={12} />}
                    {project.tag}
                  </span>
                  <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
                  <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech) => (
                      <span key={tech} className={`text-xs font-medium px-3 py-1 rounded-full ${darkMode ? 'bg-gray-800 text-gray-300 border border-gray-700' : 'bg-gray-100 text-gray-600 border border-gray-200'}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className={`flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}>
                      <FiGithub size={16} /> GitHub
                    </a>
                  )}
                  {project.live ? (
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold text-violet-500 hover:text-violet-400 transition-colors">
                      <FiExternalLink size={16} /> Live Demo
                    </a>
                  ) : (
                    <span className={`flex items-center gap-2 text-xs ${darkMode ? 'text-gray-600' : 'text-gray-400'}`}>
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                      In Development
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            More on my{' '}
            <a href="https://github.com/barenoericson" target="_blank" rel="noopener noreferrer"
              className="text-violet-500 hover:text-violet-400 font-medium transition-colors">
              GitHub →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}