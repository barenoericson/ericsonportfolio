import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'

const SERVICE_ID  = 'service_c31rul8'
const TEMPLATE_ID = 'template_ecdwvdm'
const PUBLIC_KEY  = 'nFxxrBIjnuXZBu8wp'

export default function Contact({ darkMode }) {
  const form = useRef()
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => { setStatus('success'); form.current.reset(); setTimeout(() => setStatus('idle'), 5000) })
      .catch(() => { setStatus('error'); setTimeout(() => setStatus('idle'), 4000) })
  }

  const inputClass = `w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 border ${
    darkMode
      ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30'
      : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-violet-400 focus:ring-1 focus:ring-violet-400/20'
  }`

  const labelClass = `block text-xs font-semibold uppercase tracking-wider mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`

  return (
    <section id="contact" className={`py-24 px-6 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-violet-500 font-semibold text-sm tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Contact Me</h2>
          <p className={`text-lg max-w-lg mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Have a project in mind or want to hire me for freelance work? Let's talk.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10 items-start">

          {/* Left Info */}
          <div className="md:col-span-2 flex flex-col gap-5">

            {/* Email */}
            <div className={`flex items-start gap-4 p-4 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
              <div className="mt-0.5 p-2 rounded-lg bg-violet-500/15 text-violet-400"><FiMail size={18} /></div>
              <div>
                <p className={`text-xs font-semibold uppercase tracking-wider mb-0.5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Email</p>
                <a href="mailto:ericsonbareno028@gmail.com" className="text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors">
                  ericsonbareno028@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className={`flex items-start gap-4 p-4 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
              <div className="mt-0.5 p-2 rounded-lg bg-violet-500/15 text-violet-400"><FiMapPin size={18} /></div>
              <div>
                <p className={`text-xs font-semibold uppercase tracking-wider mb-0.5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Location</p>
                <p className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Minglanilla, Cebu, Philippines</p>
              </div>
            </div>

            {/* Socials */}
            <div className={`p-4 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
              <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Find me on</p>
              <div className="flex gap-3">
                <a href="https://github.com/barenoericson" target="_blank" rel="noopener noreferrer"
                  className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border transition-all duration-200 ${darkMode ? 'border-gray-700 text-gray-300 hover:border-violet-500 hover:text-violet-400' : 'border-gray-200 text-gray-600 hover:border-violet-400 hover:text-violet-500'}`}>
                  <FiGithub size={15} /> GitHub
                </a>
                <a href="https://linkedin.com/in/barenoericson" target="_blank" rel="noopener noreferrer"
                  className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border transition-all duration-200 ${darkMode ? 'border-gray-700 text-gray-300 hover:border-violet-500 hover:text-violet-400' : 'border-gray-200 text-gray-600 hover:border-violet-400 hover:text-violet-500'}`}>
                  <FiLinkedin size={15} /> LinkedIn
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className={`flex items-center gap-3 p-4 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <p className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Available for freelance projects
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className={`md:col-span-3 rounded-2xl border p-8 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
            <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Your Name</label>
                  <input type="text" name="from_name" placeholder="Juan dela Cruz" required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Email Address</label>
                  <input type="email" name="reply_to" placeholder="juan@email.com" required className={inputClass} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Subject</label>
                <input type="text" name="subject" placeholder="Freelance project / Collaboration" required className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Message</label>
                <textarea name="message" rows={5} placeholder="Tell me about your project..." required className={`${inputClass} resize-none`} />
              </div>
              <button type="submit" disabled={status === 'sending'}
                className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  status === 'sending'
                    ? 'bg-violet-500/50 text-white/60 cursor-not-allowed'
                    : 'bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5'
                }`}>
                <FiSend size={16} />
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && (
                <p className="text-center text-sm font-medium text-emerald-400">
                  Message sent! I'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-center text-sm font-medium text-red-400">
                  Something went wrong. Try emailing me directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}