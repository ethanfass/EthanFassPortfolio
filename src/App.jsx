import { useState } from 'react'
import './App.css'

const desktopShortcuts = [
  { href: '#about', icon: 'about', label: 'About' },
  { href: '#education', icon: 'document', label: 'Education' },
  { href: '#experience', icon: 'briefcase', label: 'Experience' },
  { href: '#skills', icon: 'tools', label: 'Skills' },
  { href: '#main-projects', icon: 'folder', label: 'Projects' },
  { href: '#games', icon: 'window', label: 'Games' },
  { href: '#programs', icon: 'chip', label: 'Programs' },
]

const experienceItems = [
  {
    label: 'Internship',
    title: 'Cybersecurity Risk Management Intern',
    meta: 'AmeriHealth Caritas | Newtown Square, PA | Jun 2025 - Aug 2025',
    detail:
      'Analyzed Teams, Zoom, Citrix session, endpoint, mouse, and keyboard activity logs to investigate potential misuse of an account lockout bypass system. Built custom log queries, authored SOAR incident reports, and designed Python programs that compiled logs and generated behavioral metrics for insider-threat detection.',
  },
  {
    label: 'Teaching',
    title: 'Teaching Assistant',
    meta: 'University of Delaware | Newark, DE | Feb 2025 - May 2025',
    detail:
      'Led weekly Java lab sessions for 10+ students, guided debugging and problem-solving work, held office hours for object-oriented programming and algorithm design, and graded labs, homework, and projects with detailed feedback.',
  },
  {
    label: 'Customer Service',
    title: 'Sales Associate',
    meta: 'Fine Wine & Good Spirits | Warrington, PA | Jun 2024 - Aug 2024',
    detail:
      'Assisted customers with product selection, maintained organized and well-stocked displays, supported seasonal sales, and collaborated with the team to streamline department operations.',
  },
  {
    label: 'Retail Operations',
    title: 'Inside Lawn & Garden Associate',
    meta: 'Lowe\'s Home Improvement | Warrington, PA | Jun 2023 - Feb 2024',
    detail:
      'Guided customers through product selections, managed transactions, restocked merchandise, and kept the sales floor organized during high-volume hours.',
  },
]

const skillItems = [
  {
    label: 'Languages',
    title: 'Programming',
    detail: 'Python, Java, C, C++, SQL, HTML, CSS, TypeScript, JavaScript, React',
  },
  {
    label: 'Systems',
    title: 'Operating Systems',
    detail: 'Windows, Unix, Ubuntu',
  },
  {
    label: 'Security Tools',
    title: 'Software',
    detail: 'Splunk, Burp Suite, SOAR, Metasploit',
  },
  {
    label: 'CS Focus',
    title: 'Core Topics',
    detail: 'Cybersecurity, object-oriented programming, algorithm design, data analysis, and software engineering',
  },
]

const certificateItems = [
  {
    label: 'Certification',
    title: 'CompTIA Security+ (SYO-601)',
    meta: 'Earned Mar 2025',
    detail: 'Cybersecurity certification listed on the resume; currently studying for ISC2 CISSP with an early June 2026 target.',
  },
]

const classItems = [
  {
    label: 'Coursework',
    title: 'Classes',
    detail:
      'Intro to Network Security, Secure Software Design, Cloud Computing and Security, Introduction to Cybersecurity, Digital Forensics, Computer Networks I, and Operating Systems.',
  },
]

const educationItems = [
  {
    label: 'University',
    title: 'University of Delaware',
    meta: 'Bachelor of Computer Science | Expected May 2026',
    detail:
      'Computer Science student with a Mathematics minor, Cybersecurity concentration, 3.48 GPA, and Dean\'s List honors beginning Spring 2024.',
  },
  {
    label: 'Activities',
    title: 'Clubs and Campus Involvement',
    detail:
      'Member of Competitive Coding Club since September 2023 and Association for Computing Machinery since September 2022.',
  },
  {
    label: 'Fraternity',
    title: 'Sigma Phi Delta - National Engineering Fraternity',
    meta: 'Intramural Chair, New Member Guide, Web Designer | Sep 2023 - Present',
    detail:
      'Organized intramural sports for 60+ members and created and maintained a React website for fundraising, rush, and academic events.',
  },
]

const programs = [
  {
    tag: 'Python Automation',
    title: 'Log Compilation Tools',
    description:
      'Designed internal Python programs during a cybersecurity internship to compile activity logs and generate behavioral metrics for investigations.',
    stack: 'Python, log analysis, metrics',
    status: 'Internal work',
    demoUrl: '',
    repoUrl: '',
  },
  {
    tag: 'Security Analysis',
    title: 'Custom Investigation Queries',
    description:
      'Built and refined log queries to surface anomalous behavior patterns across large Teams, Zoom, Citrix, and endpoint data sets.',
    stack: 'Splunk, SOAR, endpoint logs',
    status: 'Case details private',
    demoUrl: '',
    repoUrl: '',
  },
  {
    tag: 'Course Support',
    title: 'Java Lab Coaching',
    description:
      'Supported students through Java assignments, debugging, object-oriented programming concepts, and algorithm design practice.',
    stack: 'Java, OOP, algorithms',
    status: 'Teaching experience',
    demoUrl: '',
    repoUrl: '',
  },
]

