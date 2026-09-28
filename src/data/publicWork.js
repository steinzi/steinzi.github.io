export const projects = [
  {
    title: 'Network Automagic',
    kind: 'Podcast',
    year: '2025—now',
    description: 'A long-form show with Urs Baumann about AI, automation, infrastructure, the people building the tools, and what survives outside a demo environment.',
    tags: ['11 episodes', 'video + audio', 'interviews'],
    url: 'https://networkautomagic.net',
    cta: 'Explore the show',
    tone: 'acid',
  },
  {
    title: 'ISNOG',
    kind: 'Community',
    year: '2025—now',
    description: 'I founded the Icelandic Network Operators Group to give the local infrastructure community a room, a stage, and a reason to meet. Event zero brought together roughly 100 people.',
    tags: ['Iceland', 'community', '~100 at ISNOG #0'],
    url: 'https://isnog.is',
    cta: 'Visit ISNOG',
    tone: 'cyan',
  },
  {
    title: 'Network Automation Landscape',
    kind: 'Open source',
    year: '2024—now',
    description: 'A community-maintained map of the sprawling tools, products, and projects that make up modern network automation.',
    tags: ['50+ GitHub stars', 'community-maintained', 'landscape2'],
    url: 'https://steinzi.com/network-automation-landscape/',
    cta: 'Open the landscape',
    tone: 'paper',
  },
  {
    title: 'netlab-mcp',
    kind: 'Open source',
    year: '2026',
    description: 'An MCP server that wraps netlab so language models can work from rendered, lab-tested network configurations instead of confident guesses.',
    tags: ['Python', 'MCP', 'containerlab'],
    url: 'https://github.com/steinzi/netlab-mcp',
    cta: 'View on GitHub',
    tone: 'blue',
  },
];

export const capabilities = [
  {
    number: '01',
    title: 'Find the real problem',
    description: 'Trace the actual process across people, spreadsheets, APIs, ticket queues, and legacy systems before anyone spends six months automating the wrong bit.',
    note: 'Process archaeology, but with fewer little brushes.',
  },
  {
    number: '02',
    title: 'Build the useful version',
    description: 'Turn the good idea into an operable system: agents, MCP tools, APIs, workflows, tests, approvals, observability, and very clear places where the AI is not allowed to improvise.',
    note: 'The demo is allowed to become infrastructure.',
  },
  {
    number: '03',
    title: 'Make it safe enough to respect, not trust',
    description: 'Keep credentials out of model context, gate access by session and role, put humans on the consequential decisions, and design failure as a normal operating condition.',
    note: 'Useful autonomy. Adult supervision included.',
  },
  {
    number: '04',
    title: 'Get humans to use it',
    description: 'Polish the interface, fit the tool to the team, teach the why, document the awkward bits, and listen when the people doing the work say the clever solution is annoying.',
    note: 'Adoption is a feature. Apparently.',
  },
];

export const careerChapters = [
  {
    years: '2010—2016',
    title: 'Hardware first. Consequences included.',
    description: 'Started in electronics, physical security, CCTV, and IT services before moving deep into network operations. The machines were physical, the customers were real, and a bad change could ruin everyone’s afternoon.',
    accent: 'cyan',
  },
  {
    years: '2017—2022',
    title: 'Expertise, then a deliberate escape from the box.',
    description: 'Joined Advania as a principal network engineer, became Iceland’s youngest CCIE at the time, taught networking, earned a computer-science degree at night, and learned enough software to stop accepting repetitive work as a law of nature.',
    accent: 'acid',
  },
  {
    years: '2022—2024',
    title: 'Automation became a product, not a folder of scripts.',
    description: 'Moved into lead product development, built cross-vendor automation and source-of-truth systems, replaced legacy tooling, and learned that the hard part is rarely the API. It is the process, the ownership, and Gary’s spreadsheet.',
    accent: 'orange',
  },
  {
    years: '2023—now',
    title: 'AI met the business. Both survived.',
    description: 'Started speaking publicly about generative AI in 2023 and now builds controlled AI automation across infrastructure and business processes: internal MCPs, authorized sessions, human approval, secret-safe tooling, and systems people will actually use.',
    accent: 'blue',
  },
];

