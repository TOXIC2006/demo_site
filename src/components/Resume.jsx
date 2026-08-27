export default function Resume() {
  return (
    <section id="resume" className="py-24 bg-navy-light/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-14 text-center">
          <p className="font-mono-code text-cyan-neon text-sm mb-2">03. My credentials</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">Resume</h2>
          <div className="mt-4 h-1 w-20 bg-cyan-neon rounded-full mx-auto" />
        </div>

        <div className="relative bg-navy-light border border-cyan-neon/30 rounded-2xl p-8 sm:p-12 text-center glow-cyan overflow-hidden">
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-neon rounded-tl-2xl" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyan-neon rounded-br-2xl" />

          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-cyan-neon/10 text-cyan-neon mb-6">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          </div>

          <h3 className="text-2xl font-bold text-slate-100 mb-3">Grab a copy of my resume</h3>
          <p className="text-gray-cool max-w-lg mx-auto mb-8">
            A one-page summary of my experience building Java / Spring Boot backends and React
            frontends — education, work history, projects, and certifications included.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/resume.pdf"
              download="Alex_Carter_Resume.pdf"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-neon text-navy font-bold rounded-lg hover:bg-cyan-300 hover:scale-105 transition-all shadow-lg shadow-cyan-neon/20"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download Resume (PDF)
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-cyan-neon text-cyan-neon font-semibold rounded-lg hover:bg-cyan-neon/10 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              View Online
            </a>
          </div>

          <p className="mt-6 text-xs font-mono-code text-gray-cool">
            PDF · Last updated Aug 2026 · ~120 KB
          </p>
        </div>
      </div>
    </section>
  )
}
