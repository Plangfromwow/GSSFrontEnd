import { motion } from 'framer-motion'
import Section from './Section'

export type Testimonial = { quote: string; author: string; role: string }

const testimonials: Testimonial[] = [
  { quote: '"Insert a strong, specific client quote here about impact and outcomes."', author: 'Client Name', role: 'Title, Company' },
  { quote: '"Another concise testimonial focused on results, trust, and speed."', author: 'Client Name', role: 'Title, Company' },
  { quote: '"Clear communication and measurable business value—highly recommended."', author: 'Client Name', role: 'Title, Company' },
]

const Testimonials = () => {
  // Duplicate items to create an endless loop effect
  const items = [...testimonials, ...testimonials]
  return (
    <Section id="testimonials">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">What clients say</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">Cards slide slowly; hover to pause.</p>
      </div>

      {/* Full-bleed marquee row */}
      <div className="mt-8 -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="marquee w-full pt-3 pb-2">
          <div className="marquee-track">
            {items.map((t, i) => (
              <motion.figure
                key={i}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="relative w-[24rem] shrink-0 rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-glow hover:z-10 hover:shadow-2xl hover:shadow-accent/20 hover:ring-1 hover:ring-accent/40"
              >
                <blockquote className="text-white/90">{t.quote}</blockquote>
                <figcaption className="mt-4 text-sm text-white/70">
                  <div className="font-semibold text-white">{t.author}</div>
                  <div>{t.role}</div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Testimonials