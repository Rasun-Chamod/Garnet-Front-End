import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    title: 'Velvet Atelier',
    category: 'Luxury Retail',
    description: 'Editorial commerce for a couture accessories label.',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d',
  },
  {
    title: 'Studio Helix',
    category: 'Wellness',
    description: 'A calm, luminous interface for a biotech wellness startup.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f',
  },
  {
    title: 'Casa Miro',
    category: 'Hospitality',
    description: 'Narrative-driven experience for a boutique hotel group.',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511',
  },
  {
    title: 'Noir Atelier',
    category: 'Fashion',
    description: 'Minimal product storytelling for a modern fashion house.',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f',
  },
  {
    title: 'Lumen Labs',
    category: 'Technology',
    description: 'A premium platform for an AI-driven lighting studio.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  },
  {
    title: 'Terra Maison',
    category: 'Architecture',
    description: 'Immersive storytelling for a contemporary design studio.',
    image: 'https://images.unsplash.com/photo-1502005097973-6a7082348e28',
  },
]

const categories = ['All', ...new Set(projects.map((project) => project.category))]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return projects
    return projects.filter((project) => project.category === activeCategory)
  }, [activeCategory])

  const [featured, ...rest] = filtered

  return (
    <section className="border-t border-garnet-line px-6 py-24 md:px-12 md:py-28">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-120px' }}
        className="mx-auto max-w-6xl space-y-12"
      >
        <motion.div variants={fadeUp} className="space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-garnet-muted">
            Portfolio
          </p>
          <h2 className="font-display text-3xl font-semibold text-garnet-ink md:text-4xl">
            A curated selection of premium digital projects.
          </h2>
          <p className="text-base leading-relaxed text-garnet-muted">
            Each experience blends editorial storytelling with refined digital
            craft.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.35em] transition ${
                activeCategory === category
                  ? 'border-garnet-ink text-garnet-ink'
                  : 'border-garnet-line text-garnet-muted hover:border-garnet-ink'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {featured ? (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.5 }}
              className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]"
            >
              <div className="group relative overflow-hidden rounded-[32px] border border-garnet-line bg-black">
                <img
                  src={featured.image}
                  alt={featured.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/70">
                    {featured.category}
                  </p>
                  <h3 className="mt-3 font-display text-2xl text-white">
                    {featured.title}
                  </h3>
                </div>
              </div>

              <div className="rounded-[24px] border border-garnet-line bg-white/70 p-8 shadow-garnet">
                <p className="text-xs uppercase tracking-[0.35em] text-garnet-muted">
                  Featured
                </p>
                <h3 className="mt-4 font-display text-2xl text-garnet-ink">
                  {featured.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-garnet-muted">
                  {featured.description}
                </p>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <motion.div variants={container} className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {rest.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-[28px] border border-garnet-line bg-black"
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="h-80 w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/45 opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-6 left-6 translate-y-6 text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-xs uppercase tracking-[0.35em] text-white/70">
                  {project.category}
                </p>
                <h3 className="mt-3 font-display text-2xl">{project.title}</h3>
                <p className="mt-3 max-w-xs text-sm text-white/80">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Portfolio
