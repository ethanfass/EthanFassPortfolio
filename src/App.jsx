import { useEffect, useState } from 'react'
import './App.css'
import profilePhoto from './assets/ef-profile-photo.png'
import nbaHoopScreenshot from './assets/nbahoop.png'
import resumePdf from './assets/Ethan Fassnacht Resume Spring26.pdf.pdf'

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
  {
    label: 'Customer Service',
    title: 'Customer Service Associate & Helping Hands Member',
    meta: 'Wegmans Food Markets | Warrington, PA | Aug 2021 - May 2023',
    detail:
      'Processed register transactions, organized and pulled shopping carts, cleaned the parking lot, and helped customers transfer groceries to their cars.',
  },
  {
    label: 'Food Service',
    title: 'Customer Service Associate',
    meta: 'Wawa, Inc. | Warrington, PA | Aug 2020 - Aug 2021',
    detail:
      'Worked as a cashier and behind the counter preparing food, handling transactions, and providing excellent customer service.',
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
  {
    label: 'Resume',
    title: 'See complete resume',
    meta: 'Spring 2026 | .pdf',
    detail: 'Open the full resume in a themed window.',
    actionType: 'openResume',
    actionLabel: 'Open resume',
  },
]

const programs = [
  {
    tag: 'Fitness App',
    title: 'Muscle Tracker',
    description:
      'Create custom workout plans by adding exercises from a list, then visualize exactly which muscle groups are targeted and how intensely each movement affects your body.',
    stack: 'React, workout planning, muscle mapping',
    status: 'Live app demo',
    demoUrl: 'https://muscletrackerapp.netlify.app/',
    repoUrl: '',
  },
  {
    tag: 'Sports Analytics',
    title: 'NBA Stat Comparison',
    description:
      'Interactive stat-comparison concept for checking NBA players side-by-side. This portfolio demo currently uses a static screenshot preview.',
    stack: 'React, APIs, stat comparison UI',
    status: 'Screenshot preview',
    demoUrl: nbaHoopScreenshot,
    repoUrl: '',
  },
  {
    tag: 'Security Utility',
    title: 'Secure Password Generator',
    description:
      'Generates strong passwords with a built-in security checklist, multiple password strength levels, and password history tracking.',
    stack: 'JavaScript, security checklist, password history',
    status: 'Live app demo',
    demoUrl: 'https://securepwgenerator.netlify.app/',
    repoUrl: '',
  },
]

