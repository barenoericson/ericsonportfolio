import { FaGithub, FaEnvelope } from "react-icons/fa"

const cards = [
  { emoji: "🎓", title: "BSIT Student", desc: "3rd year at St. Cecilia College Cebu Inc., Minglanilla. Constantly learning and applying modern web and mobile development skills in real projects." },
  { emoji: "🚀", title: "Startup Co-Founder", desc: "Co-building RealtyLinkPH, a funded startup solving trust issues in PH online property listings. Handling full stack development across web and mobile." },
  { emoji: "💻", title: "Freelance Developer", desc: "Open to local Cebu and international freelance projects. Specializing in full stack web apps and cross-platform mobile development." },
]

export default function About({ darkMode }) {
  const sec = ["py-24 px-6", darkMode ? "bg-gray-900" : "bg-white"].join(" ")
  const label = ["text-center text-xs uppercase tracking-widest font-semibold mb-3", darkMode ? "text-violet-400" : "text-violet-600"].join(" ")
  const title = ["text-4xl md:text-5xl font-extrabold text-center mb-16", darkMode ? "text-white" : "text-gray-900"].join(" ")
  const h3 = ["text-2xl font-bold mb-4", darkMode ? "text-white" : "text-gray-900"].join(" ")
  const para = ["text-lg leading-relaxed mb-4", darkMode ? "text-gray-400" : "text-gray-600"].join(" ")
  const para2 = ["text-lg leading-relaxed", darkMode ? "text-gray-400" : "text-gray-600"].join(" ")
  const span1 = ["font-semibold", darkMode ? "text-white" : "text-gray-900"].join(" ")
  const span2 = ["font-semibold", darkMode ? "text-violet-400" : "text-violet-600"].join(" ")
  const ghBtn = ["flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all duration-200", darkMode ? "bg-white/10 hover:bg-white/20 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-800"].join(" ")
  const gmBtn = "flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all duration-200 bg-violet-600 hover:bg-violet-500 text-white"
  const card = ["rounded-2xl p-6 border transition-all duration-200 hover:border-violet-500", darkMode ? "bg-gray-800 border-white/10" : "bg-gray-50 border-gray-200"].join(" ")
  const ctitle = ["font-bold text-lg", darkMode ? "text-white" : "text-gray-900"].join(" ")
  const cdesc = ["text-sm leading-relaxed", darkMode ? "text-gray-400" : "text-gray-600"].join(" ")

  return (
    <section id="about" className={sec}>
      <div className="max-w-6xl mx-auto">
        <p className={label}>Get To Know Me</p>
        <h2 className={title}>About Me</h2>
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1">
            <h3 className={h3}>Who I Am</h3>
            <p className={para}>
              I am <span className={span1}>Ericson Bareno</span>, a 3rd year BSIT student at <span className={span1}>St. Cecilia College Cebu Inc.</span> in Minglanilla, Cebu, Philippines. I am a full stack web and mobile developer who loves turning real-world problems into clean digital solutions.
            </p>
            <p className={para}>
              I am currently co-building <span className={span2}>RealtyLinkPH</span>, a startup solving the trust problem in Philippine online property listings. We already have an investor on board and are building using Laravel, Vue 3, and Capacitor.
            </p>
            <p className={para2}>
              I also built <span className={span2}>KaryaChat</span>, an AI programming tutor app built with React Native and NestJS. I am passionate about building products that matter and open to freelance projects locally and internationally.
            </p>
            <div className="flex gap-4 mt-8">
              <a href="https://github.com/barenoericson" target="_blank" rel="noreferrer" className={ghBtn}>
                <FaGithub size={18} /> GitHub
              </a>
              <a href="mailto:ericsonbareno028@gmail.com" className={gmBtn}>
                <FaEnvelope size={18} /> Gmail
              </a>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-1 gap-5">
            {cards.map((c) => (
              <div key={c.title} className={card}>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center text-white text-lg">{c.emoji}</div>
                  <h4 className={ctitle}>{c.title}</h4>
                </div>
                <p className={cdesc}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}