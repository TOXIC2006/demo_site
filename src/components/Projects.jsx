import ProjectVideo from './ProjectVideo.jsx'

const projects = [
  {
    title: 'ShopSphere — E-Commerce Platform',
    description:
      'Full-stack e-commerce platform with a Spring Boot microservices backend (product, cart, order & payment services), JWT-secured REST APIs, Kafka event streaming for order processing, and a React + Tailwind storefront. Handles 1K+ concurrent users with Redis caching.',
    tech: ['Java 21', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Redis', 'React', 'Docker'],
    github: 'https://github.com/alexcarter/shopsphere',
    demo: 'https://shopsphere-demo.vercel.app',
    video: '/videos/project1.mp4',
    videoCaption: 'Demo: browsing products, adding to cart & checkout flow with real-time order tracking.',
  },
  {
    title: 'TaskFlow — Project Management API',
    description:
      'Kanban-style project management tool. Backend built with Spring Boot + Spring Security (role-based access), WebSockets for real-time board updates, and a documented OpenAPI spec. Frontend in React with drag-and-drop boards and optimistic UI updates.',
    tech: ['Spring Boot', 'Spring Security', 'WebSocket', 'MySQL', 'React', 'Tailwind CSS'],
    github: 'https://github.com/alexcarter/taskflow',
    demo: 'https://taskflow-app.netlify.app',
    video: '/videos/project2.mp4',
    videoCaption: 'Demo: creating boards, dragging tasks between columns with live multi-user sync.',
  },
  {
    title: 'FinTrack — Personal Finance Dashboard',
    description:
      'Expense tracking and budgeting dashboard. Spring Boot REST API with JPA/Hibernate, scheduled jobs for monthly report generation, CSV bank-statement import, and interactive charts on a React frontend. Deployed on AWS with a CI/CD pipeline via GitHub Actions.',
    tech: ['Java', 'Spring Boot', 'Hibernate', 'AWS', 'GitHub Actions', 'React', 'Chart.js'],
    github: 'https://github.com/alexcarter/fintrack',
    demo: 'https://fintrack.alexcarter.dev',
    video: '/videos/project3.mp4',
    videoCaption: 'Demo: importing transactions, setting budgets & viewing monthly spend analytics.',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="font-mono-code text-cyan-neon text-sm mb-2">02. Things I've built</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">Featured Projects</h2>
          <div className="mt-4 h-1 w-20 bg-cyan-neon rounded-full" />
        </div>

        <div className="space-y-16">
          {projects.map((project, idx) => (
            <article
              key={project.title}
              className="group grid md:grid-cols-2 gap-8 items-center bg-navy-light/50 border border-navy-lighter rounded-2xl p-6 sm:p-8 hover:border-cyan-neon/40 transition-colors glow-cyan-hover"
            >
              {/* Video — alternate sides on desktop */}
              <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                <ProjectVideo src={project.video} caption={project.videoCaption} title={project.title} />
              </div>

              {/* Details */}
              <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                <p className="font-mono-code text-cyan-neon text-xs mb-2">Featured Project</p>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-4 group-hover:text-cyan-neon transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-cool leading-relaxed mb-5">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono-code text-cyan-neon bg-cyan-neon/10 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 border border-cyan-neon text-cyan-neon text-sm font-semibold rounded-lg hover:bg-cyan-neon/10 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11.1 11.1 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.26 5.66.41.36.78 1.05.78 2.13v3.16c0 .3.21.67.8.55C20.22 21.38 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg>
                    GitHub Repo
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-cyan-neon text-navy text-sm font-semibold rounded-lg hover:bg-cyan-300 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/></svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center mt-14 text-gray-cool">
          Want to see more?{' '}
          <a
            href="https://github.com/alexcarter"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-neon font-mono-code hover:underline underline-offset-4"
          >
            Explore my GitHub →
          </a>
        </p>
      </div>
    </section>
  )
}