export const podcastEpisodes = [
  { number: '011', title: 'Netlab, ACLs and AI-Generated Configs with Ivan Pepelnjak', date: '2026-08-07', label: 'Aug 2026', url: 'https://networkautomagic.net/podcast/na011/' },
  { number: '010', title: 'The Future of Platform Engineering with Stuart Clark', date: '2026-04-26', label: 'Apr 2026', url: 'https://networkautomagic.net/podcast/na010/' },
  { number: '009', title: 'The Square Table — AI, Hype, and the Future of Network Engineering', date: '2026-04-03', label: 'Apr 2026', url: 'https://networkautomagic.net/podcast/na009/' },
  { number: '008', title: 'AI and Automation: MCP vs CLI with Calvin Remsburg', date: '2026-03-27', label: 'Mar 2026', url: 'https://networkautomagic.net/podcast/na008/' },
  { number: '007', title: 'Pulumi with Scott Lowe', date: '2026-03-23', label: 'Mar 2026', url: 'https://networkautomagic.net/podcast/na007/' },
  { number: '006', title: 'AI Hype with Peter Sprygada', date: '2025-10-10', label: 'Oct 2025', url: 'https://networkautomagic.net/podcast/na006/' },
  { number: '005', title: 'HPE Juniper Mist Automation and the SSR400 Launch', date: '2025-09-15', label: 'Sep 2025', url: 'https://networkautomagic.net/podcast/na005/' },
  { number: '004', title: 'AutoCon 3 Hallway Track', date: '2025-06-23', label: 'Jun 2025', url: 'https://networkautomagic.net/podcast/na004/' },
  { number: '003', title: 'NUTS with Marco Martinez', date: '2025-04-10', label: 'Apr 2025', url: 'https://networkautomagic.net/podcast/na003/' },
  { number: '002', title: 'Infrahub with Damien Garros', date: '2025-03-05', label: 'Mar 2025', url: 'https://networkautomagic.net/podcast/na002/' },
  { number: '001', title: 'Temporal with Ryan Shaw', date: '2025-02-13', label: 'Feb 2025', url: 'https://networkautomagic.net/podcast/na001/' },
];

export const privateBuilds = [
  {
    title: 'The IT infrastructure automation harness that joined the team',
    description: 'Built an end-to-end IT infrastructure automation harness spanning networks, virtual machines, and Linux, with enough interface and operational polish to feel like a dependable teammate instead of a pile of scripts wearing a trench coat.',
    punchline: 'Takes work in. Follows the process. Explains what it did.',
  },
  {
    title: 'MCP servers for systems nobody else will ever meet',
    description: 'Built a small army of custom MCP implementations that give AI controlled access to internal systems. Extremely useful inside the office; destined to become corporate folklore everywhere else.',
    punchline: 'Internal only. There are more than Legal knows about.',
  },
  {
    title: 'Authorized AI sessions. Humans still holding the keys.',
    description: 'Designed a gated workflow where only approved AI sessions can act on selected systems, every meaningful action keeps a human in the loop, and sensitive credentials never enter the model context.',
    punchline: 'The AI gets permission. It never gets the password.',
  },
  {
    title: 'Six network operating systems. Zero secrets for the AI.',
    description: 'Built a vendor-agnostic guardrail that removes credentials and sensitive configuration data before material from six different network operating systems reaches an AI workflow.',
    punchline: 'The model sees what it needs. The crown jewels stay boringly elsewhere.',
  },
];

