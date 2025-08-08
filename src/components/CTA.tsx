import { ArrowRight } from 'lucide-react'
import Section from './Section'

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

export default CTA