const games = [
  {
    tag: 'Roguelike Shooter',
    title: 'Rogube',
    description:
      'A simple roguelike inspired by The Binding of Isaac where you play as Cymon fighting computer bugs across 8 increasingly difficult waves, collecting items between rounds, and facing a final boss after wave 8.',
    stack: 'Phaser - roguelike shooter',
    status: 'Live on itch.io',
    demoUrl: 'https://ethfass74.itch.io/rogube',
    windowVariant: 'large',
    repoUrl: '',
  },
  {
    tag: 'Arcade Matching Game',
    title: 'Opposites Attract',
    description:
      'A fast-paced matching game where you pair characters by opposite personalities and interests, build streaks before time runs out, and adapt as levels increase difficulty with more variety, smaller characters, and tighter spaces.',
    stack: 'Godot - puzzle/pattern recognition',
    status: 'Live on itch.io',
    demoUrl: 'https://ethfass74.itch.io/oa',
    repoUrl: '',
  },
  {
    tag: 'Educational Simulation',
    title: 'Emails Please',
    description:
      'A Papers, Please-inspired educational game where you work for a cybersecurity firm reviewing phishing emails, identifying red flags, and making risk decisions under pressure.',
    stack: 'Phaser - cybersecurity education',
    status: 'Live on itch.io, in development.',
    demoUrl: 'https://ethfass74.itch.io/emailsplease',
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
    demoUrl: 'https://udspd.netlify.app/',
    repoUrl: '',
  },
  {
    tag: 'Pokemon Team Builder',
    title: 'PartyDex',
    description:
      'Build custom Pokemon teams by game generation using the PokeAPI, with detailed features for creating and refining teams across different games.',
    stack: 'React, PokeAPI, custom team builder',
    status: 'Live app demo',
    demoUrl: 'https://partydex.netlify.app/',
    repoUrl: '',
  },
  {
    tag: 'Cybersecurity Automation',
    title: 'AI Questionnaire Scoring Tool',
    description:
      'Built a system that uses Python and Google Gemini to generate a scoring rubric and evaluate cybersecurity questionnaires for companies that cannot afford formal ISO testing, then produces a comprehensive Excel report with scores and prioritized next-step improvements.',
    stack: 'Python, Google Gemini, cybersecurity assessment, Excel reporting',
    status: 'In progress - private project',
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
]

const resumeProject = {
  tag: 'Resume File',
  title: 'Ethan Fassnacht Resume Spring26',
  description: 'Full resume preview rendered inside this window.',
  stack: 'PDF document (.pdf)',
  status: 'Spring 2026',
  demoUrl: resumePdf,
  previewType: 'pdf',
  repoUrl: '',
}

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
          <article
            className="project-card project-card-clickable"
            key={item.title}
            role="button"
            tabIndex={0}
            onClick={(event) => {
              if (event.target.closest('button, a')) {
                return
              }

              onOpenProject(item)
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                onOpenProject(item)
              }
            }}
          >
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
                {item.demoUrl ? 'Launch app' : 'Open window'}
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

  const isResumePreview = project.previewType === 'pdf'

  const isImageDemo =
    typeof project.demoUrl === 'string' &&
    /\.(png|jpe?g|gif|webp|svg)(\?.*)?$/i.test(project.demoUrl)

  let demoAddress = ''

  if (project.demoUrl) {
    try {
      const parsedDemoUrl = new URL(project.demoUrl)
      demoAddress = `${parsedDemoUrl.hostname}${parsedDemoUrl.pathname}`
    } catch {
      demoAddress = project.demoUrl
    }
  }

  return (
    <div className="project-modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className={`project-demo-window${project.windowVariant === 'large' ? ' project-demo-window-large' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-window-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="project-window-titlebar">
          <span id="project-window-title">{project.title}</span>
          <button type="button" onClick={onClose} aria-label="Close project window">
            x
          </button>
        </div>

        <div className="project-window-toolbar">
          <span>{project.stack}</span>
          <span>{project.status}</span>
        </div>

        {isResumePreview ? (
          <div className="resume-preview-shell">
            <div className="resume-preview-header">
              <span>Document preview</span>
              <a href={project.demoUrl} target="_blank" rel="noreferrer" className="resume-preview-open-link">
                Open in new tab
              </a>
            </div>

            <div className="resume-preview-canvas">
              <iframe
                title="Resume preview"
                src={`${project.demoUrl}#view=FitH`}
                className="resume-pdf-frame"
                loading="lazy"
              />
            </div>
          </div>
        ) : project.demoUrl ? (
          <div className="browser-shell">
            <div className="browser-tab-row" aria-hidden="true">
              <span className="browser-tab browser-tab-active">{project.title}</span>
              <span className="browser-tab browser-tab-add">+</span>
            </div>

            <div className="browser-address-row">
              <span className="browser-nav" aria-hidden="true">
                <span />
                <span />
              </span>
              <span className="browser-address">{demoAddress}</span>
              <a href={project.demoUrl} target="_blank" rel="noreferrer">
                Open in tab
              </a>
            </div>

            <div className="project-demo-frame-wrap">
              {isImageDemo ? (
                <img
                  src={project.demoUrl}
                  alt={`${project.title} screenshot`}
                  className="project-demo-image"
                  loading="lazy"
                />
              ) : (
                <iframe
                  title={`${project.title} live demo`}
                  src={project.demoUrl}
                  className="project-demo-frame"
                  loading="lazy"
                />
              )}
            </div>
          </div>
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

function InfoWindow({ id, title, items, compact = false, onOpenResume }) {
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
            {item.actionType === 'openResume' && onOpenResume ? (
              <div className="project-actions resume-actions">
                <button type="button" onClick={onOpenResume}>
                  {item.actionLabel ?? 'Open'}
                </button>
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}

function App() {
  const [activeProject, setActiveProject] = useState(null)

  const openResumeWindow = () => {
    setActiveProject(resumeProject)
  }

  useEffect(() => {
    if (!activeProject) {
      return
    }

    document.body.classList.add('project-modal-open')

    return () => {
      document.body.classList.remove('project-modal-open')
    }
  }, [activeProject])

  useEffect(() => {
    if (!activeProject) {
      return
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setActiveProject(null)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [activeProject])

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
          <span>PORTFOLIO.OS</span>
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
              <span>ABOUT.DAT</span>
            </div>

            <div className="profile-body">
              <img
                className="portrait-icon"
                src={profilePhoto}
                alt="Ethan Fassnacht"
              />
              <div className="profile-fields">
                <p className="eyebrow">Portfolio room / Ethan Fassnacht</p>
                <h1>Ethan Fassnacht</h1>
                <dl>
                  <div>
                    <dt>Status</dt>
                    <dd>Senior Computer Science Major (B.S.)</dd>
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
            Senior Computer Science major at the University of Delaware focused
            on cybersecurity, with a strong interest in penetration testing,
            security engineering, and data analysis.
          </p>

          <div className="hero-actions">
            <a href="#main-projects" className="primary-link">
              View featured work
            </a>
            <button
              type="button"
              className="secondary-link hero-action-button"
              onClick={openResumeWindow}
            >
              View resume
            </button>
            <a href="#experience" className="secondary-link mint-link">
              View experience
            </a>
          </div>
        </div>

      </section>

      <section className="intro-band">
        <div>
          <p className="band-label">Focus Areas</p>
          <p>
            I focus on log investigations, Python automation, incident
            reporting, and Java/OOP support. I also build React websites, work
            with SQL, and regularly use security tools like Splunk, Burp Suite,
            SOAR, and Metasploit.
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

      <InfoWindow
        id="education"
        title="education-extracurriculars.grp"
        items={educationItems}
        onOpenResume={openResumeWindow}
      />

      <InfoWindow id="experience" title="experience.log" items={experienceItems} />

      <InfoWindow
        compact
        id="skills"
        title="skills-certificates.cpl"
        items={[...skillItems, ...certificateItems, ...classItems]}
      />

      <div className="content-stack">
        <div id="main-projects">
          <ProjectSection
            eyebrow="Main Projects"
            title="Featured Projects"
            blurb="These are some of the main projects I&apos;ve built recently. They reflect the kinds of tools and websites I enjoy making, from passion-fueled projects to more detailed technical applications."
            items={mainProjects}
            onOpenProject={setActiveProject}
          />
        </div>

        <div id="games">
          <ProjectSection
            eyebrow="Games"
            title="Games"
            blurb="This section includes games I&apos;ve made both for school and in my own time. I enjoy building games because it gives me a chance to be creative, solve problems, and turn ideas into something people can actually play."
            items={games}
            onOpenProject={setActiveProject}
          />
        </div>

        <div id="programs">
          <ProjectSection
            eyebrow="Programs"
            title="Programs I&apos;ve Made"
            blurb="This section includes some of the simpler programs I built early on, with projects focused on things like fitness, NBA stats, and password generation. They show the kinds of problems I was interested in solving and how I started turning ideas into working software."
            items={programs}
            onOpenProject={setActiveProject}
          />
        </div>
      </div>

      <InfoWindow compact id="contact" title="contact.ini" items={contactItems} />

      <ProjectWindow
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </main>
  )
}

export default App
