import { useState } from 'react'

const EMAIL = 'alex.carter.dev@gmail.com'

export default function Contact() {
  const [form, setForm] = useState({ name: '', subject: '', message: '' })
  const [copied, setCopied] = useState(false)

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSend = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(form.subject || `Hello from ${form.name || 'your portfolio'}`)
    const body = encodeURIComponent(
      `Hi Alex,\n\n${form.message}\n\nBest regards,\n${form.name}`,
    )
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <section id="contact" className="py-24 grid-bg">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-14 text-center">
          <p className="font-mono-code text-cyan-neon text-sm mb-2">04. What's next?</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">Reach Out</h2>
          <div className="mt-4 h-1 w-20 bg-cyan-neon rounded-full mx-auto" />
          <p className="text-gray-cool mt-6 max-w-xl mx-auto leading-relaxed">
            I'm currently open to full-stack and backend opportunities. Whether you have a
            question, a project idea, or just want to say hi — my inbox is always open.
          </p>
        </div>

        {/* Quick email row */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 px-5 py-3 bg-cyan-neon text-navy font-semibold rounded-lg hover:bg-cyan-300 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>
            {EMAIL}
          </a>
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 px-4 py-3 border border-navy-lighter text-gray-cool rounded-lg hover:border-cyan-neon hover:text-cyan-neon transition-colors font-mono-code text-sm"
          >
            {copied ? (
              <>
                <svg className="w-4 h-4 text-cyan-neon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
                Copied!
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"/></svg>
                Copy
              </>
            )}
          </button>
        </div>

        {/* Mailto form */}
        <form
          onSubmit={handleSend}
          className="bg-navy-light border border-navy-lighter rounded-2xl p-8 space-y-5 glow-cyan-hover transition-shadow"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-mono-code text-gray-cool mb-2">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                className="w-full px-4 py-3 bg-navy border border-navy-lighter rounded-lg text-slate-200 placeholder-gray-cool/50 focus:outline-none focus:border-cyan-neon focus:ring-1 focus:ring-cyan-neon transition-colors"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-mono-code text-gray-cool mb-2">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                placeholder="Job opportunity / Collaboration"
                className="w-full px-4 py-3 bg-navy border border-navy-lighter rounded-lg text-slate-200 placeholder-gray-cool/50 focus:outline-none focus:border-cyan-neon focus:ring-1 focus:ring-cyan-neon transition-colors"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-mono-code text-gray-cool mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project or opportunity..."
              className="w-full px-4 py-3 bg-navy border border-navy-lighter rounded-lg text-slate-200 placeholder-gray-cool/50 focus:outline-none focus:border-cyan-neon focus:ring-1 focus:ring-cyan-neon transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-cyan-neon text-navy font-bold rounded-lg hover:bg-cyan-300 hover:scale-[1.02] transition-all shadow-lg shadow-cyan-neon/20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/></svg>
            Send Email
          </button>
          <p className="text-xs font-mono-code text-gray-cool">
            Opens your default mail app with the message pre-filled — no data is stored.
          </p>
        </form>
      </div>
    </section>
  )
}
