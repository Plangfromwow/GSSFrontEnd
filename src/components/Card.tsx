import { motion } from 'framer-motion'

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

export default Card