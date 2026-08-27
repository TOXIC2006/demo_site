import { useState, useEffect } from 'react'

const roles = ['Java Full Stack Developer', 'Spring Boot Engineer', 'REST API Architect', 'React Developer']

export default function Hero() {
  const [text, setText] = useState('')
  const [roleIdx, setRoleIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIdx]
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (text.length < current.length) {
            setText(current.slice(0, text.length + 1))
          } else {
            setTimeout(() => setDeleting(true), 1600)
          }
        } else {
          if (text.length > 0) {
            setText(current.slice(0, text.length - 1))
          } else {
            setDeleting(false)
            setRoleIdx((roleIdx + 1) % roles.length)
          }
        }
      },
      deleting ? 40 : 80,
    )
    return () => clearTimeout(timeout)
  }, [text, deleting, roleIdx])

  return (
    <section id="home" className="relative min-h-screen flex items-center grid-bg overflow-hidden">
      {/* Glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-neon/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-neon/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-5 gap-12 items-center relative">
        <div className="md:col-span-3">
          <p className="font-mono-code text-cyan-neon mb-4 text-sm">Hi, my name is</p>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-100 tracking-tight mb-3">
            Alex Carter.
          </h1>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-cool mb-6 h-12 sm:h-14">
            <span className="text-slate-300">{text}</span>
            <span className="cursor-blink text-cyan-neon">|</span>
          </h2>
          <p className="text-gray-cool max-w-xl leading-relaxed mb-8">
            I build robust, scalable backend systems with{' '}
            <span className="text-cyan-neon">Java &amp; Spring Boot</span> and craft modern
            frontends with <span className="text-cyan-neon">React</span>. Passionate about clean
            architecture, microservices, and shipping products end-to-end.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-cyan-neon text-navy font-semibold rounded-lg hover:bg-cyan-300 transition-colors glow-cyan"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-cyan-neon text-cyan-neon font-semibold rounded-lg hover:bg-cyan-neon/10 transition-colors"
            >
              Get In Touch
            </a>
          </div>

          {/* Socials */}
          <div className="flex gap-5 mt-10">
            <a href="https://github.com/alexcarter" target="_blank" rel="noreferrer" aria-label="GitHub"
               className="text-gray-cool hover:text-cyan-neon hover:-translate-y-1 transition-all">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11.1 11.1 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.26 5.66.41.36.78 1.05.78 2.13v3.16c0 .3.21.67.8.55C20.22 21.38 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg>
            </a>
            <a href="https://linkedin.com/in/alexcarter" target="_blank" rel="noreferrer" aria-label="LinkedIn"
               className="text-gray-cool hover:text-cyan-neon hover:-translate-y-1 transition-all">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z"/></svg>
            </a>
            <a href="mailto:alex.carter.dev@gmail.com" aria-label="Email"
               className="text-gray-cool hover:text-cyan-neon hover:-translate-y-1 transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>
            </a>
          </div>
        </div>

        {/* Code card */}
        <div className="md:col-span-2 hidden md:block">
          <div className="animate-float bg-navy-light border border-cyan-neon/20 rounded-xl p-6 font-mono-code text-sm glow-cyan">
            <div className="flex gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-red-400/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <span className="w-3 h-3 rounded-full bg-green-400/80" />
            </div>
            <pre className="text-slate-300 leading-relaxed text-xs sm:text-sm overflow-x-auto">
<span className="text-purple-400">@RestController</span>{'\n'}
<span className="text-cyan-neon">public class</span> <span className="text-yellow-300">DevProfile</span> {'{'}{'\n\n'}
{'  '}<span className="text-purple-400">@GetMapping</span>(<span className="text-green-400">"/stack"</span>){'\n'}
{'  '}<span className="text-cyan-neon">public</span> Stack get() {'{'}{'\n'}
{'    '}<span className="text-cyan-neon">return</span> Stack.<span className="text-yellow-300">of</span>({'\n'}
{'      '}<span className="text-green-400">"Java"</span>, <span className="text-green-400">"Spring Boot"</span>,{'\n'}
{'      '}<span className="text-green-400">"React"</span>, <span className="text-green-400">"PostgreSQL"</span>{'\n'}
{'    '});{'\n'}
{'  '}{'}'}{'\n'}
{'}'}
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
