import React from "react";

const socials = [
  { label: "Email", href: "mailto:Akshayk.patel@icloud.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-profile" },
  { label: "GitHub", href: "https://github.com/your-username" },
  { label: "Phone", href: "tel:+919170576684" }
];

const skillGroups = [
  {
    title: "Cloud & DevOps",
    items: ["AWS", "GCP", "Azure", "Tencent Cloud", "Docker", "Kubernetes", "Jenkins", "CI/CD"]
  },
  {
    title: "Programming & Backend",
    items: ["JavaScript", "Python", "Go", "Node.js", "Express", "Django", "Shell Script"]
  },
  {
    title: "Data & Messaging",
    items: ["MySQL", "MongoDB", "Redis", "Kafka", "SQS", "RabbitMQ"]
  },
  {
    title: "Monitoring & Streaming",
    items: ["Datadog", "Zabbix", "Conviva", "CloudFront", "RTMP Streaming", "DRM Encryption", "JAMF Pro"]
  }
];

const experiences = [
  {
    company: "Allen Digital",
    role: "SDE I (SRE)",
    location: "Gurgaon, Haryana",
    period: "Dec 2023 - Present",
    points: [
      "Deployed in-house Google Workspace migration and consolidated domains into allen.in.",
      "Migrated Slack workspace data, Zoom cloud recordings, and NAS data across PAN India.",
      "Completed on-prem to GCP migration for multiple locations (~2000 TB).",
      "Built backend APIs for QNA pages, video workflows, DRM encryption, and OTP SMS migration.",
      "Provided DevOps support for engineering workloads on Kubernetes, AWS, and GCP."
    ]
  },
  {
    company: "Doubtnut (Class21A Technologies)",
    role: "Site Reliability Engineer",
    location: "Gurgaon, Haryana",
    period: "Oct 2020 - Dec 2023",
    points: [
      "Implemented transcript pipeline using Whisper, SQS, MySQL, and RabbitMQ.",
      "Built APIs for DN-Pro, DN Scholarship, DN Books, DNST, and DN Manti.",
      "Optimized AWS, GCP, and SaaS spending by up to 60%.",
      "Migrated compute and database infrastructure from AWS to GCP.",
      "Developed internal automation tools for media optimization and DRM workflows."
    ]
  },
  {
    company: "Karvy Forde Search Private Limited",
    role: "Sr. System Administrator",
    location: "New Delhi",
    period: "Jun 2018 - Sep 2020",
    points: [
      "Managed AWS, Azure, and database infrastructure for application delivery.",
      "Handled enterprise networking, inventory workflows, AD, and file servers."
    ]
  },
  {
    company: "Netsoft Consulting Services Private Limited",
    role: "Network Engineer L1",
    location: "Gurgaon, Haryana",
    period: "Sep 2017 - Jun 2018",
    points: [
      "Managed ADDS, DHCP, file services, and network security across client locations.",
      "Delivered backup, network, and software support for enterprise customers."
    ]
  }
];

const education = [
  {
    title: "MCA - Uttar Pradesh Rajshree Tandon Open University",
    period: "Jan 2024 - Present",
    location: "Allahabad, Uttar Pradesh"
  },
  {
    title: "BCA - Uttar Pradesh Rajshree Tandon Open University",
    period: "Jun 2020 - Jun 2023",
    location: "Allahabad, Uttar Pradesh",
    note: "Gold Medal (1st Rank) in School of Computer and Information Science."
  },
  {
    title: "Diploma in Computer Hardware and Networking - Jetking",
    period: "Apr 2016 - Jun 2017",
    location: "Laxmi Nagar, New Delhi",
    note: "Cyber Carnival 1st rank (29/30) and 1st division."
  }
];