const games = [
  {
    tag: 'Game Prototype',
    title: 'Upcoming Arcade Project',
    description:
      'A fast-paced game prototype can live here with mechanics, level design ideas, and any custom systems I built.',
    stack: 'Unity or Godot',
    status: 'Gameplay footage coming soon',
    demoUrl: '',
    repoUrl: '',
  },
  {
    tag: 'Design Experiment',
    title: 'Upcoming Puzzle Game',
    description:
      'A place for a puzzle or strategy game that highlights logic, iteration, and player-focused design choices.',
    stack: 'C#, GDScript, UX iteration',
    status: 'Playable build coming soon',
    demoUrl: '',
    repoUrl: '',
  },
]

const mainProjects = [
  {
    tag: 'Featured Project',
    title: 'Sigma Phi Delta Website',
    description:
      'Created and maintained a fraternity website that publishes fundraising, rush, and academic event information for members and visitors.',
    stack: 'React, HTML, CSS',
    status: 'Live organization site',
    demoUrl: '',
    repoUrl: '',
  },
  {
    tag: 'Cybersecurity Workflow',
    title: 'SOAR Incident Reports',
    description:
      'Authored incident reports documenting suspicious activity, escalation actions, and remediation steps to strengthen response workflows.',
    stack: 'SOAR, documentation, escalation',
    status: 'Professional experience',
    demoUrl: '',
    repoUrl: '',
  },
  {
    tag: 'Personal Build',
    title: 'Portfolio Site',
    description:
      'A retro desktop-inspired portfolio built to organize resume-backed experience, projects, skills, and contact information.',
    stack: 'React, Vite, CSS',
    status: 'In progress',
    demoUrl: '',
    repoUrl: '',
  },
]

const contactItems = [
  {
    label: 'Email',
    title: 'ethfass74@gmail.com',
    detail: 'Best resume contact for internship, full-time, and project opportunities.',
  },
  {
    label: 'LinkedIn',
    title: 'linkedin.com/in/ethanfassnacht',
    detail: 'Professional profile listed on the resume.',
  },
  {
    label: 'Phone',
    title: '(215) 347-9604',
    detail: 'Direct phone contact from the resume.',
  },
]

