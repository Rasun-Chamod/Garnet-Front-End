import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import SectionHeading from '../SectionHeading/SectionHeading'
import { fadeUp, stagger } from '../../animations/variants'

const projects = [
  {
    title: 'Velvet Atelier',
    category: 'Luxury retail',
    description: 'Editorial commerce for a couture accessories label.',
  },
  {
    title: 'Studio Helix',
    category: 'Wellness',
    description: 'A calm, luminous interface for a biotech wellness startup.',
  },
  {
    title: 'Casa Miro',
    category: 'Hospitality',
    description: 'A narrative-driven experience for a boutique hotel group.',
  },
]

function Portfolio() {
  return (
    <section className="border-t border-garnet-line px-6 py-20 md:px-12">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-120px' }}
        className="mx-auto max-w-6xl space-y-12"
      >
        <motion.div variants={fadeUp}>
          <SectionHeading
            eyebrow="Selected work"
            title="Digital environments with editorial pacing."
            subtitle="A curated view of projects where we built premium experiences for ambitious founders."
          />
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              className="group rounded-[28px] border border-garnet-line bg-white/70 p-6 shadow-garnet"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.35em] text-garnet-muted">
                  {project.category}
                </p>
                <FiArrowUpRight className="text-garnet-muted transition group-hover:text-garnet-ink" />
              </div>
              <h3 className="mt-8 font-display text-2xl text-garnet-ink">
                {project.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-garnet-muted">
                {project.description}
              </p>
              <div className="mt-10 h-32 rounded-2xl border border-garnet-line bg-garnet-warm/70" />
            </motion.div>
          ))}
        </div>
        {/* TODO: Swap portfolio cards with case study data. */}
      </motion.div>
    </section>
  )
}

export default Portfolio
