import './index.css'
import { motion } from 'framer-motion'
import { Mail, Calendar, PhoneCall, Code2, Cpu, Workflow, ArrowRight, Github, Linkedin } from 'lucide-react'

const Section = ({ id, children, className = '' }: { id?: string, children: React.ReactNode, className?: string }) => (
  <section id={id} className={`container-px py-16 sm:py-24 scroll-mt-24 ${className}`}>
    {children}
  </section>
)

const Navbar = () => (
  <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
    <div className="container-px mx-auto flex h-16 items-center justify-between">
      <a href="#top" aria-label="Go to top" className="text-lg font-extrabold tracking-tight">
        <span className="text-brand">Garcia</span> <span className="text-white">Software Solutions</span>
      </a>
      <nav aria-label="Primary" className="hidden gap-6 text-sm font-medium text-white/80 sm:flex">
        <a className="hover:text-white" href="#services">Services</a>
        <a className="hover:text-white" href="#process">Process</a>
        <a className="hover:text-white" href="#testimonials">Testimonials</a>
        <a className="hover:text-white" href="#contact">Contact</a>
      </nav>
      <div className="flex items-center gap-3">
        <a className="btn-secondary hidden sm:inline-flex" href="#contact">Free consultation</a>
        <a className="btn-primary" href="#contact">Get in touch</a>
      </div>
    </div>
  </header>
)