export const activity = [
  {
    date: '2026-08-07', label: '07 Aug 2026', category: 'Podcast',
    title: 'Network Automagic 011 — Netlab, ACLs and AI-Generated Configs',
    description: 'Hosted Ivan Pepelnjak for a practical discussion of netlab, multi-vendor abstraction, and where AI-generated network configuration goes wrong.',
    url: 'https://networkautomagic.net/podcast/na011/',
  },
  {
    date: '2026-06-09', label: '09 Jun 2026', category: 'Build',
    title: 'Released netlab-mcp',
    description: 'Published an Apache-2.0 MCP server that turns network intent into rendered configurations and can validate them in a netlab + containerlab environment.',
    url: 'https://github.com/steinzi/netlab-mcp',
  },
  {
    date: '2026-06-08', label: '08 Jun 2026', category: 'Speaking',
    title: '“It Works on My Machine” — (Py)Test Your Automation',
    description: 'Co-proctored an AutoCon 5 workshop in Munich with Urs Baumann and Bart Dorlandt on testing automation logic, mocking devices and APIs, and CI/CD.',
    url: 'https://networkautomation.forum/autocon5',
  },
  {
    date: '2026-04-26', label: '26 Apr 2026', category: 'Podcast',
    title: 'Network Automagic 010 — The Future of Platform Engineering',
    description: 'Hosted Stuart Clark for a conversation about internal developer portals, AI in production, DevRel, and the reality behind golden paths.',
    url: 'https://networkautomagic.net/podcast/na010/',
  },
  {
    date: '2026-04-03', label: '03 Apr 2026', category: 'Podcast',
    title: 'Network Automagic 009 — The Square Table',
    description: 'Convened a seven-person roundtable on AI hype, code quality, critical thinking, and the future of network engineering.',
    url: 'https://networkautomagic.net/podcast/na009/',
  },
  {
    date: '2026-03-27', label: '27 Mar 2026', category: 'Podcast',
    title: 'Network Automagic 008 — MCP vs CLI',
    description: 'Hosted Calvin Remsburg to examine deterministic CLIs, probabilistic tool use, agent security, and how network engineers should prepare.',
    url: 'https://networkautomagic.net/podcast/na008/',
  },
  {
    date: '2026-03-23', label: '23 Mar 2026', category: 'Podcast',
    title: 'Network Automagic 007 — Pulumi',
    description: 'Hosted Scott Lowe for a frank look at Pulumi, infrastructure as code, provider quality, and why network automation remains harder than cloud automation.',
    url: 'https://networkautomagic.net/podcast/na007/',
  },
  {
    date: '2025-11-18', label: '18 Nov 2025', category: 'Speaking',
    title: 'Network Testing with NUTS at AutoCon 4',
    description: 'Co-proctored a sold-out hands-on workshop in Austin covering NUTS, pytest, custom test cases, reports, and the INPG stack.',
    url: 'https://networkautomation.forum/autocon4',
  },
  {
    date: '2025-10-31', label: '31 Oct 2025', category: 'Podcast',
    title: 'Heavy Networking 803 — How to Start a Networking Meetup',
    description: 'Returned to Packet Pushers to unpack how ISNOG went from a bought domain to a 100-person inaugural event — venues, sponsors, recording, pizza, and all.',
    url: 'https://packetpushers.net/podcasts/heavy-networking/hn803-how-to-start-a-networking-meetup/',
  },
  {
    date: '2025-10-10', label: '10 Oct 2025', category: 'Podcast',
    title: 'Network Automagic 006 — AI Hype',
    description: 'Hosted Itential chief architect Peter Sprygada to separate practical AI, MCP, and deterministic execution from the industry hype cycle.',
    url: 'https://networkautomagic.net/podcast/na006/',
  },
  {
    date: '2025-09-15', label: '15 Sep 2025', category: 'Podcast',
    title: 'Network Automagic 005 — HPE Juniper Mist & SSR400',
    description: 'Hosted Daniel Petrov and Thomas Munzer for a technical tour of SSR, Mist APIs, automation tooling, security, and the SSR400 launch.',
    url: 'https://networkautomagic.net/podcast/na005/',
  },
  {
    date: '2025-08-27', label: '27 Aug 2025', category: 'Writing',
    title: 'HPE Juniper Mist’s Agentic AI Play — and the bigger story',
    description: 'Published an opinionated analysis of Mist agentic capabilities and the shift from AI features toward autonomous network operations.',
    url: 'https://www.linkedin.com/pulse/hpe-juniper-mist-just-dropped-agentic-ai-playbut-thats-steinn-%C3%B6rvar-sfrme',
  },
  {
    date: '2025-08-21', label: '21 Aug 2025', category: 'Community',
    title: 'Founded and ran ISNOG #0',
    description: 'Brought roughly 100 Icelandic network professionals together for the country’s first Network Operators Group meeting, with speakers from Nokia, NetBox Labs, academia, local operators, and vendors.',
    url: 'https://isnog.is/',
  },
  {
    date: '2025-06-23', label: '23 Jun 2025', category: 'Podcast',
    title: 'Network Automagic 004 — AutoCon 3 Hallway Track',
    description: 'Produced a three-part field episode from AutoCon 3, capturing the conference conversations that happen away from the formal stage.',
    url: 'https://networkautomagic.net/podcast/na004/',
  },
  {
    date: '2025-05-26', label: '26 May 2025', category: 'Speaking',
    title: 'Network Testing with NUTS at AutoCon 3',
    description: 'Co-proctored a sold-out four-hour workshop in Prague with Urs Baumann, teaching NUTS, pytest, custom reporting, and the INPG stack.',
    url: 'https://networkautomation.forum/autocon3',
  },
  {
    date: '2025-04-10', label: '10 Apr 2025', category: 'Podcast',
    title: 'Network Automagic 003 — NUTS',
    description: 'Hosted Marco Martinez for a deep dive into the Network Unit Testing System, testing architecture, integrations, and pre/post-change validation.',
    url: 'https://networkautomagic.net/podcast/na003/',
  },
  {
    date: '2025-03-05', label: '05 Mar 2025', category: 'Podcast',
    title: 'Network Automagic 002 — Infrahub',
    description: 'Hosted OpsMill CEO Damien Garros to discuss flexible schemas, source-of-truth architecture, and whether Infrahub replaces NetBox.',
    url: 'https://networkautomagic.net/podcast/na002/',
  },
  {
    date: '2025-02-13', label: '13 Feb 2025', category: 'Podcast',
    title: 'Launched Network Automagic with an episode on Temporal',
    description: 'Started the podcast with co-host Urs Baumann and guest Ryan Shaw, exploring durable execution, workflow reliability, and automation war stories.',
    url: 'https://networkautomagic.net/podcast/na001/',
  },
  {
    date: '2025-02-12', label: '12 Feb 2025', category: 'Writing',
    title: 'The EX4000: Entry Level Never Looked So Good!',
    description: 'Published a practical review of Juniper’s EX4000 access switch: fast boot, perpetual PoE, Mist operations, and the feature trade-offs behind the price point.',
    url: 'https://www.linkedin.com/pulse/ex4000-entry-level-never-looked-so-good-steinn-%C3%B6rvar-he26e',
  },
  {
    date: '2024-12-20', label: '20 Dec 2024', category: 'Podcast',
    title: 'Heavy Networking 762 — A Network Automation Roadmap',
    description: 'Joined Packet Pushers to explain the Network Automation Landscape, how to navigate its tool categories, and why automation must begin with the use case.',
    url: 'https://packetpushers.net/podcasts/heavy-networking/hn762-a-network-automation-roadmap/',
  },
  {
    date: '2024-12-13', label: '13 Dec 2024', category: 'Writing',
    title: 'Contributed practitioner perspective to NetBox Labs’ Mist integration launch',
    description: 'Shared operational context on why maintained NetBox–Mist integrations matter and how they reduce the long-term cost of home-grown synchronization scripts.',
    url: 'https://netboxlabs.com/blog/juniper-mist-integration-private-preview/',
  },
  {
    date: '2024-11-22', label: '22 Nov 2024', category: 'Speaking',
    title: '“I Downloaded NetBox, Now What?” at AutoCon 2',
    description: 'Delivered a rapid-fire lightning talk on what to do — and what not to do — after adopting a network source of truth.',
    url: 'https://youtu.be/xgS6D8KVzdQ',
  },
  {
    date: '2024-10-30', label: '30 Oct 2024', category: 'Speaking',
    title: '“Networks Are Critical Infrastructure” at Advania’s security conference',
    description: 'Spoke in Reykjavík about secure network operations, continuity, current technology, and the practices that keep business-critical infrastructure stable.',
    url: 'https://advania.velkomin.is/vidburdur/oryggisradstefna-advania',
  },
  {
    date: '2024-05-30', label: '30 May 2024', category: 'Speaking',
    title: '“MVP — The Keys to Automation” at AutoCon 1',
    description: 'Told the unvarnished story of replacing a legacy IPAM with NetBox: the architecture, the wrong turns, the useful rules, and why getting started beats waiting for the immaculate platform.',
    url: 'https://youtu.be/XRgNm2uhntQ',
  },
  {
    date: '2024-02-27', label: '27 Feb 2024', category: 'Speaking',
    title: 'Explained practical AI at Garðabær Library',
    description: 'Ran a public session on what AI is and how ordinary people can use it — part technology briefing, part community service, and unusually low on enterprise architecture diagrams.',
    url: 'https://www.gardabaer.is/media/menningarmal/MG052_Dagskra_Vor2024_web.pdf',
  },
  {
    date: '2023-09-08', label: '08 Sep 2023', category: 'Speaking',
    title: 'Spoke about generative AI before every meeting had an AI slide',
    description: 'Presented at Morgunblaðið’s Kompaní breakfast on practical uses of generative AI, public access to the technology, its limitations, and the inconvenient fact that outcomes still depend on people.',
    url: 'https://www.mbl.is/vidskipti/frettir/2023/09/08/gervigreindartaeknin_er_i_stodugri_motun/',
  },
  {
    date: '2023-06-30', label: '30 Jun 2023', category: 'Speaking',
    title: 'Network Automation Big Picture at NetDevOps Days London',
    description: 'Mapped automation for an organization operating as an MSP, data center, and ISP: composable orchestration, imperative versus declarative systems, and NetBox as a source of truth.',
    url: 'https://www.youtube.com/watch?v=jou6hYDddig',
  },
  {
    date: '2023-04-18', label: '18 Apr 2023', category: 'Speaking',
    title: 'MSP automation at Juniper’s Product Strategy Summit',
    description: 'Presented in Nice on using Mist APIs and AI-driven operations to make enterprise networks behave more like well-run data centers. The slides survived; the hotel coffee is unconfirmed.',
    url: 'https://github.com/steinzi/msp-MIST-automation-2023',
  },
  {
    date: '2023-03-09', label: '09 Mar 2023', category: 'Podcast',
    title: 'The Hedge 169 — Network Address Translation',
    description: 'Joined Russ White to discuss the history, legitimate uses, creative misuses, and design trade-offs of NAT after researching rather more translation tables than is medically advisable.',
    url: 'https://rule11.tech/hedge-169/',
  },
  {
    date: '2023-01-16', label: '16 Jan 2023', category: 'Build',
    title: 'Published Hotsarch, the BSc project with a NAT problem',
    description: 'Co-built a secure web platform that normalized live NAT data from multiple firewalls and load balancers without giving end users direct access to the devices. Also wrote the long history of NAT hiding in the appendix.',
    url: 'https://hdl.handle.net/1946/43286',
  },
  {
    date: '2022-12-20', label: '20 Dec 2022', category: 'Milestone',
    title: 'Finished a BSc in computer science — at night',
    description: 'Went back to university while working full time to add proper software and computer-science foundations to years of infrastructure experience. “It works” was no longer a sufficient design document.',
    url: 'https://hdl.handle.net/1946/43286',
  },
  {
    date: '2018-12-04', label: '04 Dec 2018', category: 'Milestone',
    title: 'Became Iceland’s youngest CCIE at the time',
    description: 'Earned Cisco CCIE Routing & Switching #60715 at 27, becoming the youngest person in Iceland to hold the certification at that point — useful proof that stubbornness can occasionally be productized.',
    url: 'https://advania.is/grein/Med-aedstu-gradu-fra-Cisco?index=6',
  },
];
