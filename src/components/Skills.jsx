const skillGroups = [
  {
    title: 'Backend',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    skills: ['Java 21', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'REST APIs', 'Microservices', 'Kafka'],
  },
  {
    title: 'Frontend',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    skills: ['React', 'JavaScript (ES6+)', 'TypeScript', 'Tailwind CSS', 'HTML5 / CSS3', 'Redux Toolkit', 'Vite', 'Responsive Design'],
  },
  {
    title: 'Database & Cloud',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'AWS (EC2, S3, RDS)', 'Docker', 'Kubernetes', 'CI/CD (GitHub Actions)'],
  },
  {
    title: 'Tools & Practices',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    skills: ['Git & GitHub', 'Maven / Gradle', 'JUnit 5 & Mockito', 'Postman', 'IntelliJ IDEA', 'Agile / Scrum', 'Swagger / OpenAPI', 'Linux'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-navy-light/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="font-mono-code text-cyan-neon text-sm mb-2">01. What I work with</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
            Skills &amp; Technologies
          </h2>
          <div className="mt-4 h-1 w-20 bg-cyan-neon rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-navy-light border border-navy-lighter rounded-xl p-6 hover:border-cyan-neon/40 transition-colors glow-cyan-hover"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="p-2.5 bg-cyan-neon/10 text-cyan-neon rounded-lg">{group.icon}</span>
                <h3 className="text-lg font-semibold text-slate-100">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 text-xs font-mono-code bg-navy border border-navy-lighter text-slate-300 rounded-full hover:border-cyan-neon/50 hover:text-cyan-neon transition-colors cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