const Hero = () => (
  <Section className="relative overflow-hidden">
    <div className="absolute inset-0 -z-10 opacity-40">
      <div className="pointer-events-none absolute -left-1/4 top-[-10%] h-[40rem] w-[40rem] rounded-full bg-accent blur-[140px]" />
      <div className="pointer-events-none absolute -right-1/4 bottom-[-10%] h-[40rem] w-[40rem] rounded-full bg-brand blur-[140px]" />
    </div>
    <div className="mx-auto max-w-5xl text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-extrabold tracking-tight sm:text-6xl"
      >
        Garcia Software Solutions
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.7 }}
        className="mx-auto mt-4 max-w-3xl text-lg text-white/70"
      >
        I build custom software to solve real business problems. Contract engineering with a focus on outcomes: automation, integrations, dashboards, and modern web apps.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.7 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <a href="#contact" className="btn-primary">Book a free consult <ArrowRight size={18} /></a>
        <a href="#services" className="btn-secondary">Explore services</a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.7 }}
        className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4"
      >
        {[
          { icon: <Code2 className="text-accent" />, label: 'Web Apps' },
          { icon: <Cpu className="text-brand" />, label: 'Automation' },
          { icon: <Workflow className="text-accent" />, label: 'Integrations' },
          { icon: <Calendar className="text-brand" />, label: 'Consulting' },
        ].map((it) => (
          <div key={it.label} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] p-3">
            {it.icon}
            <span className="text-white/80">{it.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </Section>
)

const Card = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <motion.div whileHover={{ y: -4 }} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-glow">
    <div className="mb-4 inline-flex rounded-lg border border-white/10 bg-white/5 p-3 text-brand">
      {icon}
    </div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-white/70">{desc}</p>
    <div className="mt-4 text-sm text-accent/90 opacity-0 transition group-hover:opacity-100">Learn more →</div>
  </motion.div>
)

const Services = () => (
  <Section id="services">
    <div className="mx-auto max-w-6xl">
      <h2 className="text-center text-3xl font-bold sm:text-4xl">Services</h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
        From idea to deployment. I ship production-grade solutions tailored to your workflow.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card icon={<Code2 />} title="Custom Web Apps" desc="React/TypeScript frontends with scalable APIs—dashboards, portals, and line-of-business tools." />
        <Card icon={<Workflow />} title="Integrations" desc="Connect CRMs, ERPs, and SaaS tools. Zapier/Make or custom API bridges to keep data flowing." />
        <Card icon={<Cpu />} title="Automation" desc="Replace manual tasks with reliable scripts and workflows. Save hours and reduce errors." />
      </div>
    </div>
  </Section>
)

type Testimonial = {
  quote: string
  author: string
  role: string
}

const testimonials: Testimonial[] = [
  {
    quote: 'Jacob quickly understood our messy workflows and delivered an internal tool that saved our team hours every week.',
    author: 'A. Rivera',
    role: 'Ops Manager, LogisticsCo'
  },
  {
    quote: 'Our CRM and billing finally talk to each other. Revenue ops just got a lot smoother.',
    author: 'M. Chen',
    role: 'Head of Sales, FinWell'
  },
  {
    quote: 'From idea to launch in four weeks. Clear communication, clean code, and real business results.',
    author: 'S. Patel',
    role: 'Founder, MarketNest'
  }
]

const Testimonials = () => (
  <Section id="testimonials">
    <div className="mx-auto max-w-6xl">
      <h2 className="text-center text-3xl font-bold sm:text-4xl">What clients say</h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">Real results and smooth delivery.</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <motion.figure
            key={t.author}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-glow"
          >
            <blockquote className="text-white/90">“{t.quote}”</blockquote>
            <figcaption className="mt-4 text-sm text-white/70">
              <div className="font-semibold text-white">{t.author}</div>
              <div>{t.role}</div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  </Section>
)

const CTA = () => (
  <Section className="py-20">
    <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-gradient-to-r from-brand/20 to-accent/20 p-8 sm:p-12 text-center">
      <h2 className="text-2xl font-bold sm:text-3xl">Ready to solve it with software?</h2>
      <p className="mx-auto mt-3 max-w-2xl text-white/70">Book a free consultation to discuss your goals and the fastest path to value.</p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
        <a href="#contact" className="btn-primary">Start your project <ArrowRight size={18} /></a>
        <a href="https://calendly.com/your-calendly/intro" target="_blank" rel="noreferrer" className="btn-secondary">Pick a time</a>
      </div>
    </div>
  </Section>
)

const Step = ({ step, title, desc }: { step: string, title: string, desc: string }) => (
  <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative rounded-xl border border-white/10 bg-white/[0.03] p-6">
    <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent/20 font-semibold text-accent">{step}</div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-white/70">{desc}</p>
  </motion.div>
)

const Process = () => (
  <Section id="process">
    <div className="mx-auto max-w-5xl">
      <h2 className="text-center text-3xl font-bold sm:text-4xl">How we work</h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">Straightforward, transparent, and business-first.</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <Step step="1" title="Discovery" desc="We discuss your goals, current tools, and criteria for success." />
        <Step step="2" title="Proposal" desc="Scope, timeline, and budget options you can choose from." />
        <Step step="3" title="Build" desc="Iterative milestones with demos and clear progress updates." />
        <Step step="4" title="Launch" desc="Deploy, train the team, and handoff with docs and support." />
      </div>
    </div>
  </Section>
)

const Contact = () => (
  <Section id="contact" className="relative">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_60rem_at_50%_0%,rgba(79,209,197,0.12),transparent)]" />
    <div className="mx-auto max-w-4xl">
      <h2 className="text-center text-3xl font-bold sm:text-4xl">Let’s talk</h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">Prefer email or a quick call? Pick what works for you.</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        <a href="mailto:hello@garciasoft.dev" className="rounded-xl border border-white/10 bg-white/[0.04] p-5 hover:bg-white/[0.06]">
          <div className="flex items-center gap-3"><Mail /> <span className="font-semibold">Email</span></div>
          <p className="mt-2 text-sm text-white/70">hello@garciasoft.dev</p>
        </a>
        <a href="https://calendly.com/your-calendly/intro" target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 bg-white/[0.04] p-5 hover:bg-white/[0.06]">
          <div className="flex items-center gap-3"><Calendar /> <span className="font-semibold">Book a meeting</span></div>
          <p className="mt-2 text-sm text-white/70">15–30 min intro call</p>
        </a>
        <a href="tel:+1-555-123-4567" className="rounded-xl border border-white/10 bg-white/[0.04] p-5 hover:bg-white/[0.06]">
          <div className="flex items-center gap-3"><PhoneCall /> <span className="font-semibold">Call</span></div>
          <p className="mt-2 text-sm text-white/70">+1 (555) 123-4567</p>
        </a>
      </div>

      <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <form action="https://formspree.io/f/your-form-id" method="POST" className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm text-white/70" htmlFor="name">Name</label>
            <input className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus-visible:ring-2 focus-visible:ring-brand/60" id="name" name="name" placeholder="Jane Doe" required />
          </div>
          <div>
            <label className="block text-sm text-white/70" htmlFor="email">Email</label>
            <input type="email" className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus-visible:ring-2 focus-visible:ring-brand/60" id="email" name="email" placeholder="you@company.com" required />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm text-white/70" htmlFor="message">What do you need?</label>
            <textarea className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus-visible:ring-2 focus-visible:ring-brand/60" id="message" name="message" rows={4} placeholder="Tell me about your project" required />
          </div>
          <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-3">
            <button type="submit" className="btn-primary">Send message</button>
            <div className="text-sm text-white/60">Or email directly: hello@garciasoft.dev</div>
          </div>
        </form>
      </div>
    </div>
  </Section>
)

const Footer = () => (
  <footer className="border-t border-white/10 py-10">
    <div className="container-px mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row">
      <div className="text-sm text-white/60">© {new Date().getFullYear()} Garcia Software Solutions, LLC</div>
      <div className="flex items-center gap-4 text-white/70">
        <a className="hover:text-white" href="https://github.com/" target="_blank" rel="noreferrer"><Github size={18} /></a>
        <a className="hover:text-white" href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={18} /></a>
      </div>
    </div>
  </footer>
)

export default function App() {
  return (
    <div id="top">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
  <Testimonials />
        <Contact />
  <CTA />
      </main>
      <Footer />
    </div>
  )
}
