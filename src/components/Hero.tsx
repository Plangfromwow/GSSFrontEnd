import { motion } from 'framer-motion'
import { Code2, Cpu, Workflow, Calendar, ArrowRight } from 'lucide-react'
import Section from './Section'

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

export default Hero