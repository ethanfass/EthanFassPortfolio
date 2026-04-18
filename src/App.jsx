import './App.css'

const highlights = [
  'B.S. in Computer Science',
  'Mathematics Minor',
  'Cybersecurity Concentration',
]

const programs = [
  {
    tag: 'Utility Build',
    title: 'Systems Tool Placeholder',
    description:
      'A future home for one of your practical coding projects, such as a CLI tool, automation script, or data-focused application.',
    stack: 'Python, C++, SQL',
    status: 'GitHub link coming soon',
  },
  {
    tag: 'Security Focus',
    title: 'Cyber Lab Placeholder',
    description:
      'Use this card for a security-oriented build like a packet analyzer, password auditing utility, or vulnerability practice project.',
    stack: 'Linux, Networking, Scripting',
    status: 'Write-up coming soon',
  },
  {
    tag: 'Math + CS',
    title: 'Algorithm Explorer Placeholder',
    description:
      'A strong spot for a project that blends mathematical thinking with software engineering, including visualization or optimization work.',
    stack: 'Java, Algorithms, Visualization',
    status: 'Demo coming soon',
  },
]

const games = [
  {
    tag: 'Game Prototype',
    title: 'Arcade Project Placeholder',
    description:
      'Showcase a fast-paced game prototype here with mechanics, level design ideas, and any custom systems you built.',
    stack: 'Unity or Godot',
    status: 'Gameplay footage coming soon',
  },
  {
    tag: 'Design Experiment',
    title: 'Puzzle Game Placeholder',
    description:
      'Reserve this area for a puzzle or strategy game that highlights logic, iteration, and player-focused design choices.',
    stack: 'C#, GDScript, UX iteration',
    status: 'Playable build coming soon',
  },
]

const mainProjects = [
  {
    tag: 'Featured Project',
    title: 'Capstone Placeholder',
    description:
      'This can become your lead academic or personal project with a fuller story around the problem, architecture, and impact.',
    stack: 'Full-stack, APIs, Team collaboration',
    status: 'Case study coming soon',
  },
  {
    tag: 'Research / Engineering',
    title: 'Data or Analysis Placeholder',
    description:
      'Use this for a project involving analytics, machine logic, cybersecurity investigation, or advanced coursework.',
    stack: 'Data pipelines, reporting, testing',
    status: 'Repository coming soon',
  },
  {
    tag: 'Personal Build',
    title: 'Passion Project Placeholder',
    description:
      'A great place for something more personal that shows initiative, curiosity, and how you build outside the classroom.',
    stack: 'Your preferred stack',
    status: 'Details coming soon',
  },
]

function ProjectSection({ eyebrow, title, blurb, items }) {
  return (
    <section className="section-block">
      <div className="section-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p className="section-copy">{blurb}</p>
      </div>

      <div className="card-grid">
        {items.map((item) => (
          <article className="project-card" key={item.title}>
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

function App() {
  return (
    <main className="page-shell">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio</p>
          <h1>
            Senior computer science student building thoughtful software with a
            mathematical and security-minded foundation.
          </h1>
          <p className="hero-text">
            I&apos;m pursuing a B.S. in Computer Science, with a minor in
            Mathematics and a concentration in Cybersecurity. This site is a
            space to highlight my projects, technical growth, and the work
            I&apos;m proud to keep building.
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
          <p className="panel-title">At a glance</p>
          <div className="highlight-list">
            {highlights.map((item) => (
              <span className="highlight-pill" key={item}>
                {item}
              </span>
            ))}
          </div>

          <div className="note-card">
            <p className="note-title">GitHub placeholders are live for now</p>
            <p>
              Each project area below is ready for real repository links,
              screenshots, and write-ups once you publish them.
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
            Senior year portfolio in progress, designed to grow alongside your
            GitHub and future internship or full-time applications.
          </p>
        </div>
      </section>

      <div className="content-stack">
        <div id="programs">
          <ProjectSection
            eyebrow="Programs"
            title="Code that solves practical problems"
            blurb="Use this section for applications, tools, utilities, and technical experiments that show how you think and build."
            items={programs}
          />
        </div>

        <div id="games">
          <ProjectSection
            eyebrow="Games"
            title="Interactive builds and gameplay experiments"
            blurb="This section is ideal for prototypes, class projects, and game ideas that highlight creativity, systems thinking, and iteration."
            items={games}
          />
        </div>

        <div id="main-projects">
          <ProjectSection
            eyebrow="Main Projects"
            title="The projects you want people to remember"
            blurb="Feature your strongest work here, especially projects with clear impact, deeper architecture, or a story worth walking through."
            items={mainProjects}
          />
        </div>
      </div>
    </main>
  )
}

export default App
