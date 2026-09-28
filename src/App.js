import React, { useState } from 'react';
import './App.css';
import {
  activity,
  capabilities,
  careerChapters,
  podcastEpisodes,
  privateBuilds,
  projects,
} from './data/publicWork';

const filters = ['All', 'Build', 'Podcast', 'Speaking', 'Writing', 'Community', 'Milestone'];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function ExternalLink({ href, children, className = '' }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children} <ArrowIcon />
    </a>
  );
}

function handleSpeakingInvite(event) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const eventName = form.get('event');
  const subject = encodeURIComponent(`Speaking invitation: ${eventName}`);
  const body = encodeURIComponent([
    'Hi Steinn,',
    '',
    'I have a stage, room, microphone, or similarly dangerous opportunity:',
    '',
    `Name: ${form.get('name')}`,
    `Email: ${form.get('email')}`,
    `Event: ${eventName}`,
    `Format: ${form.get('format')}`,
    `When / where: ${form.get('logistics') || 'Still figuring that out'}`,
    '',
    'The interesting bit:',
    form.get('idea'),
    '',
    'Cheers,',
    form.get('name'),
  ].join('\n'));

  window.location.href = `mailto:steinzi@steinzi.com?subject=${subject}&body=${body}`;
}

function ProjectCard({ project, index }) {
  return (
    <article className={`project-card project-card--${project.tone}`}>
      <div className="project-card__topline">
        <span className="eyebrow">0{index + 1} / {project.kind}</span>
        <span className="project-card__year">{project.year}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tag-row" aria-label={`${project.title} topics`}>
        {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
      </div>
      <ExternalLink href={project.url} className="text-link">{project.cta}</ExternalLink>
    </article>
  );
}

function App() {
  const [activeFilter, setActiveFilter] = useState('All');
  const visibleActivity = activeFilter === 'All'
    ? activity
    : activity.filter((item) => item.category === activeFilter);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Steinzi, back to top">
          <span className="wordmark__mark">SØ</span>
          <span>Steinzi</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#why">Why me</a>
          <a href="#work">Work</a>
          <a href="#record">Public record</a>
          <a href="#book">Book me</a>
        </nav>
        <ExternalLink href="mailto:steinzi@steinzi.com" className="header-cta">Say hello</ExternalLink>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero__copy">
            <p className="kicker"><span className="status-dot" /> Reykjavík, Iceland · online & opinionated</p>
            <h1>I help AI survive contact with the <em>business for money.</em></h1>
            <p className="hero__lede">
              I’m Steinn Örvar Bjarnarson — Steinzi is easier. I turn messy processes, legacy
              systems, and ambitious AI ideas into useful automation that real teams can trust.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#why">Get the pitch <span aria-hidden="true">↓</span></a>
              <a className="button button--ghost" href="#record">Check the receipts <span aria-hidden="true">↓</span></a>
            </div>
          </div>

          <div className="hero__visual" aria-label="Portrait of Steinn Örvar Bjarnarson">
            <div className="portrait-frame">
              <img src="/steinn.jpeg" alt="Steinn Örvar Bjarnarson" />
              <span className="portrait-note portrait-note--top">CCIE #60715</span>
              <span className="portrait-note portrait-note--bottom">less AI theatre,<br />more working systems</span>
            </div>
          </div>
        </section>

        <section className="signal-strip" aria-label="Career highlights at a glance">
          <div><strong>15+</strong><span>years in real systems</span></div>
          <div><strong>#60715</strong><span>CCIE, earned at 27</span></div>
          <div><strong>5</strong><span>AutoCon appearances</span></div>
          <div><strong>11</strong><span>podcast episodes</span></div>
        </section>

        <section className="pitch section" id="why">
          <div className="pitch__intro">
            <div>
              <p className="eyebrow">The Steinzi pitch, since you asked</p>
              <h2>I know what happens <em>after</em> the clever demo.</h2>
            </div>
            <div className="pitch__summary">
              <p>
                I am at my most useful when the process is messy, the systems are old, and somebody
                has already said, “couldn’t we just use AI?”
              </p>
              <p>
                Fifteen-plus years in infrastructure taught me to care about failure, access,
                operations, and the people on call. Product development taught me to make all of
                that usable. AI is the newest tool in the box, not an exemption from reality.
              </p>
            </div>
          </div>

          <div className="capability-grid">
            {capabilities.map((capability) => (
              <article className="capability" key={capability.number}>
                <span className="capability__number">{capability.number}</span>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
                <strong>{capability.note}</strong>
              </article>
            ))}
          </div>

          <div className="career">
            <div className="career__heading">
              <p className="eyebrow">The long version, still aggressively abridged</p>
              <h3>From soldering irons to AI agents.</h3>
              <p>
                The through-line was never “networking.” It was taking complicated systems,
                making them safer and easier to operate, and then convincing humans the new way
                is less painful.
              </p>
            </div>
            <div className="career__chapters">
              {careerChapters.map((chapter, index) => (
                <article className={`career-chapter career-chapter--${chapter.accent}`} key={chapter.years}>
                  <div className="career-chapter__meta">
                    <span>Act {index + 1}</span>
                    <time>{chapter.years}</time>
                  </div>
                  <h4>{chapter.title}</h4>
                  <p>{chapter.description}</p>
                </article>
              ))}
            </div>
            <aside className="career__review">
              <div>
                <p className="eyebrow">One unsolicited witness statement</p>
                <blockquote>
                  An independent AutoCon recap called the talk “feisty,” the story “truly amusing,”
                  and then — somewhat alarmingly — praised the technical depth and practical lessons.
                </blockquote>
              </div>
              <ExternalLink href="https://codilime.com/news/autocon1-conference-summary/" className="text-link">Read someone else’s opinion</ExternalLink>
            </aside>
          </div>
        </section>

        <section className="section" id="work">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>The public bits<br />I can show you.</h2>
            </div>
            <p>
              Open-source tools, a podcast, community building, and enough public material to prove
              this is not a very elaborate LinkedIn phase — plus one suspiciously blank file.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
            <article className="project-card classified-card">
              <div className="project-card__topline">
                <span className="eyebrow">05 / Classified</span>
                <span className="project-card__year">[redacted]—now</span>
              </div>
              <div className="classified-card__bars" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <h3>The actually cool stuff.</h3>
              <p>
                I wish I could tell you about the coolest stuff I work on, but the lawyers made me
                sign an NDA and took my firstborn son. I miss him.
              </p>
              <span className="classified-card__stamp">Approved by absolutely nobody</span>
            </article>
          </div>
        </section>

        <section className="podcast-feature">
          <div className="podcast-feature__intro">
            <p className="eyebrow">Network Automagic</p>
            <h2>AI, automation, and infrastructure —<br />with the varnish removed.</h2>
            <p>
              Urs Baumann and I talk to the people building the tools — from Temporal and Pulumi
              to agents, MCP, and everything between “nice demo” and production. Occasionally
              somebody says “agentic” and we make them explain what they mean.
            </p>
            <ExternalLink href="https://www.youtube.com/@networkautomagic" className="button button--light">Watch on YouTube</ExternalLink>
          </div>
          <div className="episode-list">
            {podcastEpisodes.map((episode) => (
              <ExternalLink href={episode.url} className="episode" key={episode.number}>
                <span className="episode__number">{episode.number}</span>
                <span className="episode__title">{episode.title}</span>
                <time dateTime={episode.date}>{episode.label}</time>
              </ExternalLink>
            ))}
          </div>
        </section>

        <section className="section record-section" id="record">
          <div className="section-heading section-heading--record">
            <div>
              <p className="eyebrow">2018 — now · independently clickable</p>
              <h2>The public record.</h2>
            </div>
            <p>
              Talks, workshops, releases, guest appearances, articles, and community work — each
              linked to a public source. Not every commit or LinkedIn thought; the durable things
              worth making another human click. Because vibes are not a citation.
            </p>
          </div>

          <div className="filters" aria-label="Filter public activity">
            {filters.map((filter) => (
              <button
                className={activeFilter === filter ? 'filter is-active' : 'filter'}
                key={filter}
                onClick={() => setActiveFilter(filter)}
                type="button"
              >
                {filter}
              </button>
            ))}
          </div>

          {activeFilter === 'Build' && (
            <section className="private-builds" aria-labelledby="private-builds-title">
              <div className="private-builds__heading">
                <p className="eyebrow">The NDA-friendly version</p>
                <h3 id="private-builds-title">Things I built but cannot show you.</h3>
                <p>Specific enough to be interesting. Vague enough to keep my remaining family members.</p>
              </div>
              <div className="private-builds__grid">
                {privateBuilds.map((item, index) => (
                  <article className="private-build" key={item.title}>
                    <div className="private-build__meta">
                      <span>0{index + 1}</span>
                      <span>[internal]</span>
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <strong>{item.punchline}</strong>
                  </article>
                ))}
              </div>
            </section>
          )}

          <div className="activity-list" aria-live="polite">
            {visibleActivity.map((item) => (
              <article className="activity-item" key={`${item.date}-${item.title}`}>
                <time dateTime={item.date}>{item.label}</time>
                <div>
                  <span className={`category category--${item.category.toLowerCase()}`}>{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <ExternalLink href={item.url} className="activity-link"><span className="sr-only">View {item.title}</span></ExternalLink>
              </article>
            ))}
          </div>
        </section>

        <section className="about" id="about">
          <div className="about__headline">
            <p className="eyebrow">About</p>
            <h2>Builder.<br />Teacher.<br /><em>Professional skeptic.</em></h2>
          </div>
          <div className="about__copy">
            <p className="about__lead">
              I’m a Lead Product Development Engineer at Advania, working where AI, software,
              operations, legacy systems, and business processes collide — usually at speed.
            </p>
            <p>
              I started in electronics and physical security, spent years designing and operating
              business-critical networks, taught networking on the side, and went back to university
              at night for a BSc in computer science. Along the way came CCIE #60715, CKAD, RHCSA,
              and a suspicious number of other certifications because apparently I used to enjoy exams.
            </p>
            <p>
              Now I use models, agents, MCP, APIs, and dependable workflows to remove friction from
              infrastructure and business processes. Away from the confidential work, I host Network
              Automagic, founded ISNOG, maintain open-source projects, teach workshops, and occasionally
              explain that automating a bad process only makes the bad process faster.
            </p>
            <div className="link-stack">
              <ExternalLink href="https://www.linkedin.com/in/steinn-%C3%B6rvar-a3436613b/">LinkedIn</ExternalLink>
              <ExternalLink href="https://github.com/steinzi">GitHub</ExternalLink>
              <ExternalLink href="https://www.youtube.com/@networkautomagic">YouTube</ExternalLink>
              <ExternalLink href="https://docs.google.com/document/d/e/2PACX-1vTXTHtrLosl2crQKu_O9DDMxuTyJ7sL4l3g37R781JXPgxZzAh_idvZW4FBAFrRoO2PByJJl9q46F7E/pub">CV</ExternalLink>
            </div>
          </div>
        </section>

        <section className="booking" id="book">
          <div className="booking__inner">
            <div className="booking__pitch">
              <p className="eyebrow">Conferences, workshops & questionable panel decisions</p>
              <h2>Put me on a stage.<br /><em>I’ll bring the useful skepticism.</em></h2>
              <p>
                I speak about AI automation that works beyond the demo, agents and MCP,
                business processes, infrastructure, integrating modern ideas with legacy systems,
                and the much harder problem of getting teams to actually use the tooling. If your
                audience likes practical ideas and honest failure stories, we should talk.
              </p>
              <div className="booking__topics" aria-label="Possible speaking topics">
                <span>AI beyond the demo</span>
                <span>How not to automate a mess</span>
                <span>Agents, MCP & tools</span>
                <span>Legacy systems, modern automation</span>
                <span>Getting teams to actually use the thing</span>
                <span>From networks to everything</span>
              </div>
            </div>

            <form className="booking-form" onSubmit={handleSpeakingInvite}>
              <p className="booking-form__intro">Give me the useful bits.</p>
              <label>
                <span>Your name</span>
                <input autoComplete="name" name="name" placeholder="A real human, ideally" required />
              </label>
              <label>
                <span>Your email</span>
                <input autoComplete="email" name="email" placeholder="you@somewhere.com" required type="email" />
              </label>
              <label className="booking-form__wide">
                <span>What’s the occasion?</span>
                <input name="event" placeholder="Conference, company off-site, podcast…" required />
              </label>
              <label>
                <span>What are we doing?</span>
                <select defaultValue="Conference talk" name="format">
                  <option>Conference talk</option>
                  <option>Hands-on workshop</option>
                  <option>Panel or fireside chat</option>
                  <option>Podcast or interview</option>
                  <option>Something hard to categorize</option>
                </select>
              </label>
              <label>
                <span>When and where?</span>
                <input name="logistics" placeholder="Reykjavík, October-ish" />
              </label>
              <label className="booking-form__wide">
                <span>What’s the interesting bit?</span>
                <textarea name="idea" placeholder="Tell me about the audience, the problem, and the idea you cannot stop thinking about." required rows="5" />
              </label>
              <div className="booking-form__send booking-form__wide">
                <button aria-describedby="booking-note" className="button button--booking" type="submit">Invite the opinions <ArrowIcon /></button>
                <p id="booking-note">No funnel. No mystery database. This opens a pre-filled email; nothing leaves until you send it.</p>
              </div>
            </form>
          </div>
        </section>

        <section className="contact">
          <p className="eyebrow">Not a conference?</p>
          <h2>Something else entirely?<br />My inbox still works. <em>Against all odds.</em></h2>
          <ExternalLink href="mailto:steinzi@steinzi.com" className="contact__link">steinzi@steinzi.com</ExternalLink>
        </section>
      </main>

      <footer>
        <span>© 2026 Steinn Örvar Bjarnarson</span>
        <span>Built in Iceland. Legal has not reviewed this sentence.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
