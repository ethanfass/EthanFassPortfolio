import './App.css'

const highlights = [
  'Senior Computer Science Student',
  'Mathematics Minor',
  'Cybersecurity Concentration',
  'Software + Security Focus',
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
          <p className="eyebrow">Portfolio room / Ethan Fassnacht</p>
          <h1>Ethan Fassnacht</h1>
          <p className="hero-text">
            I&apos;m a senior Computer Science student pursuing a Mathematics
            minor and a Cybersecurity concentration. This site is where I
            collect the projects, technical growth, and practical software work
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
          <div className="chat-window" aria-hidden="true">
            <div className="chat-window-bar">
              <span />
              <span />
              <span />
            </div>
            <div className="sketch-pad">
              <div className="doodle-name">EF</div>
              <span className="doodle-line doodle-line-one" />
              <span className="doodle-line doodle-line-two" />
              <span className="doodle-dot doodle-dot-one" />
              <span className="doodle-dot doodle-dot-two" />
            </div>
            <div className="mini-thread">
              <p>currently building</p>
              <p>software, games, and security-minded projects</p>
            </div>
          </div>

          <p className="panel-title">Room Notes</p>
          <div className="highlight-list">
            {highlights.map((item) => (
              <span className="highlight-pill" key={item}>
                {item}
              </span>
            ))}
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
