const skillGroups = [
    {
      category: "Frontend",
      icon: "🎨",
      skills: [
        { name: "HTML", icon: "devicon-html5-plain colored" },
        { name: "CSS", icon: "devicon-css3-plain colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "Vue 3", icon: "devicon-vuejs-plain colored" },
        { name: "React", icon: "devicon-react-original colored" },
      ],
    },
    {
      category: "Mobile",
      icon: "📱",
      skills: [
        { name: "React Native", icon: "devicon-react-original colored" },
        { name: "Capacitor", icon: "devicon-capacitor-original colored" },
      ],
    },
    {
      category: "Backend",
      icon: "⚙️",
      skills: [
        { name: "PHP", icon: "devicon-php-plain colored" },
        { name: "Laravel", icon: "devicon-laravel-original colored" },
        { name: "Node.js", icon: "devicon-nodejs-plain colored" },
        { name: "NestJS", icon: "devicon-nestjs-original colored" },
        { name: "ExpressJS", icon: "devicon-express-original" },
      ],
    },
    {
      category: "Database",
      icon: "🗄️",
      skills: [
        { name: "MySQL", icon: "devicon-mysql-plain colored" },
        { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      ],
    },
  ]
  
  export default function Skills({ darkMode }) {
    const sec = ["py-24 px-6", darkMode ? "bg-gray-950" : "bg-gray-50"].join(" ")
    const label = ["text-center text-xs uppercase tracking-widest font-semibold mb-3", darkMode ? "text-violet-400" : "text-violet-600"].join(" ")
    const heading = ["text-4xl md:text-5xl font-extrabold text-center mb-16", darkMode ? "text-white" : "text-gray-900"].join(" ")
    const cardCls = ["rounded-2xl p-6 border transition-all duration-200 hover:border-violet-500", darkMode ? "bg-gray-800 border-white/10" : "bg-white border-gray-200 shadow-sm"].join(" ")
    const catTitle = ["text-lg font-bold mb-6 flex items-center gap-2", darkMode ? "text-white" : "text-gray-900"].join(" ")
    const skillName = ["text-xs mt-2 group-hover:text-violet-500 transition-colors duration-200", darkMode ? "text-gray-400" : "text-gray-500"].join(" ")
    const iconCls = (icon) => [icon, "text-4xl group-hover:scale-110 transition-transform duration-200", !icon.includes("colored") ? (darkMode ? "text-gray-300" : "text-gray-600") : ""].join(" ")
  
    return (
      <section id="skills" className={sec}>
        <div className="max-w-6xl mx-auto">
          <p className={label}>What I Work With</p>
          <h2 className={heading}>My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillGroups.map((group) => (
              <div key={group.category} className={cardCls}>
                <h3 className={catTitle}>
                  <span>{group.icon}</span>
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-6">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col items-center group cursor-default">
                      <i className={iconCls(skill.icon)} />
                      <span className={skillName}>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }