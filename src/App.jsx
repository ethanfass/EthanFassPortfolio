import './App.css'

const desktopShortcuts = [
  { href: '#main-projects', icon: 'folder', label: 'Projects' },
  { href: '#programs', icon: 'chip', label: 'Programs' },
  { href: '#games', icon: 'window', label: 'Games' },
  { href: '#education', icon: 'document', label: 'Education' },
  { href: '#skills', icon: 'tools', label: 'Skills' },
  { href: '#experience', icon: 'briefcase', label: 'Experience' },
  { href: '#certifications', icon: 'certificate', label: 'Security+' },
  {
    href: 'https://www.linkedin.com/in/ethanfassnacht/',
    icon: 'network',
    label: 'LinkedIn',
    external: true,
  },
]

const experienceItems = [
  {
    label: 'Internship',
    title: 'Cybersecurity Risk Management Intern',
    meta: 'AmeriHealth Caritas | Jun 2025 - Aug 2025 | Hybrid',
    detail:
      'Investigated account lockout bypass cases, escalated incidents when needed, built scripts to analyze logs and detect suspicious behavior, and gained hands-on experience with incident response tools.',
  },
  {
    label: 'Teaching',
    title: 'Teaching Assistant',
    meta: 'University of Delaware | Feb 2025 - May 2025 | CISC181',
    detail:
      'Hosted lab sessions for 10 students, guided practical coding exercises, graded assignments and projects, answered online questions, and held office hours.',
  },
  {
    label: 'Customer Service',
    title: 'Retail and Customer Support',
    meta: 'Wawa, Wegmans, Lowe\'s, Fine Wine & Good Spirits | 2020 - 2024',
    detail:
      'Built customer-facing experience through register work, stocking, product support, organization, and service-focused roles.',
  },
]

const skillItems = [
  {
    label: 'Languages',
    title: 'Programming',
    detail: 'Python, Java, JavaScript, TypeScript',
  },
  {
    label: 'Web',
    title: 'Frontend',
    detail: 'React.js, HTML, CSS',
  },
  {
    label: 'CS',
    title: 'Core Topics',
    detail: 'Data structures, software engineering, cybersecurity, network security, cryptography',
  },
]

const certificateItems = [
  {
    label: 'Certification',
    title: 'CompTIA Security+ ce',
    meta: 'Issued Mar 2025 | Expires Mar 2028',
    detail: 'Security, cryptography, network security, and cybersecurity foundations.',
  },
]

const educationItems = [
  {
    label: 'University',
    title: 'University of Delaware',
    meta: 'B.E. Computer Science | Aug 2022 - May 2026',
    detail:
      'Computer Science major with a Mathematics minor and a Cybersecurity concentration.',
  },
  {
    label: 'Activities',
    title: 'Clubs and Campus Involvement',
    detail:
      'Competitive Coding Club, Association for Computing Machinery, intramural soccer and basketball.',
  },
  {
    label: 'Fraternity',
    title: 'Sigma Phi Delta Engineering Fraternity',
    detail: 'Intramural Chair and Web Designer.',
  },
]

const programs = [
  {
    tag: 'Utility Build',
    title: 'Upcoming Systems Tool',
    description:
      'A future home for one of my practical coding projects, such as a CLI tool, automation script, or data-focused application.',
    stack: 'Python, C++, SQL',
    status: 'GitHub link coming soon',
  },
  {
    tag: 'Security Focus',
    title: 'Upcoming Cyber Lab',
    description:
      'A place for a security-oriented build like a packet analyzer, password auditing utility, or vulnerability practice project.',
    stack: 'Linux, Networking, Scripting',
    status: 'Write-up coming soon',
  },
  {
    tag: 'Math + CS',
    title: 'Upcoming Algorithm Explorer',
    description:
      'A strong spot for work that blends mathematical thinking with software engineering, including visualization or optimization.',
    stack: 'Java, Algorithms, Visualization',
    status: 'Demo coming soon',
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
  },
  {
    tag: 'Design Experiment',
    title: 'Upcoming Puzzle Game',
    description:
      'A place for a puzzle or strategy game that highlights logic, iteration, and player-focused design choices.',
    stack: 'C#, GDScript, UX iteration',
    status: 'Playable build coming soon',
  },
]

