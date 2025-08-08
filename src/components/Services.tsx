import { Code2, Workflow, Cpu } from 'lucide-react'
import Section from './Section'
import Card from './Card'

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

export default Services