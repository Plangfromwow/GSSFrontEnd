import Section from './Section'
import Step from './Step'

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

export default Process