const mainProjects = [
  {
    tag: 'Featured Project',
    title: 'Upcoming Capstone Project',
    description:
      'This can become my lead academic or personal project, with a fuller story around the problem, architecture, and impact.',
    stack: 'Full-stack, APIs, Team collaboration',
    status: 'Case study coming soon',
  },
  {
    tag: 'Research / Engineering',
    title: 'Upcoming Data or Analysis Project',
    description:
      'A future project involving analytics, machine logic, cybersecurity investigation, or advanced coursework can live here.',
    stack: 'Data pipelines, reporting, testing',
    status: 'Repository coming soon',
  },
  {
    tag: 'Personal Build',
    title: 'Upcoming Passion Project',
    description:
      'A great place for something more personal that shows initiative, curiosity, and how I build outside the classroom.',
    stack: 'Preferred stack',
    status: 'Details coming soon',
  },
]

function ProjectSection({ eyebrow, title, blurb, items }) {
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
          </article>
        ))}
      </div>
    </section>
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

      <section className="hero-panel">
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
                    <dt>Minor</dt>
                    <dd>Mathematics</dd>
                  </div>
                  <div>
                    <dt>Track</dt>
                    <dd>Cybersecurity</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <p className="hero-text">
            This site is where I collect the projects, technical growth, and
            practical software work I&apos;m proud to keep building.
          </p>

          <div className="hero-actions">
            <a href="#main-projects" className="primary-link">
              View featured work
            </a>
            <a href="#programs" className="secondary-link">
              Explore sections
            </a>
          </div>
        </div>

        <aside className="hero-aside">
          <div className="system-info-window">
            <div className="dialog-titlebar">
              <span>systeminfo.pif</span>
            </div>
            <div className="system-display">
              <div className="display-preview" aria-hidden="true">
                <div className="display-initials">EF</div>
                <span className="display-line display-line-one" />
                <span className="display-line display-line-two" />
                <span className="display-pixel display-pixel-one" />
                <span className="display-pixel display-pixel-two" />
              </div>
              <dl>
                <div>
                  <dt>Location</dt>
                  <dd>Newark, Delaware</dd>
                </div>
                <div>
                  <dt>Cert</dt>
                  <dd>CompTIA Security+ ce</dd>
                </div>
                <div>
                  <dt>LinkedIn</dt>
                  <dd>/in/ethanfassnacht</dd>
                </div>
              </dl>
            </div>
          </div>

          <p className="panel-title">Quick Specs</p>
          <div className="highlight-list">
            <span className="highlight-pill">Python</span>
            <span className="highlight-pill">Java</span>
            <span className="highlight-pill">React.js</span>
            <span className="highlight-pill">TypeScript</span>
          </div>

          <div className="note-card">
            <p className="note-title">Project links coming online</p>
            <p>
              Each project area below is ready for real repository links,
              screenshots, and write-ups once they are ready to publish.
            </p>
          </div>
        </aside>

      </section>

      <section className="intro-band">
        <div>
          <p className="band-label">Focus Areas</p>
          <p>
            Software development, problem solving, cybersecurity thinking, and
            projects that show both technical skill and initiative.
          </p>
        </div>
        <div>
          <p className="band-label">Current Stage</p>
          <p>
            Senior year portfolio in progress, designed to grow alongside my
            GitHub and future internship or full-time applications.
          </p>
        </div>
      </section>

      <InfoWindow id="experience" title="experience.exe" items={experienceItems} />

      <InfoWindow
        compact
        id="skills"
        title="skills-certificates.cpl"
        items={[...skillItems, ...certificateItems]}
      />

      <InfoWindow
        id="education"
        title="education-extracurriculars.grp"
        items={educationItems}
      />

      <div className="content-stack">
        <div id="programs">
          <ProjectSection
            eyebrow="Programs"
            title="Code that solves practical problems"
            blurb="Applications, tools, utilities, and technical experiments that show how I think through problems and build toward working software."
            items={programs}
          />
        </div>

        <div id="games">
          <ProjectSection
            eyebrow="Games"
            title="Interactive builds and gameplay experiments"
            blurb="Prototypes, class projects, and game ideas that highlight creativity, systems thinking, and iteration."
            items={games}
          />
        </div>

        <div id="main-projects">
          <ProjectSection
            eyebrow="Main Projects"
            title="The projects I want people to remember"
            blurb="My strongest work belongs here, especially projects with clear impact, deeper architecture, or a story worth walking through."
            items={mainProjects}
          />
        </div>
      </div>
    </main>
  )
}

export default App