function SectionTitle({ id, title, subtitle }) {
  return (
    <div id={id} className="mb-8">
      <h3 className="text-2xl font-bold text-white md:text-3xl">{title}</h3>
      {subtitle ? <p className="mt-2 text-slate-400">{subtitle}</p> : null}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.2),transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(16,185,129,0.15),transparent_30%)]" />

      <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4">
          <h1 className="text-lg font-bold md:text-xl">Akshay Patel</h1>
          <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-slate-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#education" className="hover:text-white">Education</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16">
        <section className="grid items-center gap-10 py-14 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">SRE | DevOps | Cloud</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
              Hi, I&apos;m Akshay.
              <br />
              I build resilient cloud systems.
            </h2>
            <p className="mt-5 max-w-xl text-slate-300">
              Site Reliability Engineer with strong experience in migration, cloud optimization, observability,
              and backend automation. I have delivered large-scale infra transitions and stable production systems.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-lg bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-700">
                Let&apos;s Connect
              </a>
              <a href="#experience" className="rounded-lg border border-slate-700 px-5 py-3 font-semibold hover:bg-slate-800">
                See Experience
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-blue-950/20">
            <h3 className="text-lg font-semibold text-white">Quick Profile</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li><strong className="text-slate-100">Location:</strong> New Delhi, India</li>
              <li><strong className="text-slate-100">Current Role:</strong> SDE I (SRE) at Allen Digital</li>
              <li><strong className="text-slate-100">Core Focus:</strong> Cloud Migration, DevOps, Reliability</li>
              <li><strong className="text-slate-100">Primary Clouds:</strong> AWS, GCP, Azure, Tencent</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="rounded-md border border-slate-700 px-3 py-1.5 text-sm hover:bg-slate-800"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-8">
          <SectionTitle
            title="What I Do"
            subtitle="I work at the intersection of infrastructure, automation, and product reliability."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
              <h4 className="font-semibold">Cloud Migrations</h4>
              <p className="mt-2 text-sm text-slate-300">Domain/data migrations, on-prem to cloud, and cross-cloud transitions with minimal downtime.</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
              <h4 className="font-semibold">Platform Reliability</h4>
              <p className="mt-2 text-sm text-slate-300">Monitoring, alerting, incident response, and production hardening across distributed systems.</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
              <h4 className="font-semibold">Backend & Automation</h4>
              <p className="mt-2 text-sm text-slate-300">APIs and automation pipelines for video workflows, encryption, content delivery, and internal tools.</p>
            </div>
          </div>
        </section>

        <section id="skills" className="py-12">
          <SectionTitle title="Skills" subtitle="Technologies and tools I use frequently." />
          <div className="grid gap-4 md:grid-cols-2">
            {skillGroups.map((group) => (
              <article key={group.title} className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
                <h4 className="font-semibold text-white">{group.title}</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span key={skill} className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="py-12">
          <SectionTitle title="Experience" subtitle="Professional journey in reliability engineering and cloud operations." />
          <div className="space-y-6">
            {experiences.map((exp) => (
              <article key={exp.company} className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-white">{exp.role}</h4>
                    <p className="text-slate-300">{exp.company}</p>
                    <p className="text-sm text-slate-400">{exp.location}</p>
                  </div>
                  <p className="text-sm font-medium text-blue-300">{exp.period}</p>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300 md:text-base">
                  {exp.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="py-12">
          <SectionTitle title="Education" subtitle="Academic background and achievements." />
          <div className="grid gap-4 md:grid-cols-2">
            {education.map((item) => (
              <article key={item.title} className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
                <h4 className="font-semibold text-white">{item.title}</h4>
                <p className="mt-2 text-sm text-blue-300">{item.period}</p>
                <p className="text-sm text-slate-400">{item.location}</p>
                {item.note ? <p className="mt-2 text-sm text-slate-300">{item.note}</p> : null}
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="py-8">
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8 text-center">
            <h3 className="text-2xl font-bold text-white">Let&apos;s build something reliable together</h3>
            <p className="mx-auto mt-3 max-w-2xl text-slate-300">
              I am open to SRE, DevOps, and Platform Engineering roles where I can drive reliability,
              automation, and cloud efficiency at scale.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href="mailto:Akshayk.patel@icloud.com" className="rounded-lg bg-blue-600 px-5 py-2.5 font-semibold hover:bg-blue-700">
                Email
              </a>
              <a href="tel:+919170576684" className="rounded-lg border border-slate-700 px-5 py-2.5 hover:bg-slate-800">
                Call
              </a>
              <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" className="rounded-lg border border-slate-700 px-5 py-2.5 hover:bg-slate-800">
                LinkedIn
              </a>
              <a href="https://github.com/your-username" target="_blank" rel="noreferrer" className="rounded-lg border border-slate-700 px-5 py-2.5 hover:bg-slate-800">
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