function ProjectSection({ eyebrow, title, blurb, items, onOpenProject }) {
  return (
    <section className="section-block">
      <div className="section-titlebar">
        <span>{eyebrow}.grp</span>
        <div className="window-controls" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="section-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p className="section-copy">{blurb}</p>
      </div>

      <div className="card-grid">
        {items.map((item) => (
          <article className="project-card" key={item.title}>
            <span className="file-icon" aria-hidden="true" />
            <p className="card-tag">{item.tag}</p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="card-meta">
              <span>{item.stack}</span>
              <span>{item.status}</span>
            </div>
            <div className="project-actions">
              <button type="button" onClick={() => onOpenProject(item)}>
                Open window
              </button>
              {item.repoUrl ? (
                <a href={item.repoUrl} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function ProjectWindow({ project, onClose }) {
  if (!project) {
    return null
  }

  return (
    <div className="project-modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="project-demo-window"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-window-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="project-window-titlebar">
          <span id="project-window-title">{project.title}.exe</span>
          <button type="button" onClick={onClose} aria-label="Close project window">
            x
          </button>
        </div>

        <div className="project-window-toolbar">
          <span>{project.stack}</span>
          <span>{project.status}</span>
        </div>

        {project.demoUrl ? (
          <iframe
            title={`${project.title} live demo`}
            src={project.demoUrl}
            className="project-demo-frame"
            loading="lazy"
          />
        ) : (
          <div className="project-window-empty">
            <p className="card-tag">Demo URL needed</p>
            <h3>Attach this React project with a live link.</h3>
            <p>
              Deploy the project with GitHub Pages, Vercel, or Netlify, then paste
              that live URL into this project&apos;s <code>demoUrl</code> field in
              <code> src/App.jsx</code>. A normal GitHub repo URL shows code, but
              it does not run the app inside this window.
            </p>
            <p>
              Local option: build the other React app, put its <code>dist</code>{' '}
              files under <code>public/projects/project-name/</code>, and use{' '}
              <code>/projects/project-name/index.html</code> as the demo URL.
            </p>
          </div>
        )}
      </section>
    </div>
  )
}

function InfoWindow({ id, title, items, compact = false }) {
  return (
    <section className={`info-window${compact ? ' info-window-compact' : ''}`} id={id}>
      <div className="section-titlebar">
        <span>{title}</span>
        <div className="window-controls" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="resume-card-grid">
        {items.map((item) => (
          <article className="resume-card" key={`${item.label}-${item.title}`}>
            <span className="resume-icon" aria-hidden="true" />
            <p className="card-tag">{item.label}</p>
            <h3>{item.title}</h3>
            {item.meta ? <p className="resume-meta">{item.meta}</p> : null}
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function App() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <main className="page-shell">
      <nav className="desktop-icons" aria-label="Portfolio shortcuts">
        {desktopShortcuts.map((item) => (
          <a
            href={item.href}
            key={item.label}
            rel={item.external ? 'noreferrer' : undefined}
            target={item.external ? '_blank' : undefined}
          >
            <span
              className={`desktop-icon desktop-icon-${item.icon}`}
              aria-hidden="true"
            />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <section className="hero-panel" id="about">
        <div className="window-titlebar">
          <span className="titlebar-icon" aria-hidden="true" />
          <span>ETHAN.EXE</span>
          <div className="window-controls" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="system-menu" aria-hidden="true">
          <span>FILE</span>
          <span>VIEW</span>
          <span>WORK</span>
          <span>CONTACT</span>
        </div>

        <div className="hero-copy">
          <div className="profile-dialog">
            <div className="dialog-titlebar">
              <span>ABOUTETHAN.DAT</span>
            </div>

            <div className="profile-body">
              <div className="portrait-icon" aria-hidden="true">
                EF
              </div>
              <div className="profile-fields">
                <p className="eyebrow">Portfolio room / Ethan Fassnacht</p>
                <h1>Ethan Fassnacht</h1>
                <dl>
                  <div>
                    <dt>Status</dt>
                    <dd>Senior Computer Science Student</dd>
                  </div>
                  <div>
                    <dt>Degree</dt>
                    <dd>Bachelor of Computer Science</dd>
                  </div>
                  <div>
                    <dt>Minor</dt>
                    <dd>Mathematics</dd>
                  </div>
                  <div>
                    <dt>Concentration</dt>
                    <dd>Cybersecurity</dd>
                  </div>
                  <div>
                    <dt>Location</dt>
                    <dd>Newark, Delaware</dd>
                  </div>
                  <div>
                    <dt>Certification</dt>
                    <dd>CompTIA Security+ (SYO-601)</dd>
                  </div>
                  <div>
                    <dt>Email</dt>
                    <dd>ethfass74@gmail.com</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <p className="hero-text">
            I&apos;m a University of Delaware Computer Science senior building a
            portfolio around security work, teaching experience, and practical
            software projects.
          </p>

          <div className="hero-actions">
            <a href="#main-projects" className="primary-link">
              View featured work
            </a>
            <a href="#experience" className="secondary-link">
              View experience
            </a>
          </div>
        </div>

      </section>

      <section className="intro-band">
        <div>
          <p className="band-label">Focus Areas</p>
          <p>
            Log investigation, Python automation, incident reporting, Java and
            OOP support, React websites, SQL, and security tools like Splunk,
            Burp Suite, SOAR, and Metasploit.
          </p>
        </div>
        <div>
          <p className="band-label">Current Stage</p>
          <p>
            Expected May 2026 graduate with a 3.48 GPA, Security+ certification,
            and CISSP study in progress for an early June 2026 target.
          </p>
        </div>
      </section>

      <InfoWindow id="experience" title="experience.exe" items={experienceItems} />

      <InfoWindow
        compact
        id="skills"
        title="skills-certificates.cpl"
        items={[...skillItems, ...certificateItems, ...classItems]}
      />

      <InfoWindow
        id="education"
        title="education-extracurriculars.grp"
        items={educationItems}
      />

      <InfoWindow compact id="contact" title="contact.ini" items={contactItems} />

      <div className="content-stack">
        <div id="programs">
          <ProjectSection
            eyebrow="Programs"
            title="Code that solves practical problems"
            blurb="Applications, tools, utilities, and technical experiments that show how I think through problems and build toward working software."
            items={programs}
            onOpenProject={setActiveProject}
          />
        </div>

        <div id="games">
          <ProjectSection
            eyebrow="Games"
            title="Interactive builds and gameplay experiments"
            blurb="Prototypes, class projects, and game ideas that highlight creativity, systems thinking, and iteration."
            items={games}
            onOpenProject={setActiveProject}
          />
        </div>

        <div id="main-projects">
          <ProjectSection
            eyebrow="Main Projects"
            title="The projects I want people to remember"
            blurb="My strongest work belongs here, especially projects with clear impact, deeper architecture, or a story worth walking through."
            items={mainProjects}
            onOpenProject={setActiveProject}
          />
        </div>
      </div>

      <ProjectWindow
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </main>
  )
}

export default App
