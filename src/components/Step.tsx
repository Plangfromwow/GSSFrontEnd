import { motion } from 'framer-motion'

const Step = ({ step, title, desc }: { step: string, title: string, desc: string }) => (
  <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative rounded-xl border border-white/10 bg-white/[0.03] p-6">
    <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent/20 font-semibold text-accent">{step}</div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-white/70">{desc}</p>
  </motion.div>
)

export default Step