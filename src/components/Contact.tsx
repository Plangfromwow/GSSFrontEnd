import { Mail, Calendar, PhoneCall } from 'lucide-react'
import Section from './Section'

const Contact = () => (
  <Section id="contact" className="relative">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_60rem_at_50%_0%,rgba(79,209,197,0.12),transparent)]" />
    <div className="mx-auto max-w-4xl">
      <h2 className="text-center text-3xl font-bold sm:text-4xl">Let's talk</h2>
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

export default Contact